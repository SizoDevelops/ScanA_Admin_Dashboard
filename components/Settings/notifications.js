import React from 'react';
import styles from "@/components/Settings/SettingsCSS/notifications.module.css"
import Selector from '@/components/Absence/Select';


const Notifications = () => {
    return (
        <div className={styles.container}>
         <div className={styles.formHolder}>
                <div className={styles.coordinates}>
                    <p>Notification Name</p>
                    <input type="text" placeholder='Attendence Not Marked'/>
                    <ul className={styles.listIns}>
                        <li>Enter the notification name / subject.</li>
                    </ul>
                </div>
                <div className={styles.coordinates}>
                    <p>Notification Schedule</p>
                    <input type="text" placeholder='Once, 60, 120, 180, 240'/>
                    <ul className={styles.listIns}>
                        <li>Once - Send the notification only once.</li>
                        <li>60 - Send the notification every hour.</li>
                        <li>120 - Send the notification every two hours.</li>
                    </ul>
                </div>
                <div className={styles.coordinates}>
                    <p>Notification Targets</p>
                    <Selector width={"100%"} multi={true}/>
                    <ul className={styles.listIns}>
                        <li>Leave this blank to send notifications to everyone</li>
                    </ul>
                </div>

                <div className={styles.submit}>Save</div>
            </div>
        </div>
    );
}

export default Notifications;
