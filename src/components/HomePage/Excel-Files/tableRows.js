import React from 'react'
import styles from '../../HomePageCSS/topPannel.module.css'
import TableData from './tableData'
import { DataBaseFunc } from '@/components/DatabaseSchema'

export default function TableRows({memberName, timein, timeout, initialIn, initialOut, absent,data}) {

  return (
    <tr className={styles.data}>

    <td colSpan={1} style={{whiteSpace: "nowrap"}}>
       {memberName}
      </td>
        <React.Fragment>

        <TableData  absent={data.monday[0].absent} timein={data.monday[0].timein} timeout={data.monday[0].timeout} initialIn={data.monday[0].initial} initialOut={data.monday[0].initial}/>

        <TableData  absent={data.tuesday[0].absent} timein={data.tuesday[0].timein} timeout={data.tuesday[0].timeout} initialIn={data.tuesday[0].initial} initialOut={data.tuesday[0].initial}/>

        <TableData  absent={data.wednesday[0].absent} timein={data.wednesday[0].timein} timeout={data.wednesday[0].timeout} initialIn={data.wednesday[0].initial} initialOut={data.wednesday[0].initial}/>

        <TableData  absent={data.thursday[0].absent} timein={data.thursday[0].timein} timeout={data.thursday[0].timeout} initialIn={data.thursday[0].initial} initialOut={data.thursday[0].initial}/>
        
        <TableData  absent={data.friday[0].absent} timein={data.friday[0].timein} timeout={data.friday[0].timeout} initialIn={data.friday[0].initial} initialOut={data.friday[0].initial}/>
  
        </React.Fragment>

  

        
    </tr>
  )
}
