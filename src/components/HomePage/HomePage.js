"use client"
import React, { useEffect } from 'react'
import styles from '../../app/page.module.css'
import Image from 'next/image'
import DashProfile from '@/components/HomePage/dashProfile'
import SidePanel from '@/components/HomePage/sidePanel'
import { useDatabase } from '../features/dbContext'
import { useSelector } from 'react-redux'
import { signOut } from 'next-auth/react'


export default function HomePage() {

  const schema = useSelector(state => state.Database.value)


useEffect(() => {
  
  //  signOut()
}, [schema])



if(schema.school_name === "") {
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
        <div className={styles.cat} onClick={async () => {
          

          
        }}>
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
            schema.members.map((member, index) => {
                return (
                    <div key={member.last_name+index}>
                        <DashProfile slug={member.id} title={member.title} last_name={member.last_name} position={member.position} initial={member.initial} schema={member}/>
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

