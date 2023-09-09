"use client"
import SignUp from '@/components/HomePage/Home/SignUp';
import { redirect } from 'next/navigation';
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
          redirect("/", "replace")
    }
    else return (
      <>
        <SignUp/>
      </>
    );
    }
}

export default Page;
