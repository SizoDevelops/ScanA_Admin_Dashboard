import React from 'react'
import styles from '../../HomePageCSS/topPannel.module.css'
export default function TableData({timein, timeout, initialIn, initialOut, absent, reason}) {
  return (
    <td className={styles.subHeadings}>
        <table>
            <thead>
                <tr className={styles.credecials}>
                  {
                    absent === true ? <td style={{width: "400px", wordWrap:"unset", wordBreak: "keep-all", textAlign: "center", textTransform: "capitalize"}}>{reason}</td>
                    :
                    absent === false ? 
                     <>
                        <td>{timein}</td>
                        <td>{initialIn}</td>
                        <td>{timeout}</td>
                        <td>{initialOut}</td> 
                    </>
                    :
                    <td style={{width: "400px", wordWrap:"unset", wordBreak: "keep-all", textAlign: "center"}}>Not Signed</td>
                  }
            
                </tr>
            </thead>
   
        </table>
   
      </td>
  )
}
