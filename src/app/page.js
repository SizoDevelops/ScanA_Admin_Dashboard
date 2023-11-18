"use client";
import Home from "@/components/HomePage/Home/Home";
import HomePage from "@/components/HomePage/HomePage";

import Loader from "@/components/shared/Loader";
import { useSession } from "next-auth/react";

import { useRouter } from 'next/navigation';
import { useEffect } from "react";
const Page = () => {
  const router = useRouter();
 const {data: session, status} = useSession()
  useEffect(() => {
    if (status !== "loading" && !session) {
      // Redirect the user to the login page if not authenticated
      router.push('/'); // Replace '/login' with your login page route
    }
  }, [status, session, router]);

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
