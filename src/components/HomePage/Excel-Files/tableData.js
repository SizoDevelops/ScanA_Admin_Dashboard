import React from 'react'
import styles from '../../HomePageCSS/topPannel.module.css'
export default function TableData({timein, timeout, initialIn, initialOut, absent}) {
  return (
    <td className={styles.subHeadings}>
        <table>
            <thead>
                <tr className={styles.credecials}>
                  {
                    absent === true ? <td>Absent</td>
                    :
                    absent === false ? 
                     <>
                        <td>{timein}</td>
                        <td>{initialIn}</td>
                        <td>{timeout}</td>
                        <td>{initialOut}</td> 
                    </>
                    :
                    <td>Unsigned</td>
                  }
            
                </tr>
            </thead>
   
        </table>
   
      </td>
  )
}
