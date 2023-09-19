"use client"
import Login from '@/components/HomePage/Home/Login';
import { useDatabase } from '@/components/features/dbContext';
import Loader from '@/components/shared/Loader';
import { useSession } from 'next-auth/react';
import {useRouter } from 'next/navigation';


const Page = () => {
    const {data: session} = useSession()
    const {loading} = useDatabase()
    
    const router = useRouter()

  
    if(loading) {
      return <Loader/>
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
