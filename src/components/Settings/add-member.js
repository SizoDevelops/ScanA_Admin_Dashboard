"use client"
import React, { useEffect, useReducer, useState } from 'react';
import styles from "../Settings/SettingsCSS/add-member.module.css"
import MemberInfo from './member-info';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

const voucher_codes = require('voucher-code-generator')

const initialState = {
    id: '',
    title: '',
    first_name: '',
    last_name: '',
    initial: '',
    position: '',
    email: '',
    code: '',
    password: '',
    phone_number: '',
    block_user: false,
    pause_register: false,
    attendance: {
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: []
    }
}
const formReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_FIELD':
        return {
          ...state,
          [action.field]: action.value,
        };
      case 'RESET_FORM':
        return initialState;
      default:
        return state;
    }
  };
  
const AddMember = () => {
    const [state, dispatch] = useReducer(formReducer,initialState)
    const {data: session} = useSession()
    const [userId, setUserId] = useState("")
    const [userCode, setUserCode] = useState("")
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const code = voucher_codes.generate({
            count: 1,
            length: 6,
            prefix: session?.user.school_code + "-",
            charset:"alphanumeric"
        })[0].toUpperCase()


        const id = voucher_codes.generate({
            count: 1,
            length: 10,
            prefix: "scana-user-",
            
        })[0].toUpperCase()

        dispatch({ type: 'UPDATE_FIELD', field: "id", value: id });
        dispatch({ type: 'UPDATE_FIELD', field: "code", value: code });


    } , [session, users])

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        dispatch({ type: 'UPDATE_FIELD', field: name, value: value.toUpperCase() });
      };
    
      const handleSubmit = (event) => {

        // Add your form submission logic here
        if(users.length < 11){
            setUsers(prep => [...prep, state])
            handleReset(); 
        }

      };
    
      const handleReset = () => {
        
        dispatch({ type: 'RESET_FORM' });


      };
      const removeUser = (id) => {
        setUsers(users.filter(item => item.code !== id))
      }

      const addToDB = async () => {
        setLoading(true)
       const data = {
            data: users,
            key: session?.user.key,

        }

        const user = await fetch('/api/update-users', {
            method: "POST",
            cache: 'no-cache',
            headers: {
                "Content-Type": "application.json"
            },
            body: JSON.stringify(data)
        })

        if(user) {
            setUsers([])
            setLoading(false)
        }
      }

    
    return (
        <form className={styles.container} onSubmit={(e) => {
            e.preventDefault()
            if(users.length < 11){
             handleSubmit()    
            }
            else{
                alert("Cant Submit More Than 10 Members At Once")
            }
            }}>
   
        
                <input type="hidden" name="id" value={userId} readOnly/>
                <input type="hidden" name="code" value={userCode} readOnly/>
                <div className={styles.memberInfo}>
            <div className={styles.coordinates}>
                    <p>Title*</p>
                    <input type="text" placeholder='MR.' name="title" value={state.title.toUpperCase()} onChange={handleInputChange} required/>
                    <ul className={styles.listIns}>
                        <li>Enter the title of the member. (e.g. MR.)</li>
                    </ul>
            </div> 
            <div className={styles.coordinates}>
                    <p>Initials*</p>
                    <input type="text" placeholder='S.M' name="initial" value={state.initial.toUpperCase()} onChange={handleInputChange} required/>
                    <ul className={styles.listIns}>
                        <li>Use proper initial conventions. (e.g. S.W)</li>
                    </ul>
            </div> 
        
            <div className={styles.coordinates}>
                    <p>First Name*</p>
                    <input type="text" placeholder='First Name(s)' name="first_name" value={state.first_name.toUpperCase()} onChange={handleInputChange} required/>
            </div> 

            <div className={styles.coordinates}>
                    <p>Last Name*</p>
                    <input type="text" placeholder='Last Name' name="last_name" value={state.last_name.toUpperCase()} onChange={handleInputChange} required/>
            </div> 
            <div className={styles.coordinates}>
                    <p>Email Address*</p>
                    <input type="email" placeholder='Email Address' name="email" value={state.email} onChange={handleInputChange} required/>
                    <ul className={styles.listIns}>
                        <li>The email address of the member</li>
                        <li>This email will be used to send the login details to the user.</li>
                        
                       
                    </ul>
            </div> 
            <div className={styles.coordinates}>
                    <p>Phone Number*</p>
                    <input type="text" placeholder='Phone Number' name="phone_number" value={state.phone_number} onChange={handleInputChange} required/>
                    <ul className={styles.listIns}>
                        <li>The phone number of the member</li>
                        <li>For convenience</li>
                        
                       
                    </ul>
            </div> 
            <div className={styles.coordinates}>
                    <p>Position*</p>
                    <input type="text" placeholder='Developer' name="position" value={state.position.toUpperCase()} onChange={handleInputChange} required/>
                    <ul className={styles.listIns}>
                        <li>Position of the member</li>
                       
                    </ul>
            </div> 
        </div>

        <div className={styles.addNew}>
                <div className={styles.buttons}>
                <button type="submit" className={styles.Icon}>
                            <Image sizes='30' fill src={"/icons/add.png"} alt="Folder Icon"/>
                        </button>
                </div>
            </div>
       
<div className={styles.Profiles}>

            {
                users.map((item, index) => (
                    <MemberInfo key={item.id} position={item.position} code={item.code} title={item.title} last_name={item.last_name} initial={item.initial} dlt={removeUser}/>
                ))
            }
</div>
            <div className={styles.addNew}>
                <div className={styles.btn} onClick={() => {
                    if(users.length > 0){
                        addToDB()
                    }
                    else {
                        alert("Please add users")
                    }
                }} >
                    <p>{loading ? "Uploading..." : "Confirm"}</p>
                </div>
            </div>
        </form>
    );
}

export default AddMember;
