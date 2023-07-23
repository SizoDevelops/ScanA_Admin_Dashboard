"use client"

import React from 'react'
import Select from 'react-select';
import styles from '../../app/page.module.css'
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

export default function Selector({width, multi}) {
  return (
    <Select
    options={options}
    isMulti={multi}
    className={styles.Sele}
    styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          width: !width ? "min(400px, 28vw)" : width,
   
          outline: "none",
          border: "none",
          borderRadius: "4px",
          backgroundColor: "#111115",
          border: "none",
          outline: "none",
          color: "#ffffff",
          fontSize: "min(15px, 3vw)"
        }),
  
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
       
        colors: {
          primary25: '#68696a',
          primary: '#ffffff',
          neutral0: "#111115",
      
        },
      })}
  />
  )
}
