import React from 'react'
import styles from '../../HomePageCSS/topPannel.module.css'
export default function TableData({timein, timeout, initial, absent}) {
  return (
    <td className={styles.subHeadings}>
        <table>
            <thead>
                <tr className={styles.credecials}>
                  {
                    absent ? <td>Absent</td>
                    :
                    <>
                        <td>{timein}</td>
                        <td>{initial}</td>
                        <td>{timeout}</td>
                        <td>{initial}</td> 
                    </>
                  }
            
                </tr>
            </thead>
   
        </table>
   
      </td>
  )
}
