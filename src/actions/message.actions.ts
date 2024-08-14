"use server";

import { redis } from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

type SendMessageActionArgs = {
  content: string;
  receiverId: string;
  messageType: "text" | "image";
};

export async function sendMessageAction({ content, messageType, receiverId }: SendMessageActionArgs) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return { success: false, message: "User not authenticated" };

  const senderId = user.id;

  const conversationId = `conversation:${[senderId, receiverId].sort().join(":")}`;

  const conversationExists = await redis.exists(conversationId);

  if (!conversationExists) {
    await redis.hset(conversationId, {
      participant1: senderId,
      participant2: receiverId,
    });

    await redis.sadd(`user:${senderId}:converations`, conversationId);
    await redis.sadd(`user:${receiverId}:converations`, conversationId);
  }

  // Generating a unique message id
  const messageId = `message:${Date.now()}:${Math.random().toString(36).substring(2, 9)}`;
  const timestamp = Date.now();

  // Creating the message hash
  await redis.hset(messageId, {
    senderId,
    content,
    timestamp,
    messageType,
  });

  await redis.zadd(`${conversationId}:messages`, { score: timestamp, member: JSON.stringify(messageId) });

  return { success: true, conversationId, messageId };
}

// Abhinav , ajay
// 6004    , 6005

// Abhinav sends a message to ajay
// senderId: 6004 , receiverId: 6005
// `conversation:6004:6005`

// Ajay sends a message to abhinav
// senderId: 6005 , receiverId: 6004
// `conversation:6005:6004`