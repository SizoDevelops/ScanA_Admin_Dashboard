"use client"
import React from 'react';
import styles from "./SettingsCSS/homestyles.module.css"
import SidePanel from '../HomePage/sidePanel';
import Menu from './menu';
import { signOut, useSession } from 'next-auth/react';
import Loader from '../shared/Loader';
import Logo from '../shared/Logo';

const Settings = () => {
  const {data: session, status} = useSession();

  if(status === "loading") {
    return <Loader/>
  }
  else return ( 
    <React.Fragment>
    
   <div className={styles.container}>
    
     <SidePanel/>
     <div className={styles.content}>
        <div className={styles.menu}>
       <div className={styles.intro}>
         <Logo bgColor={"#0099F1"} widthV={400} heightV={120} width={100} height={30}/>
         <div className={styles.logout}>
           <button onClick={() => signOut()}>Logout</button>
         </div>
       </div>
     </div>

     

     
     {/* Members */}
      <div className={styles.membersPeople}>
        <Menu/> 
      </div>
      
     </div>
    
      
   </div>
</React.Fragment>
    );
}

export default Settings;
