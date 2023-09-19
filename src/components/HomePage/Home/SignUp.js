"use client"
import React, { useState } from 'react';
import styles from '../../HomePageCSS/signup.module.css'
import NavBar from './NavBar';
import { useFormik, Form, Formik, Field, ErrorMessage } from 'formik';
import { validate } from '@/lib/validate';
import { signIn } from 'next-auth/react';
import { useEffect } from 'react';
const voucher_codes = require('voucher-code-generator')

const schoolCode = voucher_codes.generate({
    count: 1,
    length: 5,
    prefix: "SCNA-",
    charset: "alphaberical"
})[0].toUpperCase()
const userCode = voucher_codes.generate({
        count: 1,
        length: 5,
        prefix: schoolCode + "-",
        charset:"alphabetic"
    })[0].toUpperCase()

const SignUp = () => {
const [data, setData] = useState({})

    return (
        <div>
           <NavBar/>
           <div className={styles.container}>
            <div className={styles.textHolder}>
            <h1>Register Your School</h1>
           </div>
            <div className={styles.BodyCont}>
                  <div className={styles.Images}>
                <div className={styles.image1}></div>
                <div className={styles.image2}></div>
           </div>

        <Formik

            initialValues={{
                school_name: '',
                school_slogan: '',
                school_email: '',
                school_number: '',
                attendance: {
                    currentWeek: "",
                    friday: "",
                    monday: "",
                    thursday: "",
                    tuesday: "",
                    wednesday: ""
                  },
                coordinates: {
                    latitude: "",
                    longitude: ""
                },
                school_address: {
                    line_one: '',
                    line_two: '',
                    province: '',
                    city: '',
                    zip_code:''
                },
                members: [],
                school_admin: {
                    admin_name: '',
                    admin_email: '',

                },
                password: '',
                confirm_password: ''
            }}

            validate={validate}

            onSubmit= {async values => {
                values.school_code = schoolCode
                values.school_admin.admin_code = userCode

                setData(values)

                await fetch("api/signup", {
                    method: "POST",
                    cache: "no-cache",
                    headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(data),
                }).then(data => data.json())
                .then(data => {
                    if(data === "User Already Exists"){
                        signIn()
                    }
                    else{  signIn() }
                }).catch(err => {
                    console.log(err)
                }) 

            }}
    
        >

       {
        ({isSubmiting, touched, errors, handleSubmit}) => (
           <Form className={styles.formHolder} onSubmit={handleSubmit}>

        <div className={styles.Steps}>
            <h2>School Details</h2>

            <label htmlFor='school_name'>School Name</label>
            <Field type="text" name='school_name' placeholder="School-Name Secondary School" styles={touched.school_name && errors.school_name ? {border: "1px solid #ff0000"} : {border: "none"}}/>
         
             <ErrorMessage name="school_name" />
            <label htmlFor='school_slogan'>School Slogan</label>
            <Field type="text" name='school_slogan' placeholder="We breathe and breed prosperity."/>
            

            <label htmlFor='school_email'>Email Address</label>
            <Field name='school_email' type="email" placeholder="schoolname@emaildomain.co.za"/>
            <ErrorMessage name="school_email" />

            <label htmlFor='school_number'>Phone Number</label>
            <Field type="text" name='school_number' placeholder="+27732456789"/>

            <ErrorMessage name="school_number" />
        </div>
  

        <div className={styles.Steps}>
        <h2>School Address</h2>
            <label htmlFor='school_address.line_one'>Address Line 1</label>
            <Field type="text" name='school_address.line_one' placeholder="23 Vilakazi Street"/>

            <ErrorMessage name="school_address.line_one" />


            <label htmlFor='school_address.line_two'>Address Line 2</label>
            <Field type="text" name='school_address.line_two' placeholder="New Stand"/>
            <ErrorMessage name="school_two" />


            <label htmlFor='school_address.province'>Province</label>
            <Field type="text" name='school_address.province' placeholder="Mpumalanga"/>
            <ErrorMessage name="province" />

            <label htmlFor='school_address.city'>Town/City</label>
            <Field type="text" name='school_address.city' placeholder="Piet Retief"/>
            <ErrorMessage name="city" />

            <label htmlFor='school_address.zip_code'>Zip Code</label>
            <Field type="text" name='school_address.zip_code' placeholder="2380"/>
            <ErrorMessage name="zip_code" />
        </div>


        <div className={styles.Steps}>
        <h2>Admin (Your) Details</h2>
            <label htmlFor='school_admin.admin_name'>Full Name</label>
            <Field type="text" name='school_admin.admin_name' placeholder='Sizo Mauritius Mhlongo' />
            <ErrorMessage name="school_admin.admin_name" />

            <label htmlFor='school_admin.admin_email'>Your Email</label>
            <Field type="email" name='school_admin.admin_email' placeholder="myname@gmail.com"/>
            <ErrorMessage name="admin_email" />

            <label htmlFor='password'>Password</label>
            <Field type="password" name='password'/>
            <ErrorMessage name="password" />

            <label htmlFor='confirm_password'>Confirm Password</label>
            <Field type="password" name='confirm_password' />
            <ErrorMessage name="confirm_password" />
        
        </div>

        <button type="submit" className={styles.Button} disabled={isSubmiting} >Submit</button>
           </Form>

)
}

           </Formik>
            </div>
         
           </div>
    
        </div>
    );
}

export default SignUp;



