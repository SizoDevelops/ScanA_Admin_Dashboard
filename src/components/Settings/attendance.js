"use client"

import React, { useEffect} from 'react';
import styles from "@/components/Settings/SettingsCSS/attendance.module.css"
import { useQRCode } from 'next-qrcode';
import { usePDF } from 'react-to-pdf';
import { useDatabase } from '../features/dbContext';
import { useSelector } from 'react-redux';
import Loader from '../shared/Loader';
import { Fab } from '@mui/material';


const Attendance = () => {
    const {setAttendance, loading, getCurrentWeek} = useDatabase()
    const { SVG } = useQRCode();
    const { toPDF, targetRef } = usePDF({filename: `Week-QRCODES.pdf`});
    const schema = useSelector(state => state.Database.value.attendance)
    

    
    function getCurrentMonthAndYear() {
        const months = [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ];
      
        const now = new Date();
        const month = months[now.getMonth()];
        const year = now.getFullYear();
      
        return `${month} ${year}`;
      }

      useEffect(() => {
        setAttendance()
        
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[schema])

    if(loading || !schema.currentWeek){
        return <Loader/>
    }
    else return (
        <body className={styles.container}>
         <div className={styles.formHolder} ref={targetRef}>
            <h2 className={styles.heading}>{getCurrentMonthAndYear()}</h2>
            <h4 className={styles.heading}>{"WEEK " + getCurrentWeek()}</h4>
            <Fab onClick={setAttendance} title="Refresh" color='info'> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
</svg></Fab>
            <p className={styles.details}>Scan the code for the day. If scanning does not work try entering the code.</p>
             <div className={styles.Grid}>
                <div className={styles.QRCont} style={schema?.monday ? {display: "flex"} : {display: "none"}}>
                    <h2 className={styles.day}>MONDAY</h2>
                    <div className={styles.QRCode}>
                        <h2>SCAN QR</h2>
                   {schema?.monday ?  <SVG
                         text={schema?.monday}
                                options={{
                                    errorCorrectionLevel: 'H',
                                    margin: 2,
                                    scale: 1,
                                    width: 200,
                                    color: {
                                    dark: '#111115',
                                    light: '#FFFFFF',
                                    },
                                    
                                }}
                         />: <></>}
                    <div>
                        <h2>OR ENTER CODE</h2>
                        <p className={styles.para}>{schema?.monday}</p>
                    </div>
                    </div>
                   

                </div>
                <div className={styles.QRCont} style={schema?.tuesday ? {display: "flex"} : {display: "none"}}>
                    <h2 className={styles.day}>TUESDAY</h2>
                    <div className={styles.QRCode}>
                        <h2>SCAN QR</h2>
                    {schema?.tuesday ?  <SVG
                         text={schema?.tuesday}
                                options={{
                                    errorCorrectionLevel: 'H',
                                    margin: 2,
                                    scale: 1,
                                    width: 200,
                                    color: {
                                    dark: '#111115',
                                    light: '#FFFFFF',
                                    },
                                    
                                }}
                         />: <></>}
                    <div>
                        <h2>OR ENTER CODE</h2>
                        <p className={styles.para}>{schema?.tuesday}</p>
                    </div>
                    </div>
                   

                </div>
                <div className={styles.QRCont} style={schema?.wednesday ? {display: "flex"} : {display: "none"}}>
                    <h2 className={styles.day}>WEDNESDAY</h2>
                    <div className={styles.QRCode}>
                        <h2>SCAN QR</h2>
                    {schema?.wednesday ? <SVG
                         text={schema?.wednesday}
                                options={{
                                    errorCorrectionLevel: 'H',
                                    margin: 2,
                                    scale: 1,
                                    width: 200,
                                    color: {
                                    dark: '#111115',
                                    light: '#FFFFFF',
                                    },
                                    
                                }}
                         /> : <></>}
                    <div>
                        <h2>OR ENTER CODE</h2>
                        <p className={styles.para}>{schema?.wednesday}</p>
                    </div>
                    </div>
                   

                </div>
                <div className={styles.QRCont} style={schema?.thursday ? {display: "flex"} : {display: "none"}}>
                    <h2 className={styles.day}>THURSDAY</h2>
                    <div className={styles.QRCode}>
                        <h2>SCAN QR</h2>
                   {schema?.thursday ? <SVG
                         text={schema?.thursday}
                                options={{
                                    errorCorrectionLevel: 'H',
                                    margin: 2,
                                    scale: 1,
                                    width: 200,
                                    color: {
                                    dark: '#111115',
                                    light: '#FFFFFF',
                                    },
                                    
                                }}
                         /> : <></>}
                    <div>
                        <h2>OR ENTER CODE</h2>
                        <p className={styles.para}>{schema?.thursday}</p>
                    </div>
                    </div>
                   

                </div>
                <div className={styles.QRCont} style={schema?.friday ? {display: "flex"} : {display: "none"}}>
                    <h2 className={styles.day}>FRIDAY</h2>
                    <div className={styles.QRCode}>
                        <h2>SCAN QR</h2>
                   {schema?.friday ? <SVG
                         text={schema?.friday}
                                options={{
                                    errorCorrectionLevel: 'H',
                                    margin: 2,
                                    scale: 1,
                                    width: 200,
                                    color: {
                                    dark: '#111115',
                                    light: '#FFFFFF',
                                    },
                                    
                                }}
                         /> : <></>}
                    <div>
                        <h2>OR ENTER CODE</h2>
                        <p className={styles.para}>{schema?.friday}</p>
                    </div>
                    </div>
                   

                </div>
  




             </div> 
             <p className={styles.details}>These QR Codes and Codes are for this week only make sure you do not forget to scan and sign the register.</p>  
               
            </div>

            <div className={styles.submit} onClick={() => toPDF()}>Download PDF</div>
        </body>
    );
}

export default Attendance;
