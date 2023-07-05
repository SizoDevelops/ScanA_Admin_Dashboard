import React from 'react';
import Selector from '../Absence/Select';
import styles from '../Settings/SettingsCSS/permissions.module.css'
const Permissions = () => {
    return (
        <div className={styles.container}>
         <div className={styles.formHolder}>
                <div className={styles.coordinates}>
                    <p>Full Administrative Duties</p>
                    <Selector width={"100%"} multi={true}/>
                    <ul className={styles.listIns}>
                        <li>These people have admin permissions.</li>
                        <li>They can log in to this portal and change any setting or every setting.</li>
                        <li>Make sure it&apos;s a person you trust, and who is responsible.</li>
                        <li>There can only be 3 admin members.</li>
                    </ul>
                </div>
                <div className={styles.coordinates}>
                    <p>Semi Admin Permissions</p>
                    <Selector width={"100%"} multi={true}/>
                    <ul className={styles.listIns}>
                        <li>These people cannot update any settings.</li>
                        <li>Only allows to generate codes.</li>
                        <li>Can manage absent members, by specifying reasons.</li>
                    </ul>
                </div>
                <div className={styles.coordinates}>
                    <p>Important Notes</p>
                    <ul className={styles.listIns}>
                        <li>Only you have the permission to access this page.</li>
                        <li>Do not share this permission to do so please contact support.</li>
                        <li>You will need to verify your details if you ever forget your credentials.</li>
                    </ul>
                </div>

                <div className={styles.submit}>Accept</div>
            </div>
        </div>
    );
}

export default Permissions;
