"use client"

import React, { useEffect} from 'react';
import styles from "@/components/Settings/SettingsCSS/attendance.module.css"
import { useQRCode } from 'next-qrcode';
import { usePDF } from 'react-to-pdf';
import { useDatabase } from '../features/dbContext';
import { useSelector } from 'react-redux';
import Loader from '../shared/Loader';


const Attendance = () => {
    const {setAttendance, loading} = useDatabase()
    const { Canvas } = useQRCode();
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
        
      },[schema])

    if(loading){
        return <Loader/>
    }
    else return (
        <div className={styles.container}>
         <div className={styles.formHolder} ref={targetRef}>
            <h2 className={styles.heading}>{getCurrentMonthAndYear()}</h2>
            <p className={styles.details}>Scan the code for the day. If scanning does not work try entering the code.</p>
             <div className={styles.Grid}>
                <div className={styles.QRCont} style={schema?.monday ? {display: "flex"} : {display: "none"}}>
                    <h2 className={styles.day}>MONDAY</h2>
                    <div className={styles.QRCode}>
                        <h2>SCAN QR</h2>
                   {schema?.monday ?  <Canvas
                         text={schema?.monday}
                                options={{
                                    errorCorrectionLevel: 'M',
                                    margin: 3,
                                    scale: 4,
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
                    {schema?.tuesday ?  <Canvas
                         text={schema?.tuesday}
                                options={{
                                    errorCorrectionLevel: 'M',
                                    margin: 3,
                                    scale: 4,
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
                    {schema?.wednesday ? <Canvas
                         text={schema?.wednesday}
                                options={{
                                    errorCorrectionLevel: 'M',
                                    margin: 3,
                                    scale: 4,
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
                   {schema?.thursday ? <Canvas
                         text={schema?.thursday}
                                options={{
                                    errorCorrectionLevel: 'M',
                                    margin: 3,
                                    scale: 4,
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
                   {schema?.friday ? <Canvas
                         text={schema?.friday}
                                options={{
                                    errorCorrectionLevel: 'M',
                                    margin: 3,
                                    scale: 4,
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

            <div className={styles.submit} onClick={() => toPDF()}>Save</div>
        </div>
    );
}

export default Attendance;
