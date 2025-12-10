"use client";
import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { useDatabase } from "@/components/features/dbContext";
import Login from "@/components/HomePage/Home/Login";
import Loader from "@/components/shared/Loader";

const Page = () => {
  const { data: session, status } = useSession();
  const { loading } = useDatabase();

  const router = useRouter();

  useEffect(() => {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      router.push("https://scana.co.za");
    }

    if (status === "authenticated" && session && session?.user) {
      if (session?.user.school_name) {
        redirect(
          `/user/${session?.user.school_name
            .toLowerCase()
            .replace(/\s+/g, "-")}`
        );
      } else {
        signOut();
      }
    }
  }, [status, session]);

  if (loading || status === "loading") {
    return <Loader />;
  }

  if (!session || !session?.user || !session?.user.school_name) {
    return <Login />;
  }

  return <Loader />; // Or render a default component if needed
};

export default Page;
