"use client"
import HomePage from '@/components/HomePage/HomePage'
import Loader from '@/components/shared/Loader'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

import React from 'react'

export default function Page({params}) {
    const {data: session, status} = useSession()

if(status === "loading") return <Loader/>
else if(status === "authenticated" && `${session.user?.school_name?.split(" ")[0]}${session.user?.school_name?.split(" ")[1]}` !== params.slug) redirect("/_error")
else  return (
    <HomePage/>
  )
}
