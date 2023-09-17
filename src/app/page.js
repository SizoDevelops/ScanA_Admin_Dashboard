"use client"
import Home from '@/components/HomePage/Home/Home';
import HomePage from '@/components/HomePage/HomePage';
import { signOut, useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const {data: session} = useSession()

  useEffect(() => {
    // signOut()
  },[])

      if(session && session.user){
    return (
      <>
        <HomePage/>
      </>
    );
  }
  else return (
    <>
      <Home/>
    </>
  );
  
}

export default Page;
