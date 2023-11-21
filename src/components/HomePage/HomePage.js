"use client"
import React, { useEffect, useState } from 'react'
import styles from '@/components/HomePageCSS/homePage.module.css'
import Image from 'next/image'
import DashProfile from '@/components/HomePage/dashProfile'
import SidePanel from '@/components/HomePage/sidePanel'
import { useSelector } from 'react-redux'
import { signOut } from 'next-auth/react'
import Loader from '../shared/Loader'


export default function HomePage() {

  const schema = useSelector(state => state.Database.value)
  const [users, setUsers] = useState([{}])
  const [search, setSearch] = useState("")


useEffect(() => {
  setUsers(schema.members)
  const members = []
  schema.members.forEach(elem => {
    if(elem.last_name.includes(search.toUpperCase()) || elem.first_name.includes(search.toUpperCase()) || elem.position.includes(search.toUpperCase()) || elem.title.includes(search.toUpperCase()) || elem.initial.includes(search.toUpperCase())){
        members.push(elem)
        setUsers(members)
    }
  });
}, [schema, search])




if(schema.school_name === "" || !users) {
  return <Loader/>
}
else return (

    <body className={styles.container}>
    <SidePanel />
      <div className={styles.nav}>
        
<div className={styles.searchContainer}>
  <div className={styles.nameHolder}>
    <div className={styles.imageHolder}></div>
    <div className={styles.name}>
      <p>Hello</p>
      <h4>{schema?.school_admin?.admin_name.toUpperCase() || "User Name"}</h4>
    </div>
    <div className={styles.logOut} onClick={signOut}>
      <h4>Log Out</h4>
    </div>
  </div>
  <div className={styles.searchBar}>
    <div className={styles.searchIcon}>
      <Image alt="Search Icon" src="/icons/iconamoon_search.png" sizes='20' fill/>
    </div>
    <input type='text' placeholder='Search' onChange={(e) => setSearch(e.target.value)}/>
  </div>
</div>
<div className={styles.categories}>
        {/* <div className={styles.cat} onClick={async () => {
          

          
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
        </div> */}
      </div>
    <div className={styles.profiles}>
        {
            users.map((member, index) => {
                return (
                    <div key={member.last_name+index} style={{}}>
                        <DashProfile slug={member.id} title={member.title} last_name={member.last_name} position={member.position} initial={member.initial} schema={member} image={"https://i.ibb.co/0csMj5v/Rectangle-353.png"} center={schema?.school_name}/>
                    </div>
                    
                )
            })
          
        }
        
     
    </div>



      </div>

    </body>

    
  ) 
}

