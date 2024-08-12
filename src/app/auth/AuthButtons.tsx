'use client';
import { Button } from '@/components/ui/button';
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components';
import React, { useState } from 'react';

const AuthButtons = () => {

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div
      className='flex gap-3 flex-1 md:flex-row flex-col relative z-50'
    >
      <RegisterLink onClick={() => setIsLoading(true)}>
        <Button
          className='cursor-pointer text-white bg-[#6c63ff] mt-[30px] px-[30px] py-3 rounded-[20px] border-0'
          variant={"outline"}
          disabled={isLoading}
        >
          Sign Up
        </Button>
      </RegisterLink>

      <LoginLink onClick={() => setIsLoading(true)}>
        <Button
          className='cursor-pointer text-white bg-[#6c63ff] mt-[30px] px-[30px] py-3 rounded-[20px] border-0 hover:bg-[#332da0]'
          disabled={isLoading}
        >
          Log In
        </Button>
      </LoginLink >
    </div>
  );
};

export default AuthButtons;