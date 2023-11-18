"use client";
import Home from "@/components/HomePage/Home/Home";
import HomePage from "@/components/HomePage/HomePage";
import { useDatabase } from "@/components/features/dbContext";
import Loader from "@/components/shared/Loader";
import { useSession } from "next-auth/react";

const Page = () => {
  const { data: session } = useSession();
  const { loading } = useDatabase();

  if (loading) {
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
