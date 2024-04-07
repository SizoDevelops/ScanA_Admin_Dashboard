"use client"
import React from 'react';
import styles from "./SettingsCSS/homestyles.module.css"
import SidePanel from '../HomePage/sidePanel';
import Menu from './menu';
import { useSession } from 'next-auth/react';
import Loader from '../shared/Loader';

const Settings = () => {
  const {data: session, status} = useSession();

  if(status === "loading") {
    return <Loader/>
  }
  else return ( 
        <body className={styles.container}>
           <div className={styles.panel}>
         <SidePanel />
      </div>
        <Menu/>

        </body>
    );
}

export default Settings;
