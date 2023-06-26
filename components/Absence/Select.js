"use client"

import React from 'react'
import Select from 'react-select';
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

export default function Selector() {
  return (
    <Select
    options={options}
    styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          width: "min(400px, 28vw)",
          height: "60px",
          outline: "none",
          border: "none",
          borderRadius: "4px",
          backgroundColor: "#111115",
          border: "none",
          outline: "none",
          color: "#ffffff"
        }),
  
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
       
        colors: {
          primary25: '#03a4ff',
          primary: '#ffffff',
          neutral0: "#111115",
         
        },
      })}
  />
  )
}
