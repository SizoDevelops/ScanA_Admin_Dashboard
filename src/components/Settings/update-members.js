"use client"

import React, { useEffect, useState } from 'react';
import MemberProfile from './members';
import styles from '../Settings/SettingsCSS/update-members.module.css'
import { useSession } from 'next-auth/react';
import { useSelector } from 'react-redux';
import { useDatabase } from '../features/dbContext';

const UpdateMembers = () => {
  const {data: session} = useSession()
  const schema = useSelector(state => state.Database.value.members)
  const members= [...schema]

  function compareFn(a, b) {
    if (a.last_name < b.last_name) {
      return -1;
    } else if (a.last_name > b.last_name) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

  const membersCopy = members.sort(compareFn)

  
return (
       <body className={styles.container}>
         <div className={styles.Cont}>

      
<div className={styles.categories}>
<div className={styles.searchBar}>
    <div >
      {/* <Image alt="Search Icon" src="/icons/iconamoon_search.png" sizes='20' fill/> */}
      {/* <IconContext.Provider value={{color: "#03a4ff", style: { verticalAlign: 'middle' }}}>
    <FiSearch />
    </IconContext.Provider> */}
    <svg className={styles.searchIcon} fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
</svg>
    </div>
    <input type='text' placeholder='Search' onChange={(e) => setSearch(e.target.value)}/>
  </div>
</div> 
<div className={styles.profiles}>
{
membersCopy.map((member, index) => {
    return (
        <div key={member.last_name+index}>
            <MemberProfile keyID={session?.user.key} id={member.id} title={member.title} last_name={member.last_name} position={member.position} initial={member.initial} data={member}
              paused={member.pause_register} blocked={member.block_user}
            />
        </div>
        
    )
})
}

</div>
<ul className={styles.listIns}>
            <li>Hover over a profile to see the options.</li>
            <li>Some actions here are irreversable so be careful.</li>
        </ul>

</div>
       </body>
    );
}

export default UpdateMembers;
