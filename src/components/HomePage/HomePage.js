"use client"
import React, { useEffect, useState } from 'react'
import styles from '@/components/HomePageCSS/homePage.module.css'
import DashProfile from '@/components/HomePage/dashProfile'
import SidePanel from '@/components/HomePage/sidePanel'
import { useSelector } from 'react-redux'
import { signOut } from 'next-auth/react'
import Loader from '../shared/Loader'
import Image from 'next/image'
import Logo from '../shared/Logo'

export default function HomePage() {

  const schema = useSelector(state => state.Database.value)
  const [users, setUsers] = useState([{}])
  const [search, setSearch] = useState("")


useEffect(() => {
  setUsers(schema.members)
  const members = []
  schema.members.forEach(elem => {
    if(elem.last_name.toUpperCase().includes(search.toUpperCase()) || elem.first_name.toUpperCase().includes(search.toUpperCase())  || elem.title.toUpperCase().includes(search.toUpperCase()) || elem.initial.toUpperCase().includes(search.toUpperCase())){
        members.push(elem)
        setUsers(members)
    }
  });
}, [schema, search])




if(schema.school_name === "" || !users) {
  return <Loader/>
}
else return (

    <div className={styles.container}>
      <SidePanel/>
      <div className={styles.content}>
         <div className={styles.menu}>
        <div className={styles.intro}>
          <Logo bgColor={"#0099F1"} widthV={400} heightV={120} width={100} height={30}/>
          <div className={styles.logout}>
            <button onClick={() => {}}>Logout</button>
          </div>
        </div>
      </div>

      <div className={styles.summary}>
        <Summary/>
        <Summary/>
      </div>
      </div>
     

    </div>

    
  ) 
}


const Summary = () => {
  return (
    <div className={styles.sumDiv}>
        <p className={styles.sumTitle}>Present Summary</p>

        <div className={styles.summaryHeader}>
          <div>
            <p className={styles.header}>Present</p>
            <p className={styles.present}>140</p>
          </div>
          <span/>
          <div>
            <p className={styles.header}>Absent</p>
            <p className={styles.present}>140</p>
          </div>
        </div>

      </div>
  )
}