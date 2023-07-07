"use client"
import React, { useEffect, useState } from 'react';
import TopPanel from './HomePage/topPanel';
import SidePanel from './HomePage/sidePanel';

const Panels = () => {
    const [screenWidth, setScreenWidth] = useState(980)
useEffect(() => {
    setScreenWidth(screen.width)
    window.addEventListener(("resize"), () => {
        if(screen.width !== screenWidth){
                setScreenWidth(screen.width)
            }
    })
    console.log(screenWidth)
    },[screenWidth])
    return (
        <>
            {
                screenWidth < 1000 ? <TopPanel/> : <SidePanel/>
            }
        </>
    );
}

export default Panels;
