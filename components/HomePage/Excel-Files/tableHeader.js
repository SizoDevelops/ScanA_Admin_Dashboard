import React from 'react'
import styles from '../../HomePageCSS/topPannel.module.css'
import TableRows from './tableRows'

const members = [
  {
    name: "MHLONGO S.M",
    initial: "S.M",
    attendence: {
      timein: "07:00",
      timeout: "15:00",
      absent: false,
    }
  },
  {
    name: "MASEKO T.C",
    initial: "T.C",
    attendence: {
      timein: "07:00",
      timeout: "15:00",
      absent: false,
    }
  },
  {
    name: "NDLELA Z",
    initial: "Z",
    attendence: {
      timein: "07:00",
      timeout: "15:00",
      absent: false,
    }
  },
  {
    name: "MHLONGO S.M",
    initial: "S.M",
    attendence: {
      timein: "07:00",
      timeout: "15:00",
      absent: false,
    }
  },

]
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
    {
      members.map((item, index) => {
        return(
          <>
             <TableRows memberName={item.name} timein={item.attendence.timein} timeout={item.attendence.timeout} initial={item.initial} absent={item.attendence.absent}/>
          </>
        )
      })
    }





  </tbody>
        </table>
    </div>
    
  )
}
