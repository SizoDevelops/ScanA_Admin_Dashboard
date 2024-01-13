import React from 'react'
import styles from './SchoolCSS/categories.module.css'
import { Button, TextField } from '@mui/material'
import { Form, Formik } from 'formik'
import { useSelector } from 'react-redux'
import { useDatabase } from '@/components/features/dbContext'

export default function CreatePost({display}) {
  const user = useSelector(state => state.Database.value)
  const {meetingModal} = useDatabase()
  return (
    <div className={styles.Popup}>
         <Button className={styles.close} variant="contained" color='primary' onClick={() => display(false)}>Back</Button>
        <Formik
          initialValues={{
            title: "",
            user: {
              name: user.school_name,
              position: "School",
              id: user.school_code
            },
            description: "",
            post_content: "",
            date_created: Date.now(),
            interactions: {
              views: [],
              replies: [],
              likes: []
            },
            category: meetingModal.category,
          }}
          onSubmit={(values, {resetForm, setSubmitting}) => {
            if(user){
              setSubmitting(true)
              fetch("/api/posts", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                key: user.key,
                post: values
              })
            }).then(resetForm)
            .then(() => {
              setSubmitting(false)
            })
            }
            
          }}
        >
            {({handleChange, handleSubmit,isSubmitting, values})=>(
                <Form className={styles.formHolder} onSubmit={handleSubmit} autoComplete='off' >
                    <TextField className={styles.formInputs} required type="text" name="title"  label="Title" onChange={handleChange} value={values.title}/>
                    <TextField className={styles.formInputs} required type="text" name="description"  label="Description" onChange={handleChange} value={values.description}/>
                    <TextField className={styles.formInputs} required minRows={5}  name="post_content"  type="text" multiline label="Post details" onChange={handleChange} value={values.post_content}/>
                    <Button type='submit' variant="outlined" >{isSubmitting ? "Sending" : "Send"}</Button>
                </Form>
            )}
        </Formik>
    </div>
  )
}
