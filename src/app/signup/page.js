"use client"
import SignUp from '@/components/HomePage/Home/SignUp';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDatabase } from '@/components/features/dbContext';
import Loader from '@/components/shared/Loader';

const Page = () => {
    const {data: session} = useSession()
    const {loading} = useDatabase()
    const router = useRouter()
  
  if(loading) {
    return <Loader/>
  }
  else{
    if(session && session.user){
          router.push("/")
    }
    else return (
      <>
        <SignUp/>
      </>
    );
    
}
}

export default Page;
