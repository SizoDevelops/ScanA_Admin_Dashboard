"use client";
import Home from "@/components/HomePage/Home/Home";
import HomePage from "@/components/HomePage/HomePage";

import Loader from "@/components/shared/Loader";
import { signOut, useSession } from "next-auth/react";

import { redirect, useRouter } from 'next/navigation';

const Page = () => {
 const {data: session, status} = useSession()
 const router = useRouter()

  if (status === "loading") {
    return <Loader />;
  } else if (status === "authenticated"){
    if(session.user?.school_name !== undefined){
      redirect(`/user/${session.user?.school_name?.split(" ")[0]}${session.user?.school_name?.split(" ")[1]}`)
    }
    else {
      signOut()
    }
      
  } 
   else  return (
      <>
        <Home />
      </>
    );
};

export default Page;
