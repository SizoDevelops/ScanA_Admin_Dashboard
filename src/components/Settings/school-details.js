import React from 'react';
import styles from '../Settings/SettingsCSS/school-details.module.css'
import Image from 'next/image';
let image = "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/school-logo-design-template-b3bfdceb55d1cbc48f1ce50fd4e1ef24_screen.jpg?ts=1629941736"
const SchoolDetails = () => {
 
    return (
        <div className={styles.Container}>
            <div className={styles.Profile}>
            <div className={styles.profileImage} style={image ? {backgroundImage: `url(${image})`} : {backgroundImage: ""}}>

{
  !image ? <p style={{position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: "100%", fontSize: "15px", textAlign: 'center', height: "50%", background: "#111115"}}>No Image Found</p> 
  :
   <></>
}

</div>
                <div className={styles.details}>
                    <div className={styles.Data}>
                        <div className={styles.Icon}>
                            <Image sizes='30' fill src={"/icons/excel.png"} alt="Folder Icon"/>
                        </div>
                       <input type='text' placeholder='Name Phase School'/> 
                    </div>
                    <div className={styles.Data}>
                        <div className={styles.Icon}>
                            <Image sizes='30' fill src={"/icons/excel.png"} alt="Folder Icon"/>
                        </div>
                       <input type='text' placeholder='schoolemail@domain.co.za'/> 
                    </div>
                    <div className={styles.Data}>
                        <div className={styles.Icon}>
                            <Image sizes='30' fill src={"/icons/excel.png"} alt="Folder Icon"/>
                        </div>
                       <input type='text' placeholder='+27 71 158 3243'/> 
                    </div>
                    
                </div>

            
            </div>
            <ul className={styles.listIns}>
                        <li>Click on each element to edit the content.</li>
                    </ul>


            <div className={styles.formHolder}>
                <div className={styles.coordinates}>
                    <p>School Slogan</p>
                    <input type="text" placeholder='"This is the school`s slogan"'/>
                    <ul className={styles.listIns}>
                        <li>Enter the school slogan that represents your school.</li>
                    </ul>
                </div>
                <div className={styles.coordinates}>
                    <p>School`s physical address</p>
                    <input type="text" placeholder='Address Line 1'/>
                    <input type="text" placeholder='Address Line 2 (Optional)'/>
                    <input type="text" placeholder='Province'/>
                    <input type="text" placeholder='Town / City'/>
                    <input type="text" placeholder='Postal Code'/>

                </div>

                <div className={styles.submit}>Save</div>
            </div>
        </div>
    );
}

export default SchoolDetails;
