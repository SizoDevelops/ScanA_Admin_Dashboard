"use client"
import Login from '@/components/HomePage/Home/Login';
import { useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Page = () => {
    const {data: session} = useSession()

    const router = useRouter()

  
  
  if(session && session.user){
          router.push("/")
    }
  else return (
      <>
        <Login/>
      </>
    );

}

export default Page;
