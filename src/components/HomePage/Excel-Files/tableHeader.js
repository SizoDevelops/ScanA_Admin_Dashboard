"use client"

import React, { useEffect } from 'react'
import styles from '../../HomePageCSS/topPannel.module.css'
import TableRows from './tableRows'
import { DataBaseFunc } from '@/components/DatabaseSchema'
import { useSelector } from 'react-redux'
import { useState } from 'react'

export default function TableHeader({chunks, week, position, ref}) {

  const [memberArray, setMembers] = useState([])
  const schema = useSelector(state => state.Database.value.members)
  const members= [...schema]
  



  function compareFn(a, b) {
    if (a.last_name < b.last_name) {
      return -1;
    } else if (a.last_name > b.last_name) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

  const membersCopy = members.sort(compareFn)

  useEffect(() => {
      setMembers(membersCopy)
      if(position !== ""){
       setMembers( membersCopy.filter(items => items.position.toUpperCase() === position.toUpperCase()))
      }
      if(position === "All"){
        setMembers(membersCopy)
      }
  
  }, [position, schema])

  return (
    <div className={styles.TableHolder} ref={ref}>
 
    <h1>Attendance Register</h1>
    <p className={styles.para}>This register is signed electronically. Thus the result are 100% authententic and adhare to the attendance policy of the organisation.</p>
        <table className={styles.headings}>
  <thead>
    <tr className={styles.headingNames}>
      <th>Members</th>
      <th>Monday</th>
      <th>Tuesday</th>
      <th>Wednesday</th>
      <th>Thursday</th>
      <th>Friday</th>
    </tr>
  </thead>
  <tbody>
    <tr className={styles.headingNames}>
    <td className={styles.names} style={{fontSize: "14px", textAlign: "center"}}>
      <p>SURNAME & INITIALS</p>
      </td>
      <td className={styles.subHeadings}>
        <table>
            <thead className={styles.head}>
       
                <tr className={styles.headers}>
                <td>in</td>
                <td>initial</td>
                <td>out</td>
                <td>initial</td> 
                </tr>
            </thead>
   
        </table>
   
      </td>
      <td className={styles.subHeadings}>
        <table>
            <thead>
            <tr className={styles.headers}>
                <td>in</td>
                <td>initial</td>
                <td>out</td>
                <td>initial</td> 
                </tr>
            </thead>
   
        </table>
   
      </td>
      <td className={styles.subHeadings}>
        <table>
            <thead>
            <tr className={styles.headers}>
                <td>in</td>
                <td>initial</td>
                <td>out</td>
                <td>initial</td> 
                </tr>
            </thead>
   
        </table>
   
      </td>
      <td className={styles.subHeadings}>
        <table>
            <thead>
            <tr className={styles.headers}>
                <td>in</td>
                <td>initial</td>
                <td>out</td>
                <td>initial</td> 
                </tr>
            </thead>
   
        </table>
   
      </td>
      <td className={styles.subHeadings}>
        <table>
            <thead>
            <tr className={styles.headers}>
                <td>in</td>
                <td>initial</td>
                <td>out</td>
                <td>initial</td> 
                </tr>
            </thead>
   
        </table>
   
      </td>
     
    </tr>
      {
        memberArray.map((item, index) => {
            return(

              <React.Fragment key={item+index}>
                <TableRows memberName={item.last_name + " " + item.initial} data={item.attendance} currentWeek={week}/>
              </React.Fragment>
            )
          })
      }

  </tbody>
        </table>
    </div>
    
  )
}
