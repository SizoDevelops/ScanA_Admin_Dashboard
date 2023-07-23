import React from 'react';
import styles from "../Settings/SettingsCSS/add-member.module.css"
import MemberInfo from './member-info';
import Image from 'next/image';
const AddMember = () => {
    return (
        <div className={styles.container}>
            <div className={styles.addNew}>
                <div className={styles.buttons}>
                <div className={styles.Icon}>
                            <Image sizes='30' fill src={"/icons/add.png"} alt="Folder Icon"/>
                        </div>
                </div>
            </div>
        
    
                <div className={styles.memberInfo}>
            <div className={styles.coordinates}>
                    <p>Title*</p>
                    <input type="text" placeholder='MR.'/>
                    <ul className={styles.listIns}>
                        <li>Enter the title of the member. (e.g. MR.)</li>
                    </ul>
            </div> 
            <div className={styles.coordinates}>
                    <p>Initials*</p>
                    <input type="text" placeholder='S.M.'/>
                    <ul className={styles.listIns}>
                        <li>Use proper initial conventions. (e.g. S.W.)</li>
                    </ul>
            </div> 
        
            <div className={styles.coordinates}>
                    <p>Full Name(s)*</p>
                    <input type="text" placeholder='First Name(s)'/>
                    <ul className={styles.listIns}>
                        <li>Names should be seperated by space. (e.g. Sam Walter) </li>
                        <li>The number of names should be equal the number of initials.</li>
                    </ul>
            </div> 

            <div className={styles.coordinates}>
                    <p>Last Name*</p>
                    <input type="text" placeholder='Last Name'/>
            </div> 
            <div className={styles.coordinates}>
                    <p>Position*</p>
                    <input type="text" placeholder='Developer'/>
                    <ul className={styles.listIns}>
                        <li>Position of the member</li>
                       
                    </ul>
            </div> 
        </div>


       
<div className={styles.Profiles}>

            <MemberInfo/>
            <MemberInfo/>
            <MemberInfo/>
            <MemberInfo/>

</div>
            <div className={styles.addNew}>
                <div className={styles.btn}>
                    <p>Confirm</p>
                </div>
            </div>
        </div>
    );
}

export default AddMember;
