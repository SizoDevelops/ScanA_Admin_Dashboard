"use client";

import Home from '@/components/HomePage/Home/Home';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


const Page = () => {
    const router = useRouter();
useEffect(() => {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      router.push("https://scana.co.za");
    }
    
  }, []);

    return <Home />;

};

export default Page;
