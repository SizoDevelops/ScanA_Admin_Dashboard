/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import React, { useEffect, useRef } from 'react'
import styles from '../../HomePageCSS/table.module.css'
import { useSelector } from 'react-redux'
import { useState } from 'react'


export default function TableHeader({week, position, year}) {

  const [memberArray, setMembers] = useState([])
  const schema = useSelector(state => state.Database.value.members)
  const members= [...schema]

  function compareFn(a, b) {
    if (a.last_name < b.last_name) {
      return -1;
    } else if (a.last_name > b.last_name) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

  const membersCopy = members.sort(compareFn)

  useEffect(() => {
      setMembers(membersCopy)
      if(position !== ""){
       setMembers( membersCopy.filter(items => {
       return items.position.some(elem => elem.toUpperCase() === position.toUpperCase())
       }))
      }
      if(position === "All"){
        setMembers(membersCopy)
      }
  
  }, [position, schema])



 

  return (
    <div className={styles.TableHolder} >
  
   


<UserAttendanceTable userData={memberArray} week={week} year={year}/>
    </div>
    
  )
}


const UserAttendanceTable = ({ userData, week, year }) => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const generateTableRows = () => {
      const rows = userData.map((user, index) => (
        <tr className={styles.subHeadings}  key={user.id}>
          <td className={styles.userName}>{(index + 1) +". "}{user.last_name} {user.initial}</td>
          <td>{getAttendanceDetails(user, 'monday')}</td>
          <td>{getAttendanceDetails(user, 'tuesday')}</td>
          <td>{getAttendanceDetails(user, 'wednesday')}</td>
          <td>{getAttendanceDetails(user, 'thursday')}</td>
          <td>{getAttendanceDetails(user, 'friday')}</td>
        </tr>
      ));
      setTableData(rows);
    };

    const getAttendanceDetails = (user, day) => {
      const regex = new RegExp(year);
      const dayData = user.attendance[day];
      if (dayData) {
        const attendanceDetails = dayData.filter(entry =>  regex.test(entry.date) && entry.week === week)
        if(attendanceDetails.length > 0){
        return  attendanceDetails.map(entry => (
       
            <div key={entry.date} className={styles.headers}>
              {
                      entry.absent === true ? <span style={{width: "350px", wordWrap:"unset", wordBreak: "keep-all", textAlign: "center", textTransform: "capitalize", color: "red"}}>{entry.reason}</span>
                      :
                   
                       <div>
                          <span style={{color:"#00850b"}}>{entry.timein}</span>
                          <span style={{display: "none"}}>{"-"}</span>
                          <span style={{color:"#00850b"}}>{entry.initial}</span>
                           <span style={{display: "none"}}> {"-"}  </span>
                          <span style={{color:"#00850b"}}>{entry.timeout}</span>
                           <span style={{display: "none"}}>  {"-"} </span>
                          <span style={{color:"#00850b"}}>{entry.initial}</span> 
                      </div>
                  
                    }
            </div>
    

          )); 
        }
        else return '';
       
      }
      return '';
    };

    generateTableRows();
  }, [userData, week,year]);

  return (
    <table className={styles.table}>
    
      <thead className={styles.head}>

   

        <tr className={styles.headingNames}>
          <th>Member Name</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
        </tr>
        <tr className={styles.header}>
          <th></th>
          <th>
            <td>In</td>
            <span style={{display: "none"}}> {"-"}  </span>
            <td>Initial</td>
            <span style={{display: "none"}}> {"-"}  </span>
            <td>Out</td>
            <span style={{display: "none"}}> {"-"}  </span>
            <td>Initial</td>

          </th>
          <th>
            <td>In</td>
            <span style={{display: "none"}}> {"-"}  </span>
            <td>Initial</td>
            <span style={{display: "none"}}> {"-"}  </span>
            <td>Out</td>
            <span style={{display: "none"}}> {"-"}  </span>
            <td>Initial</td>

          </th>
          <th>
            <td>In</td>
            <span style={{display: "none"}}> {"-"}  </span>
            <td>Initial</td>
            <span style={{display: "none"}}> {"-"}  </span>
            <td>Out</td>
            <span style={{display: "none"}}> {"-"}  </span>
            <td>Initial</td>

          </th>
          <th>
            <td>In</td>
            <span style={{display: "none"}}> {"-"}  </span>
            <td>Initial</td>
            <span style={{display: "none"}}> {"-"}  </span>
            <td>Out</td>
            <span style={{display: "none"}}> {"-"}  </span>
            <td>Initial</td>

          </th>
          <th>
            <td>In</td>
            <span style={{display: "none"}}> {"-"}  </span>
            <td>Initial</td>
            <span style={{display: "none"}}> {"-"}  </span>
            <td>Out</td>
            <span style={{display: "none"}}> {"-"}  </span>
            <td>Initial</td>

          </th>
        </tr>
      </thead>
      <tbody>{tableData}</tbody>
    </table>
  );
};



