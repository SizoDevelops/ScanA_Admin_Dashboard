"use client"
import { useEffect } from 'react';
import { redirect} from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import { useDatabase } from '@/components/features/dbContext';
import Loader from '@/components/shared/Loader';
import ForgotPassword from '@/components/HomePage/Home/ForgotPassword';

const Page = () => {
  const { data: session, status } = useSession();
  
  useEffect(() => {
    if (status === 'authenticated' && session && session?.user) {
      if (session?.user.school_name) {
        redirect(`/user/${session?.user.school_name.toLowerCase().replace(/\s+/g, '-')}`);
      } else {
        signOut();
      }
    }
  }, [status, session]);

  if (status === 'loading') {
    return <Loader />;
  }

  if (!session || !session?.user || !session?.user.school_name) {
    return <ForgotPassword />;
  }

  return <Loader/>; // Or render a default component if needed
};

export default Page;
