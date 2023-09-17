"use client"
import SignUp from '@/components/HomePage/Home/SignUp';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Page = () => {
    const {data: session} = useSession()
    const [loading, setLoading] = useState(true)
    const router = useRouter()
    useEffect(() => {
      
        setLoading(false)
      
    }, [session])
  
  
        if(session && session.user){
          router.push("/")
    }
    else return (
      <>
        <SignUp/>
      </>
    );
    
}

export default Page;
