import React from 'react'
import styles from '../../HomePageCSS/topPannel.module.css'
import TableData from './tableData'


export default function TableRows({memberName, data, currentWeek}) {

  return (
    <tr className={styles.data}>

    <td colSpan={1} style={{whiteSpace: "nowrap", textTransform: "uppercase", textAlign: "left"}} className={styles.names}>
       {memberName}
      </td>
        <React.Fragment>

        <TableData reason={data.monday  ? data.monday.find(item => item.week === currentWeek)?.reason : "No Reason"} absent={data.monday  ? data.monday.find(item => item.week === currentWeek)?.absent : "-"} timein={data.monday ? data.monday.find(item => item.week === currentWeek)?.timein : "-"} timeout={ data.monday ? data.monday.find(item => item.week === currentWeek)?.timeout : "-"} initialIn={data.monday ? data.monday.find(item => item.week === currentWeek)?.initial : "-"} initialOut={data.monday ? data.monday.find(item => item.week === currentWeek)?.initial : "-"}/>

        <TableData reason={data.tuesday  ? data.tuesday.find(item => item.week === currentWeek)?.reason : "No Reason"}  absent={data.tuesday ? data.tuesday.find(item => item.week === currentWeek)?.absent : "-"} timein={data.tuesday ? data.tuesday.find(item => item.week === currentWeek)?.timein : "-"} timeout={data.tuesday ? data.tuesday.find(item => item.week === currentWeek)?.timeout : "-"} initialIn={data.tuesday ? data.tuesday.find(item => item.week === currentWeek)?.initial : "-"} initialOut={data.tuesday ? data.tuesday.find(item => item.week === currentWeek)?.initial : "-"}/>

        <TableData reason={data.wednesday  ? data.wednesday.find(item => item.week === currentWeek)?.reason : "No Reason"}  absent={data.wednesday ? data.wednesday.find(item => item.week === currentWeek)?.absent : "-"} timein={ data.wednesday ? data.wednesday.find(item => item.week === currentWeek)?.timein : "-"} timeout={data.wednesday ? data.wednesday.find(item => item.week === currentWeek)?.timeout : "-"} initialIn={data.wednesday ? data.wednesday.find(item => item.week === currentWeek)?.initial : "-"} initialOut={data.wednesday ? data.wednesday.find(item => item.week === currentWeek)?.initial : "-"}/>

        <TableData reason={data.thursday  ? data.thursday.find(item => item.week === currentWeek)?.reason : "No Reason"}  absent={data.thursday? data.thursday.find(item => item.week === currentWeek)?.absent : "-" } timein={data.thursday ? data.thursday.find(item => item.week === currentWeek)?.timein : "-"} timeout={data.thursday ? data.thursday.find(item => item.week === currentWeek)?.timeout : "-"} initialIn={data.thursday ? data.thursday.find(item => item.week === currentWeek)?.initial : "-"} initialOut={data.thursday ? data.thursday.find(item => item.week === currentWeek)?.initial : "-"}/>
        
        <TableData  reason={data.friday  ? data.friday.find(item => item.week === currentWeek)?.reason : "No Reason"} absent={data.friday ? data.friday.find(item => item.week === currentWeek)?.absent: "-"} timein={data.friday  ? data.friday.find(item => item.week === currentWeek)?.timein : "-"} timeout={data.friday ? data.friday.find(item => item.week === currentWeek)?.timeout : "-"} initialIn={data.friday ? data.friday.find(item => item.week === currentWeek)?.initial : "-"} initialOut={data.friday ? data.friday.find(item => item.week === currentWeek)?.initial : "-"}/>
  
        </React.Fragment>

  

        
    </tr>
  )
}
