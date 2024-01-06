"use client"
import SignUp from '@/components/HomePage/Home/SignUp';
import { redirect } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
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
      if(session.user?.school_name){
        () => <Loader />
        router.push(`/user/${session.user?.school_name?.split(" ")[0]}${session.user?.school_name?.split(" ")[1]}`)
       
      }
      else {
        signOut()
      }
        
    }
    else return (
      <>
        <SignUp/>
      </>
    );
    
}
}

export default Page;
