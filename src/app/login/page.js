"use client"
import Login from '@/components/HomePage/Home/Login';
import { useDatabase } from '@/components/features/dbContext';
import Loader from '@/components/shared/Loader';
import { signOut, useSession } from 'next-auth/react';
import {redirect, useRouter } from 'next/navigation';


const Page = () => {
    const {data: session} = useSession()
    const {loading} = useDatabase()
    
    const router = useRouter()

  
    if(loading) {
      return <Loader/>
    }

    else {

    
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
        <Login/>
      </>
    );
  }
}

export default Page;
