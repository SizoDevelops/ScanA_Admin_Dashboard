import React from 'react';
import styles from '../Settings/SettingsCSS/add-member.module.css'
const MemberInfo = ({title, position, code, initial, last_name, dlt,key}) => {
    return (
        <div className={styles.Links}>
        <div className={styles.containerProfile} >
          <div className={styles.profileDetails}>
            <p className={styles.delete} onClick={() => dlt(code)}>Delete</p>
            <h4>{title} {initial} {last_name}</h4>
            <p>{position}</p>
            <p>{code}</p>
          </div>
        </div>
      </div>
    );
}

export default MemberInfo;
