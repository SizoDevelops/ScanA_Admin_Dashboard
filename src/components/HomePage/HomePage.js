"use client"
import React, { useEffect, useState } from 'react'
import styles from '@/components/HomePageCSS/homePage.module.css'
import Image from 'next/image'
import DashProfile from '@/components/HomePage/dashProfile'
import SidePanel from '@/components/HomePage/sidePanel'
import { useSelector } from 'react-redux'
import { signOut } from 'next-auth/react'
import Loader from '../shared/Loader'
// import { IconContext } from 'react-icons'
// import { FiSearch } from "react-icons/fi";
// import { RiLogoutCircleLine } from "react-icons/ri";


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
    
     <div className={styles.panel}>
         <SidePanel />
      </div>
      <div className={styles.nav}>
        
<div className={styles.searchContainer}>
  <div className={styles.nameHolder}>
    <div className={styles.imageHolder}></div>
    <div className={styles.name}>
      <p>Hello</p>
      <h4>{schema?.school_admin?.admin_name.toUpperCase() || "User Name"}</h4>
    </div>
    <div title="Log Out" onClick={signOut}>
    {/* <IconContext.Provider value={{color: "#03a4ff", style: { verticalAlign: 'middle' }}}>
    <RiLogoutCircleLine className={styles.logOut}/>
    </IconContext.Provider> */}
    
    <svg className={styles.logOut} fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"></path>
</svg>
    </div>
   
  </div>
  <div className={styles.searchBar}>
    <div >
      {/* <Image alt="Search Icon" src="/icons/iconamoon_search.png" sizes='20' fill/> */}
      {/* <IconContext.Provider value={{color: "#03a4ff", style: { verticalAlign: 'middle' }}}>
    <FiSearch />
    </IconContext.Provider> */}
    <svg className={styles.searchIcon} fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
</svg>
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
                        <DashProfile slug={member.id} title={member.title} last_name={member.last_name} position={member.position} initial={member.initial} schema={member} image={"https://i.ibb.co/0csMj5v/Rectangle-353.png"} center={schema?.school_name} persal={member.persal}/>
                    </div>
                    
                )
            })
          
        }
        
     
    </div>



      </div>

    </body>

    
  ) 
}

