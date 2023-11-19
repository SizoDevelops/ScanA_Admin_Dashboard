"use client"
import React, { useState } from 'react';
import styles from '../../HomePageCSS/signup.module.css'
import NavBar from './NavBar';
import { Form, Formik, Field, ErrorMessage} from 'formik';
import { validate } from '@/lib/validate';
import { useDatabase } from '@/components/features/dbContext';
import { useRouter, useSearchParams } from 'next/navigation';
import Modal from '../Modal';
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
    const initValues = {
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
            longitude: "",
            distance: 200
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
    }
const SignUp = () => {
const [userData, setData] = useState({})
const {sendSignUp, errCode,setCode} = useDatabase()
 const router = useRouter()
const [loading, setLoading ] = useState(false)
  function areSomeFieldsEmpty(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key) && !obj[key]) {
        return true; // At least one field is empty or falsy
      }
    }
    return false; // No empty or falsy fields found
  }
  


    return (
        <body className={styles.Body}>
           <NavBar/>
           <div className={styles.container}>
           {
        errCode.message.length < 1 ? <></> : <Modal errCode={errCode}/>
        }
            <div className={styles.textHolder}>
            <h1>Register Your <span>School</span></h1>
           </div>
            <div className={styles.BodyCont}>
                  <div className={styles.Images}>
                <div className={styles.image1}></div>
                <div className={styles.image2}></div>
           </div>

        <Formik

            initialValues={initValues}

            validate={validate}

            onSubmit= {async (values, {resetForm}) => {
                if (areSomeFieldsEmpty(values)) {
                    // All form fields are empty, do not proceed with submission
                    return;
                  }
                values.school_code = schoolCode
                values.school_admin.admin_code = userCode
            
                setData(values)
            if(!areSomeFieldsEmpty(userData)){
                setLoading(true)
                 await fetch("/api/signup", {
                    method: "POST",
                    cache: "no-cache",
                    headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(userData),
                }).then(data => data.json())
                .then(async data => {
                  
                    if(data === "User Already Exists"){
                        // Show User Already Exists Error
                        setCode({title: "User Already Registered!", message: "This user email has already been used please try a new email or login instead.", type: "Error"})
                        router.push("/dashboard")
                        setLoading(false)
                       
                        return;
            
                    }
                    else if(data === undefined){
                        setCode({title: "Oops our bad please try again!", message: "We messed up on that one please click submit again to sign up.", type: "Other"})
                        setLoading(false)
                        return;
                    }
                    else{  
                        await sendSignUp({
                            name: `${data.school_admin.admin_name}`,
                            page: `https://scana-dashboard.netlify.app/login?code=${data.school_code}&email=${data.school_email}`,
                            user: [data.school_admin.admin_email, data.school_email],
                            code: data.school_code,
                            user_mail: data.school_email
                          })
                          router.push("/dashboard") 
                          setLoading(false)
                          resetForm()
                 
                     }
                }).catch(err => {
                    setLoading(false)
                    setCode({title: "Something Went Wrong!", message: "Please try registering again.", type: "Error"})
                }) 
            }
               

            }}
    
        >

       {
        ({touched, errors, handleSubmit}) => (
           <Form className={styles.formHolder} onSubmit={handleSubmit}>

        <div className={styles.Steps}>
            <h2>School Details</h2>

            <label htmlFor='school_name'>School Name</label>
            <Field type="text" name='school_name' placeholder="School-Name Secondary School" styles={touched.school_name && errors.school_name ? {border: "1px solid #ff0000"} : {border: "none"}}/>

             <ErrorMessage name="school_name" component="span"/>
            <label htmlFor='school_slogan'>School Slogan</label>
            <Field type="text" name='school_slogan' placeholder="We breathe and breed prosperity."/>
            

            <label htmlFor='school_email'>Email Address</label>
            <Field name='school_email' type="email" placeholder="schoolname@emaildomain.co.za"/>
            <ErrorMessage name="school_email" component="span"/>

            <label htmlFor='school_number'>Phone Number</label>
            <Field type="text" name='school_number' placeholder="+27732456789"/>

            <ErrorMessage name="school_number" component="span"/>
        </div>
  

        <div className={styles.Steps}>
        <h2>School Address</h2>
            <label htmlFor='school_address.line_one'>Address Line 1</label>
            <Field type="text" name='school_address.line_one' placeholder="23 Vilakazi Street"/>

            <ErrorMessage name="school_address.line_one" component="span"/>


            <label htmlFor='school_address.line_two'>Address Line 2</label>
            <Field type="text" name='school_address.line_two' placeholder="New Stand"/>
     


            <label htmlFor='school_address.province'>Province</label>
            <Field type="text" name='school_address.province' placeholder="Mpumalanga"/>
            <ErrorMessage name="school_address.province" component="span"/>

            <label htmlFor='school_address.city'>Town/City</label>
            <Field type="text" name='school_address.city' placeholder="Piet Retief"/>
            <ErrorMessage name="school_address.city" component="span"/>

            <label htmlFor='school_address.zip_code'>Zip Code</label>
            <Field type="text" name='school_address.zip_code' placeholder="2380"/>
            <ErrorMessage name="school_address.zip_code" component="span"/>
        </div>


        <div className={styles.Steps}>
        <h2>Admin (Your) Details</h2>
            <label htmlFor='school_admin.admin_name'>Full Name</label>
            <Field type="text" name='school_admin.admin_name' placeholder='Sizo Mauritius Mhlongo' />
            <ErrorMessage name="school_admin.admin_name" component="span"/>

            <label htmlFor='school_admin.admin_email'>Your Email</label>
            <Field type="email" name='school_admin.admin_email' placeholder="myname@gmail.com"/>
            <ErrorMessage name="school_admin.admin_email" component="span"/>

            <label htmlFor='password'>Password</label>
            <Field type="password" name='password'/>
            <ErrorMessage name="password" component="span"/>

            <label htmlFor='confirm_password'>Confirm Password</label>
            <Field type="password" name='confirm_password' />
            <ErrorMessage name="confirm_password" component="span"/>
        
        </div>

        <button type="submit" className={styles.Button} disabled={loading}>{loading ? "Loading..." : "Submit"}</button>
           </Form>

)
}

           </Formik>
            </div>
         
           </div>
    
        </body>
    );
}
function Span() {
  return (
    <span style={{fontSize: "10px", color: "pink", marginBottom: "10px"}}></span>
  )
}

export default SignUp;



