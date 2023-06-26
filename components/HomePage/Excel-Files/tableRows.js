import React from 'react'
import styles from '../../HomePageCSS/topPannel.module.css'
import TableData from './tableData'

export default function TableRows({memberName, timein, timeout, initial, absent}) {
  return (
    <tr className={styles.data}>
    <td>
       {memberName}
      </td>
        <TableData  absent={absent} timein={timein} timeout={timeout} initial={initial}/>
        <TableData timein={timein} timeout={timeout} initial={initial} absent={absent}/>
        <TableData timein={timein} timeout={timeout} initial={initial} absent={absent}/>
        <TableData timein={timein} timeout={timeout} initial={initial} absent={absent}/>
        <TableData timein={timein} timeout={timeout} initial={initial} absent={absent}/>
    </tr>
  )
}
