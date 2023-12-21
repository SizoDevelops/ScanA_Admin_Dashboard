import React from 'react'
import styles from './SchoolCSS/categories.module.css'
import { Button, TextField } from '@mui/material'
import { Form, Formik } from 'formik'

export default function CreatePost({display}) {
  return (
    <div className={styles.Popup}>
         <Button className={styles.close} variant="contained" color='primary' onClick={() => display(false)}>Back</Button>
        <Formik>
            {()=>(
                <Form className={styles.formHolder}>
                    <TextField className={styles.formInputs} type="text" label="Title"/>
                    <TextField className={styles.formInputs} type="text" label="Description"/>
                    <TextField className={styles.formInputs} minRows={5} type="text" multiline label="Post details"/>
                </Form>
            )}
        </Formik>
    </div>
  )
}
