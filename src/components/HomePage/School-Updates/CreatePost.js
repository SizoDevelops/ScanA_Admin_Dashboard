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
              position: "School"
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
          onSubmit={(values, {resetForm}) => {
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
          }}
        >
            {({handleChange, handleSubmit, values})=>(
                <Form className={styles.formHolder}>
                    <TextField className={styles.formInputs} type="text" name="title" label="Title" onChange={handleChange} value={values.title}/>
                    <TextField className={styles.formInputs} type="text" name="description" label="Description" onChange={handleChange} value={values.description}/>
                    <TextField className={styles.formInputs} minRows={5} name="post_content" type="text" multiline label="Post details" onChange={handleChange} value={values.post_content}/>
                    <Button variant="outlined" onClick={handleSubmit}>Send</Button>
                </Form>
            )}
        </Formik>
    </div>
  )
}
