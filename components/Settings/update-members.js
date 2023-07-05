import React from 'react';
import MemberProfile from './members';
import styles from '../Settings/SettingsCSS/update-members.module.css'

const UpdateMembers = () => {
    return (
        <div className={styles.Cont}>

        <div className={styles.container}>
            <div className={styles.categories}>
        <div className={styles.cat}>
          <p>All</p>
        </div>
        <div className={styles.cat}>
          <p>Admin</p>
        </div>
        <div className={styles.cat}>
          <p>Teaching</p>
        </div>
        <div className={styles.cat}>
          <p>Non-Teaching</p>
        </div>
      </div> 
        </div>
       <div className={styles.profiles}>
        <MemberProfile/>
        <MemberProfile/>
        <MemberProfile/>
        <MemberProfile/>

       </div>
       <ul className={styles.listIns}>
                        <li>Hover over a profile to see the options.</li>
                        <li>Some actions here are irreversable so be careful.</li>
                    </ul>
            
        </div>
    );
}

export default UpdateMembers;
