"use client"
import HomePage from '@/components/HomePage/HomePage'
import { useDatabase } from '@/components/features/dbContext'
import Loader from '@/components/shared/Loader'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

import React, { useEffect, useState } from 'react'

export default function Page({params}) {
    const {data: session, status} = useSession()
    const {loading} = useDatabase()

if(status === "loading" || loading) return <Loader/>
else if(status === "authenticated" && `${session?.user.school_name.toLowerCase().replace(/\s+/g, '-')}` !== params.username) redirect("/_error")
else  return (
    <HomePage/>
  )
}
