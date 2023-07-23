import React from 'react';
import styles from '../Settings/SettingsCSS/add-member.module.css'
const MemberInfo = ({image}) => {
    return (
        <div className={styles.Links}>
        <div className={styles.containerProfile} >
          <div className={styles.profileDetails}>
            <h4>MR S.M MHLONGO</h4>
            <p>Teacher</p>
            <p>KJFF232-FEF324</p>
          </div>
        </div>
      </div>
    );
}

export default MemberInfo;
