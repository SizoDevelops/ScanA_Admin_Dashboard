import React from 'react';
import styles from "./SettingsCSS/homestyles.module.css"
import SidePanel from '../HomePage/sidePanel';
import Menu from './menu';

const Settings = () => {
    return (
        <div className={styles.container}>
        <SidePanel/>
        <Menu/>

        </div>
    );
}

export default Settings;
