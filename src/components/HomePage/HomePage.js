"use client"
import React, { useEffect, useState } from 'react'
import styles from '@/components/HomePageCSS/homePage.module.css'
import DashProfile from '@/components/HomePage/dashProfile'
import SidePanel from '@/components/HomePage/sidePanel'
import { useSelector } from 'react-redux'
import { signOut } from 'next-auth/react'
import Loader from '../shared/Loader'
import Logo from '../shared/Logo'
import Modal from './Modal'
import { useDatabase } from '../features/dbContext'

export default function HomePage() {

  const schema = useSelector(state => state.Database.value)
  const [users, setUsers] = useState([{}])
  const [search, setSearch] = useState("")
  const { errCode} = useDatabase()

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
  <React.Fragment>
     {
              errCode.message.length < 1 ? <></> : <Modal errCode={errCode}/>
      }
    <div className={styles.container}>
     
      <SidePanel/>
      <div className={styles.content}>
         <div className={styles.menu}>
        <div className={styles.intro}>
          <Logo bgColor={"#0099F1"} widthV={400} heightV={120} width={100} height={30}/>
          <div className={styles.logout}>
            <button onClick={() => signOut()}>Logout</button>
          </div>
        </div>
      </div>

      <div className={styles.summary}>
        <Summary/>
        <Summary/>
      </div>


      <div className={styles.search}>
        <div className={styles.searchBar}>
        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	        <path d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989q-.975.35-1.96.35q-2.402 0-4.066-1.663q-1.664-1.664-1.664-4.065T5.47 5.436q1.663-1.667 4.064-1.667q2.402 0 4.068 1.664q1.666 1.664 1.666 4.067q0 1.042-.369 2.017q-.37.975-.97 1.668l6.262 6.261l-.707.708ZM9.538 14.23q1.99 0 3.361-1.37q1.37-1.37 1.37-3.361q0-1.99-1.37-3.36q-1.37-1.37-3.36-1.37q-1.99 0-3.361 1.37q-1.37 1.37-1.37 3.36q0 1.99 1.37 3.36q1.37 1.37 3.36 1.37Z" fill="#111115"/>
        </svg>
          <input type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)}/>
        </div>

        {/* Legend */}

        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <div className={styles.legendColor} style={{background: "#FFB800"}}></div>
            <p className={styles.legendText}>Pending</p>
            </div>
          <div className={styles.legendItem}>
            <div className={styles.legendColor} style={{background: "#00FF57"}}></div>
            <p className={styles.legendText}>Present</p>
            </div>
          <div className={styles.legendItem}>
            <div className={styles.legendColor} style={{background: "#DD0000"}}></div>
            <p className={styles.legendText}>Absent</p>
            </div>
        </div>

        

      </div>
      {/* Members */}
      <div className={styles.members}>
          <div className={styles.membersHeader}>
            <p>Code</p>
            <p>User Name</p>
            <p>Gender</p>
            <p>Email Address</p>
            <p>Days Absent</p>
            <p>Days Present</p>
            <p>Status</p>
            <p>Send Login</p>
          </div>

          {
            users.map((elem, index) => {
              return (
                <DashProfile key={index} {...elem} />
              )
            })
          }
        </div>
      </div>
     

    </div>
</React.Fragment>
    
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