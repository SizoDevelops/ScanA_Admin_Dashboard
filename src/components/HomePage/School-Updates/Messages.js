import React, { useEffect, useState } from 'react'
import styles from './SchoolCSS/messages.module.css'
import { Form, Formik } from 'formik'
import Message from './Message'
import { Button } from '@mui/material'
import Reply from './Reply'
import { useDatabase } from '@/components/features/dbContext'
import { useSelector } from 'react-redux'
import CreatePost from './CreatePost'

export default function Messages() {
  const user = useSelector(state => state.Database.value.posts)
  const [selected, setIndex] = useState(0)
  const {meetingModal, setMeeting} = useDatabase()
const posts = [...user]
const [show, setDisplay] = useState(false)
const sortedPosts = posts.filter(item => item.category === meetingModal.category).sort((a,b) => {
  if(a.date_created > b.date_created){
    return -1;
  }
  else if(a.date_created < b.date_created){
    return 1;
  }
  else return 0;
})
const date = new Date(sortedPosts[selected]?.date_created);
  if(sortedPosts.length === 0 && !show){
    return (<div style={{display:"flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw", position: 'relative'}}>
        <Button className={styles.close} variant="contained" color='primary' onClick={() => setMeeting({name:"Categories", category: ""})}>Back</Button>
      <h2>{`Create posts in the`} {<span onClick={() => {
      setDisplay(true)
      setMeeting({name: "Messages", category: meetingModal.category})
    }
    } style={{color: "#03a4ff", cursor: "pointer"}}>{meetingModal.category}</span>} {`category and they appear here.`}</h2></div>)
  }
  else if(show){
    return <CreatePost display={setDisplay}/>
  }
  return (
    <div className={styles.cont}>
       <div className={styles.Left}>
        <div className={styles.Header}>


       <h3>{sortedPosts[selected]?.title}</h3> 

       <h5>{sortedPosts[selected]?.description}</h5>

            <small className={styles.Date}>{`${date.toDateString()}`}</small>
            <p>{sortedPosts[selected]?.post_content.split(" ").slice(0, 200).join(" ")}</p>

            <div className={styles.Interactions}>
      <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
      </svg>
      <p>{sortedPosts[selected]?.interactions.views ? sortedPosts[selected]?.interactions.views?.length : 0}</p>
      </span>
      <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
      </svg>
      <p>{sortedPosts[selected]?.interactions.likes ? sortedPosts[selected]?.interactions.likes?.length : 0}</p>
      </span>
      <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reply" viewBox="0 0 16 16">
  <path d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z"/>
      </svg>
      <p>{sortedPosts[selected]?.interactions.replies ? sortedPosts[selected]?.interactions.replies?.length : 0}</p>
      </span>
    </div>
    <div className={styles.Btns}>
         <Button variant="text" startIcon={
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
</svg>}></Button>  
         <Button variant="text" color="info" startIcon={
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg>}></Button>  
         <Button variant="text" color="error" startIcon={
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>}></Button>  
    </div>
           <span className={styles.Line}>
            <i></i>
            <small>Comments</small>
            <i></i>
          </span>
    </div>

    {/* Replies */}
      <div className={styles.Replies}>
          <Reply />
          <Reply />
          <Reply />
          <Reply />
          <Reply />

      </div>

       </div>
       
        <div className={styles.Right}>
        <Button className={styles.close} variant="contained" color='primary' onClick={() => setMeeting({name:"Categories", category: ""})}>Back</Button>
            <p className={styles.RightHeader}>Recent Discussions</p>
              {
                sortedPosts.map((post, index) => (
                  <Message key={index} post={post} onclick={() => {setIndex(index)}} colors={selected === index ? ["#00f566", "#fdfdfd"]: ["#03a4ff", "#fdfdfd"]}/>
                ))
              }
        </div>
    </div>
  )
}
