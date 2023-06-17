import React from 'react'
import styles from '../../HomePageCSS/topPannel.module.css'
import TableData from './tableData'

export default function TableRows() {
  return (
    <tr className={styles.data}>
    <td>
       MHLONGO S.M 
      </td>
        <TableData />
        <TableData />
        <TableData />
        <TableData />
        <TableData />
    </tr>
  )
}
