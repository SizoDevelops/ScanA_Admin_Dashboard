"use client"
import { useEffect } from 'react';
import { redirect, useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import { useDatabase } from '@/components/features/dbContext';
import Loader from '@/components/shared/Loader';
import SignUp from '@/components/HomePage/Home/SignUp';

const Page = () => {
  const { data: session, status } = useSession();
  const { loading } = useDatabase();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated' && session && session?.user) {
      if (session?.user.school_name) {
        redirect(`/user/${session?.user.school_name.toLowerCase().replace(/\s+/g, '-')}`);
      } else {
        signOut();
      }
    }
  }, [status, session]);

  if (loading || status === 'loading') {
    return <Loader />;
  }

  if (!session || !session?.user || !session?.user.school_name) {
    return <SignUp />;
  }

  return <Loader/>;  // Or render a default component if needed
};

export default Page;
