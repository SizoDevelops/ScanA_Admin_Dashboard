"use client"
import React from 'react'
import styles from '../../app/page.module.css'
import Image from 'next/image'
import DashProfile from '@/components/HomePage/dashProfile'
import SidePanel from '@/components/HomePage/sidePanel'
import { DataBaseFunc } from '../DatabaseSchema'
import { getSession, signOut, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function HomePage() {
  const [schema, setSchema] = useState({members: []})
  const [loading, setLoading] = useState(true)
  const {data: session} = useSession()


  useEffect(() => {
    const getUser = async() => {
      const res = await fetch("api/user", {
        method: "POST",
        cache: 'no-cache',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({key:session?.user.key})
      })
      const user = await res.json()
      setSchema(user)
      setLoading(false)
    }

    getUser()
  }, [session])
if(loading) {
  return <>LOADING</>
}
else return (
    <> 
    <div className={styles.container}>
    <SidePanel />
      <div className={styles.nav}>
        
<div className={styles.searchContainer}>
  <div className={styles.nameHolder}>
    <div className={styles.imageHolder}></div>
    <div className={styles.name}>
      <p>Hello again</p>
      <h4>{schema?.school_admin.admin_name.toUpperCase() || "User Name"}</h4>
    </div>
  </div>
  <div className={styles.searchBar}>
    <div className={styles.searchIcon}>
      <Image alt="Search Icon" src="/icons/iconamoon_search.png" sizes='20' fill/>
    </div>
    <input type='text' placeholder='Search'/>
  </div>
</div>
<div className={styles.categories}>
        <div className={styles.cat} onClick={signOut}>
          <p>All</p>
        </div>
        <div className={styles.cat}>
          <p>Admin</p>
        </div>
        <div className={styles.cat}>
          <p>Teaching</p>
        </div>
        <div className={styles.cat}>
          <p>Non-Teaching</p>
        </div>
      </div>
    <div className={styles.profiles}>
        {
            schema?.members.map((member, index) => {
                return (
                    <div key={member.last_name+index}>
                        <DashProfile slug={member.id} title={member.title} last_name={member.last_name} position={member.position} initial={member.initial} data={member}/>
                    </div>
                    
                )
            })
        }
        
     
    </div>



      </div>

      
    </div>

    </>
  ) 
}

