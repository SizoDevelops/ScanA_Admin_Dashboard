"use client"
import Home from '@/components/HomePage/Home/Home';
import HomePage from '@/components/HomePage/HomePage';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const {data: session} = useSession()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    if(session){
      setLoading(false)
    }
  }, [session])


  if(loading){
    <>Loading</>
  }
  else {
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

}

export default Page;
