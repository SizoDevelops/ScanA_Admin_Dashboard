"use client";
import Home from "@/components/HomePage/Home/Home";
import HomePage from "@/components/HomePage/HomePage";

import Loader from "@/components/shared/Loader";
import { useSession } from "next-auth/react";

import { useRouter } from 'next/navigation';
import { useEffect } from "react";
const Page = () => {
 const {data: session, status} = useSession()
 
  if (status === "loading") {
    return <Loader />;
  } else if (session) {
    return (
      <>
        <HomePage />
      </>
    );
  } else
    return (
      <>
        <Home />
      </>
    );
};

export default Page;
