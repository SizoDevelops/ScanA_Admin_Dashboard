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
