import React from 'react'
import styles from '../../HomePageCSS/topPannel.module.css'
import TableRows from './tableRows'
export default function TableHeader() {
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
    <TableRows/>




  </tbody>
        </table>
    </div>
    
  )
}
