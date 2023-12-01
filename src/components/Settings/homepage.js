import React from 'react';
import styles from "./SettingsCSS/homestyles.module.css"
import SidePanel from '../HomePage/sidePanel';
import Menu from './menu';

const Settings = () => {
    return (
        <body className={styles.container}>
           <div className={styles.panel}>
         <SidePanel />
      </div>
        <Menu/>

        </body>
    );
}

export default Settings;
