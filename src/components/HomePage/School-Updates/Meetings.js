"use client"
import React, { useEffect, useState } from 'react'
import styles from './SchoolCSS/meetings.module.css'
import { Form, Formik, Field } from 'formik'
import { Button, Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'
import {  DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Image from 'next/image'
import { useDatabase } from '@/components/features/dbContext'
import { useDispatch, useSelector } from 'react-redux'
import { uploadMeetings } from '@/components/shared/DatabaseSlice'
const voucher_codes = require('voucher-code-generator')

  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function Meetings() {
    const {setMeeting, meetingModal} = useDatabase()
    const user = useSelector(state => state.Database.value)
    const [members, setMembers] = useState([])
    const [loading, setLoading] = useState(false)
    const [file, setFile] = useState("")
    const dispatch = useDispatch()
    useEffect(() => {
      setMembers([])
      user.members.forEach(member => {
        setMembers(prep => Array.from(new Set([...prep, ...member.position])))
      })
 
    },[user])

  return (
    <div className={styles.cont}>
        <Button className={styles.Close} variant="contained" color='primary' onClick={() => setMeeting({name: "", catergory: ""})}>Back</Button>
        <Formik
            initialValues={{
              id: "",
              title: "",
              venue: "",
              participants: [],
              date: null,
              agenda_text: "",
              fileName:""
            }}

            onSubmit={ async (values, { resetForm, setSubmitting}) => {

              const code = voucher_codes.generate({
                count: 1,
                length: 12,
            })[0] 
            const filename = voucher_codes.generate({
              count: 1,
              length: 10,
              
          })[0]
            const updated = {
                ...values,
                id: code,
                fileName: filename+".pdf"
              }
            
              const formData = new FormData();
              formData.append("key", user.key);
              formData.append("meeting", JSON.stringify(updated));
              formData.append("agenda_file", file, file.name); // Append the actual file
            
              setLoading(true)
               fetch("/api/set-meetings", {
                method: "POST",
                body: formData,
              }).then(() => resetForm({
                id: "",
                title: "",
                venue: "",
                participants: [],
                date: null,
                agenda_text: "",
                fileName:""
              }))
               .then(() => {
                dispatch(uploadMeetings(updated))
                setLoading(false)
               })
            }
            }
        >
            {
                 ({handleChange, errors, isSubmitting, handleSubmit, values, setFieldValue }) => (
                    <Form className={styles.formCont} >
                      <div className={styles.Form}>

          
                         <div className={styles.Image}>
                          <span className={styles.cover}></span>
                              <Image src='/office.png' fill alt="Meeting Boardroom"/>
                            </div>
            
                         
                            <FormControl className={styles.formInputs}>
                            <h3>Meeting name and location</h3>
                            
                            <TextField
                                required
                                label="Title"
                                type="text"
                                variant="standard"
                                color='primary'
                                fullWidth
                                margin="dense"
                                name="title"
                                onChange={handleChange}
                                value={values.title}
                                />

                            <TextField
                                required
                                label="Venue"
                                type="text"
                                variant="standard"
                                color='primary'
                                fullWidth
                                margin="dense"
                                name="venue"
                                onChange={handleChange}
                                value={values.venue}
                                />


                            <h3>Meeting attendies and time</h3>
                            <div className={styles.formSelectors}>

                           
                            <FormControl className={styles.SelectCont}>
                                     <InputLabel id="demo-multiple-checkbox-label">Select Participants</InputLabel>
                            <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={values.participants}
          onChange={(e) => setFieldValue("participants", typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value)}
          input={<OutlinedInput label="Select Participants" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {members.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={values.participants.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select> 
                            </FormControl>
    
        <LocalizationProvider dateAdapter={AdapterDayjs}>
               <div className={styles.Time}>
            <DateTimePicker className={styles.Inp} label="Date and Time" disablePast name="date" value={values.date}   onChange={(date) => setFieldValue("date", Date.parse(date))} />
    
            </div>
        </LocalizationProvider>
        <h3>Agenda creation and Meeting details</h3>
    
        </div>
 
                            </FormControl>
                            </div>
                            <div className={styles.Agenda}>
      

      <Button component="label" variant="contained" startIcon={
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cloud-arrow-up" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708z"/>
<path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
    </svg>}>
  Upload Agenda pdf
  <input className={styles.visuallyHidden} accept='.pdf' multiple={false} type="file" name="fileName"  onChange={ (e) => {
     setFieldValue("fileName", e.target.value.slice(e.target.value.lastIndexOf("\\")+1))
     const selectedFile = e.target.files[0];
      setFile(selectedFile)
 
  }} />
</Button>
<div>{values.fileName}</div>

<TextField  
required
  className={styles.text}
  label="Meeting Details Here"
  multiline
  minRows={10}
  name="agenda_text"
  onChange={handleChange}
  value={values.agenda_text}
/>
  </div>
                     
                      <Button className={styles.Send} endIcon={
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-check" viewBox="0 0 16 16"
                     
                      >
  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178 1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494-1.895 4.738a.5.5 0 1 0 .928.372l2.8-7Zm-2.54 1.183L5.93 9.363 1.591 6.602l11.833-4.733Z"/>
  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"/>
                        </svg>}
              variant={"contained"}
              type="submit"
              >
                        { loading ? "Sending" : "Send"}
                        </Button>    
                  
                    </Form>
                 )
            }
        </Formik>
        
    </div>
  )
}
