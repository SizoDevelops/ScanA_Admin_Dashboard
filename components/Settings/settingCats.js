import React from 'react';
import styles from './SettingsCSS/settingsCat.module.css'
import Image from 'next/image';
const SettingCats = () => {
    return (
        <div className={styles.Cat}>
            <h4><span></span>App Settings</h4>
            <div className={styles.Cont}>
                    <div className={styles.Container}>
                <div className={styles.Icon}>
                    <Image sizes='40' fill src={"/icons/carbon_calendar.png"} alt="Folder Icon"/>
                </div>
                <p>School Logo</p>
            </div>


            
             
                    <div className={styles.Container}>
                <div className={styles.Icon}>
                    <Image sizes='40' fill src={"/icons/carbon_calendar.png"} alt="Folder Icon"/>
                </div>
                <p>School Logo</p>
            </div>



                    <div className={styles.Container}>
                <div className={styles.Icon}>
                    <Image sizes='40' fill src={"/icons/carbon_calendar.png"} alt="Folder Icon"/>
                </div>
                <p>School Logo</p>
            </div>



                    <div className={styles.Container}>
                <div className={styles.Icon}>
                    <Image sizes='40' fill src={"/icons/carbon_calendar.png"} alt="Folder Icon"/>
                </div>
                <p>School Logo</p>
            </div>




            </div>
       

            
        </div>
    );
}

export default SettingCats;