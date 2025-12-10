"use client";

import React, { useEffect, useReducer, useState } from "react";
import MemberProfile from "./members";
import styles from "../Settings/SettingsCSS/update-members.module.css";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { useModal } from "./modalCont";
import { Field, Form, Formik } from "formik";
import { validate } from "./validate";
import CreatableSelect from 'react-select/creatable';

const components = {
  DropdownIndicator: null,
};
const createOption = (label) => ({
  label,
  value: label,
});

const UpdateMembers = () => {
  const { data: session } = useSession();
  const schema = useSelector((state) => state.Database.value.members);
  const members = [...schema];

  const [search, setSearch] = useState("");
  const [membersArray, setMembers] = useState([]);
  const {userData} = useModal()

  function compareFn(a, b) {
    if (a.last_name < b.last_name) {
      return -1;
    } else if (a.last_name > b.last_name) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

  const membersCopy = members.sort(compareFn);
  useEffect(() => {
    setMembers(membersCopy);
    const members = [];
    membersCopy.forEach((elem) => {
      if (
        elem.last_name.toUpperCase().includes(search.toUpperCase()) ||
        elem.first_name.toUpperCase().includes(search.toUpperCase()) ||
        elem.title.toUpperCase().includes(search.toUpperCase()) ||
        elem.initial.toUpperCase().includes(search.toUpperCase())
      ) {
        members.push(elem);
        setMembers(members);
      }
    });
  }, [search, schema]);

 

  return (
    <div className={styles.container}>
      {userData.id !== ""? <Modal/> : (<div className={styles.Cont}>
        <div className={styles.categories}>
          <div className={styles.searchBar}>

            <div>
              {/* <Image alt="Search Icon" src="/icons/iconamoon_search.png" sizes='20' fill/> */}
              {/* <IconContext.Provider value={{color: "#03a4ff", style: { verticalAlign: 'middle' }}}>
    <FiSearch />
    </IconContext.Provider> */}
              <svg
                className={styles.searchIcon}
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.profiles}>
          {membersArray.map((member, index) => {
            return (
              <div key={member.last_name + index} >
                <MemberProfile
                  keyID={session?.user.key}
                  id={member.id}
                  title={member.title}
                  last_name={member.last_name}
                  position={member.position}
                  initial={member.initial}
                  data={member}
                  persal={member.persal}
                />
              </div>
            );
          })}
        </div>
        <ul className={styles.listIns}>
          <li>Hover over a profile to see the options.</li>
          <li>Some actions here are irreversable so be careful.</li>
        </ul>
      </div>)}
    </div>
  );
};

const Modal = () => {
const {userData, updateUser, setUserData} = useModal()
const {data: session} = useSession()
const [inputValue, setInputValue] = useState('');
const [value, setValue] = useState([]);
const positions = []

useEffect(() => {
  userData.position.forEach(elem => {
    setValue(prep => [...prep, {label: elem, value: elem}])
  })
}, [])

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
  const updatedValues = {
    ...values,
    position: positions
  };
  return updatedValues;
};
  return (
    <div className={styles.modalContainer}>
        <div className={styles.modal}>
          <span className={styles.closeModal} onClick={() => {
            setUserData({id:""})
          }}>
            &times;
          </span>
        <Formik
            initialValues={userData}
            validate={validate}
            onSubmit={async (values) => {
              let newValues = fillHiddenFieldValue(values)
                await updateUser({
                  key: session?.user.key,
                  user_details: newValues
                })
                  setUserData(newValues)
                // resetForm(userData)
            }}
        >
        {({
         isSubmitting,
         errors,
         touched
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
                        <li>Position of the member</li>
                       
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
                <button type="submit" className={styles.btn}  >
                    <p>{isSubmitting ? "Uploading..." : "Confirm"}</p>
                </button>
            </div>
        </Form>
       )}
       </Formik>
        </div>
      </div>
  )
}


export default UpdateMembers;
