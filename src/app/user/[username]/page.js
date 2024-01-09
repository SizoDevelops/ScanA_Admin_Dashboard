"use client"
import HomePage from '@/components/HomePage/HomePage'
import { useDatabase } from '@/components/features/dbContext'
import Loader from '@/components/shared/Loader'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Page({params}) {
    const {data: session, status} = useSession()
    const {loading} = useDatabase()
    const user = useSelector(state => state.Database.value)
if(status === "loading" || loading) return <Loader/>
else if(status === "authenticated" && `${user.school_name.toLowerCase().replace(/\s+/g, '-')}` !== params.username) redirect("/_error")
else  return (
    <HomePage/>
  )
}
