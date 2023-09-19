"use client"
import Login from '@/components/HomePage/Home/Login';
import { useDatabase } from '@/components/features/dbContext';
import Loader from '@/components/shared/Loader';
import { useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Page = () => {
    const {data: session} = useSession()
    const {loading} = useDatabase()
    
    const router = useRouter()

  
    if(loading) {
      return <Loaderr/>
    }

    else {

    
  if(session && session.user){

          router.push("/")
          
    }
  else return (
      <>
        <Login/>
      </>
    );
  }
}

export default Page;
