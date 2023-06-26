import React from 'react';
import styles from './UpdatesCSS/home.module.css'
import Image from 'next/image';
const Updates = () => {
    return (
        <div className={styles.PostCont}>
            <div className={styles.details}>
                <div className={styles.dates}>
                <div className={styles.sideIcon}>
                    <Image sizes='30' fill src={"/icons/carbon_calendar.png"} alt="Folder Icon"/>
                </div>
                    <p>23 June 2023</p>
                </div>
                <div className={styles.status}>
                    <p>Active</p>
                </div>
            </div>
            <div className={styles.contentDet}>
                <h3>This is the title of the Post</h3>
                <p>This is the content of the post that needs to be done I'm thinking of including a heading or something.</p>
            </div>

            <div className={styles.DueDate} >
            <div className={styles.dates}>
                <div className={styles.sideIcon}>
                    <Image sizes='30' fill src={"/icons/carbon_calendar.png"} alt="Folder Icon"/>
                </div>
                    <p>23 June 2023</p>
                </div>
            </div>
        </div>
    );
}

export default Updates;
