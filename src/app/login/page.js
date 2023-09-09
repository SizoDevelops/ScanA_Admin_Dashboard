"use client"
import Login from '@/components/HomePage/Home/Login';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
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
      redirect("/", "replace")
    }
    else return (
      <>
        <Login/>
      </>
    );
    }
}

export default Page;
