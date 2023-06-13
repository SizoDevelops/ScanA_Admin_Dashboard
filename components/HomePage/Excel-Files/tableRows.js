import React from 'react'
import styles from '../../HomePageCSS/topPannel.module.css'

export default function TableRows() {
  return (
    <tr className={styles.data}>
    <td>
       MHLONGO S.M 
      </td>
      <td className={styles.subHeadings}>
        <table>
            <thead>
                <tr className={styles.credecials}>
                <td>7:00</td>
                <td>S.M</td>
                <td>15:00</td>
                <td>S.M</td> 
                </tr>
            </thead>
   
        </table>
   
      </td>
    </tr>
  )
}
