"use client"
import HomePage from '@/components/HomePage/HomePage'
import { useDatabase } from '@/components/features/dbContext'
import Loader from '@/components/shared/Loader'
import { useSession } from 'next-auth/react'
import { redirect, useParams } from 'next/navigation'
import { useRouter } from 'next/router'

import React, { useEffect, useState } from 'react'

export default function Page() {
    const {data: session, status} = useSession()
    const {loading} = useDatabase()
    const params = useParams()
    const router = useRouter();

  useEffect(() => {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      router.push("https://scana.co.za");
    }
    
  }, [status]);


if(status === "loading" || loading) return <Loader/>
else if(status === "authenticated" && `${session?.user.school_name.toLowerCase().replace(/\s+/g, '-')}` !== params.username) redirect("/_error")
else  return (
    <HomePage/>
  )
}
