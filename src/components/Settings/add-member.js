"use client"
import React, { useEffect, useReducer, useState } from 'react';
import styles from "../Settings/SettingsCSS/add-member.module.css"
import MemberInfo from './member-info';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { Field, Form, Formik, useFormikContext } from 'formik';
import { validate } from './validate';
import { useSelector } from 'react-redux';
import CreatableSelect from 'react-select/creatable';

const voucher_codes = require('voucher-code-generator')

const initialState = {
    id: '',
    title: '',
    first_name: '',
    last_name: '',
    initial: '',
    position: [], 
    persal: '',
    email: '',
    code: '',
    password: '',
    phone_number: '',
    reason: '',
    date: '',
    block_user: false,
    pause_register: false,
    attendance: {
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: []
    },
    subjects: []
}
const components = {
    DropdownIndicator: null,
  };
  const createOption = (label) => ({
    label,
    value: label,
  });
const AddMember = () => {
    const {data: session} = useSession()
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const schema = useSelector(state => state.Database.value)
    const [inputValue, setInputValue] = useState('');
    const [value, setValue] = useState([]);
    const positions = []

    const handleKeyDown = (event) => {
        if (!inputValue) return;
        switch (event.key) {
          case 'Enter':
          case 'Tab':
            setValue((prev) => [...prev, createOption(inputValue)]);
            setInputValue('');
            event.preventDefault();
        }
      };

    const fillHiddenFieldValue = (values) => {
        value.forEach(val => {
            positions.push(val.value)
        })
        const code = voucher_codes.generate({
            count: 1,
            length: 6,
            prefix: schema.school_code + "-",
            charset:"alphanumeric"
        })[0].toUpperCase()


        const id = voucher_codes.generate({
            count: 1,
            length: 10,
            prefix: "scana-user-",
            
        })[0].toUpperCase()
        const updatedValues = {
          ...values,
          id: id,
          code: code,
          position: positions
        };
        return updatedValues;
      };

      const removeUser = (id) => {
        setUsers(users.filter(item => item.code !== id))
      }

      const addToDB = async () => {
        setLoading(true)
       const data = {
            data: users,
            key: schema.school_code,

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
        <div className={styles.container}>
        <Formik
            initialValues={initialState}
            validate={validate}
            onSubmit={(values, {resetForm }) => {
                let newValues = fillHiddenFieldValue(values)
                if(users.length < 10){
                    setUsers(prep => [...prep, newValues])
                }
                resetForm()
                setValue([])
            }}
        >

        {({
         errors,
         touched,
       }) => (
        <Form className={styles.Form} >
   
        
                 <Field type="hidden" name="id" />
                 <Field type="hidden" name="code"  />
                <div className={styles.memberInfo}>
            <div className={styles.coordinates}>
                    <p>{errors.title && touched.title ? <span style={{color: "red"}}>{errors.title}</span> : "Title*"}</p>
                    <Field type="text" placeholder='eg. MR.' name="title" style={errors.title && touched.title ? {outline: "1px solid red"} : {outline: "1px solid #03a4ff"}}/>
                    <ul className={styles.listIns}>
                        <li>Enter the title of the member. (e.g. MR.)</li>
                    </ul>
            </div> 
            <div className={styles.coordinates}>
                    <p>{errors.initial && touched.initial ? <span style={{color: "red"}}>{errors.initial}</span> : "Initials*"}</p>
                    <Field type="text" placeholder='Initial(s)' name="initial" style={errors.initial && touched.initial? {outline: "1px solid red"} : {outline: "1px solid #03a4ff"}}/>
                    <ul className={styles.listIns}>
                        <li>Use proper initial conventions. (e.g. S.W)</li>
                    </ul>
            </div> 
        
            <div className={styles.coordinates}>
            
                    <p>{errors.first_name && touched.first_name ? <span style={{color: "red"}}>{errors.first_name}</span> : "First Name*"}</p>
                    <Field type="text" placeholder='First Name(s)' name="first_name" style={errors.first_name && touched.first_name ? {outline: "1px solid red"} : {outline: "1px solid #03a4ff"}}/>
            </div> 

            <div className={styles.coordinates}>
                    <p>{errors.last_name && touched.last_name ? <span style={{color: "red"}}>{errors.last_name}</span> : "Last Name*"}</p>
                    <Field type="text" placeholder='Last Name' name="last_name" style={errors.last_name && touched.last_name ? {outline: "1px solid red"} : {outline: "1px solid #03a4ff"}}/>
            </div> 
            <div className={styles.coordinates}>
        
                    <p>{errors.email && touched.email ? <span style={{color: "red"}}>{errors.email}</span> : "Email Address*"}</p>
                    <Field type="email" placeholder='Email Address' name="email" style={errors.email && touched.email? {outline: "1px solid red"} : {outline: "1px solid #03a4ff"}}/>
                    <ul className={styles.listIns}>
                        <li>The email address of the member</li>
                        <li>This email will be used to send the login details to the user.</li>
                        
                       
                    </ul>
            </div> 
            <div className={styles.coordinates}>
                
                    <p>{errors.phone_number && touched.phone_number? <span style={{color: "red"}}>{errors.phone_number}</span> : "Phone Number"}</p>
                    <Field type="text" placeholder='Phone Number' name="phone_number" style={errors.phone_number && touched.phone_number? {outline: "1px solid red"} : {outline: "1px solid #03a4ff"}}/>
                    <ul className={styles.listIns}>
                        <li>The phone number of the member</li>
                        <li>For convenience</li>
                        
                       
                    </ul>
            </div> 
            <div className={styles.coordinates}>
   
                    <p>{errors.position && touched.position? <span style={{color: "red"}}>{errors.position}</span> : "Position*"}</p>
                    {/* <Field type="text" placeholder='e.g Teacher or HOD' name="position" style={errors.position && touched.position? {outline: "1px solid red"} : {outline: "1px solid #03a4ff"}}/> */}
                    <CreatableSelect
                        className={styles.positions}
                        components={components}
                        inputValue={inputValue}
                        isClearable
                        isMulti
                        required
                        menuIsOpen={false}
                        onChange={(newValue) => setValue(newValue)}
                        onInputChange={(newValue) => setInputValue(newValue)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type a position and press enter..."
                        value={value}
    />
                    <ul className={styles.listIns}>
                        <li>Position(s) of the member.</li>
                        <li>You can enter as many positions as you want.</li>
                        <li>Double check the spellings of the positions.</li>
                        <li>Press Enter or Tab to add a position to the list.</li>
                       
                    </ul>
            </div> 
            <div className={styles.coordinates}>
               
                    <p>{errors.persal && touched.persal? <span style={{color: "red"}}>{errors.persal}</span> : "Persal Number"}</p>
                    <Field type="text" placeholder='Persal Number' name="persal" style={errors.persal && touched.persal? {outline: "1px solid red"} : {outline: "1px solid #03a4ff"}}/>
                    <ul className={styles.listIns}>
                        <li>Enter the persal Number if available</li>
                       
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
                    <div key={item.id}>
                           <MemberInfo  position={item.position} code={item.code} title={item.title} last_name={item.last_name} initial={item.initial} dlt={removeUser}/>
                    </div>
                 
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
        </Form>
       )}
        </Formik>
        </div>
    );
}

export default AddMember;
