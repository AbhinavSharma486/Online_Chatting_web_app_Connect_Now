import { Button } from '@/components/ui/button';
import React from 'react';

const AuthButtons = () => {
  return (
    <div
      className='flex gap-3 flex-1 md:flex-row flex-col relative z-50'
    >
      <Button
        className='cursor-pointer text-white bg-[#6c63ff] mt-[30px] px-[30px] py-3 rounded-[20px] border-0'
        variant={"outline"}
      >
        Sign Up
      </Button>

      <Button
        className='cursor-pointer text-white bg-[#6c63ff] mt-[30px] px-[30px] py-3 rounded-[20px] border-0 hover:bg-[#332da0]'
      >
        Log In
      </Button>
      AuthButtons
    </div>
  );
};

export default AuthButtons;