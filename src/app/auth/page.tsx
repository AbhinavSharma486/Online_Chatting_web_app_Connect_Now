import React from 'react';
import Image from 'next/image';
import AuthButtons from './AuthButtons';

const Page = () => {
  return (
    <div className="bg-black flex h-screen w-full relative">
      <div
        style={{
          width: '200px', height: '200px', filter: 'blur(120px)', position: 'absolute', borderRadius: '50%', left: '10%', top: '20%', background: 'linear-gradient(to bottom, white, pink)'
        }}
      >
      </div>
      <div
        style={{
          width: '200px', height: '200px', filter: 'blur(100px)', position: 'absolute', borderRadius: '50%', right: '10%', top: '20%', background: 'linear-gradient(to bottom, white, pink)'
        }}
      >
      </div>

      <div
        className="flex-1 flex overflow-hidden relative justify-center items-center"
      >
        <div
          className="flex flex-col gap-20 xl:ml-40 text-center md:text-start font-semibold"
        >
          <Image
            src="/logo2.png"
            alt='Connect Now Logo'
            width={763}
            height={173}
            className='mt-20 w-[420px] z-0 pointer-events-none select-none'
          />
          <div className="landing-page">
            <div className="content">
              <div
                className="container flex items-center justify-between gap-[140px] min-h-[calc(100vh_-_80px)]"
              >
                <div className="info">
                  <h1 className='text-[#bbbbbb] text-[44px]'>
                    Connect with Friends and your Loved One in Real Time
                  </h1>
                  <p
                    className='leading-[1.6] text-[15px] text-[#b3b3b3] m-0'
                  >
                    From Quick Chats to Deep Conversations, We've got everything covered for you.
                  </p>
                  <AuthButtons />
                </div>
                <div className="max-w-full">
                  <img
                    className="w-[600px] h-[400px]"
                    src="https://cdni.iconscout.com/illustration/premium/thumb/businessman-working-using-vr-tech-3840669-3202986.png?f=webp"
                    alt="Main"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
