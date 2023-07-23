"use client"

import React, { useEffect } from 'react'
import styles from '../../HomePageCSS/topPannel.module.css'
import TableRows from './tableRows'
import { DataBaseFunc } from '@/components/DatabaseSchema'

export default function TableHeader({chunks}) {

  const {MySchema} = DataBaseFunc()

  return (
    <div className={styles.TableHolder}>
 

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
    <td>
     
      </td>
      <td className={styles.subHeadings}>
        <table>
            <thead>
                <tr>
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
                <tr>
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
                <tr>
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
                <tr>
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
                <tr>
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
        MySchema.members.map((item, index) => {
            return(

              <React.Fragment key={item+index}>
                <TableRows memberName={item.last_name + " " + item.initial} data={item.attendance}/>
              </React.Fragment>
            )
          })
      }

  </tbody>
        </table>
    </div>
    
  )
}
