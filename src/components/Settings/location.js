"use client"
import React, { useEffect, useState } from 'react';
import styles from "@/components/Settings/SettingsCSS/location.module.css"
import { useSession } from 'next-auth/react';
import { useSelector } from 'react-redux';
import Loader from '../shared/Loader';
import { useDatabase } from '../features/dbContext';

const Location = () => {
    const {data: session} = useSession()
    const [latitude, setLat] = useState("")
    const [longitude, setLong] = useState("")
    const [distance, setDistance] =useState(200)
    const {loading} = useDatabase()
    const schema = useSelector(state => state.Database.value)
    const [loader, setLoading] = useState(false)

    const setLocation = async (data) =>{
        setLoading(true)
        await fetch("/api/set-location", {
            method: "POST",
            cache: "force-cache",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        setLoading(false)
    }

    useEffect(() => {
        setLat(schema?.coordinates.latitude)
        setLong(schema?.coordinates.longitude)
        setDistance(schema?.coordinates.distance)
    }, [schema])

    if(loading){
        return <Loader/>
    }
    return (
        <body className={styles.container}>
            <h2 className={styles.intro}>Please enter the longitude and latitude in the boxes below, make sure it`s precise or follow the instructions below to get your coordinates.</h2>


            <div className={styles.formHolder}>
                <div className={styles.coordinates}>
                    <p>Latitude</p>
                    <input type="text" placeholder='-26.057660268343795' value={latitude} onChange={e => setLat(e.target.value)}/>
                </div>
                <div className={styles.coordinates}>
                    <p>Longitude</p>
                    <input type="text" placeholder=' 28.023167203109832' value={longitude} onChange={e => setLong(e.target.value)}/>
                </div>
                <div className={styles.coordinates}>
                    <p>Proximity (Distance)</p>
                    <input type="number" placeholder=' 200' value={distance} onChange={e => setDistance(e.target.value)}/>
                </div>

                <div className={styles.submit} disabled={loader} onClick={() => {
                    if(!latitude || !longitude){
                        alert("Please Supply Both Coordinates.")
                    }
                    else {
                        setLocation({
                            key: session?.user.key,
                            latitude: latitude,
                            longitude: longitude,
                            distance: distance <= 0 ? 200 : distance
                        })
                    }
                }}>{loader ? "Saving" : "Save"}</div>
            </div>


            <div className={styles.instructions}>
                <h3>Where do I get my coordinates?</h3>
                <ul className={styles.instruList}>
                    <li>Go to on your computer <a href='https://www.google.com/maps' target='_blank'>Google Maps</a>.</li>
                    <li>On the search bar, enter the place you want coordinates for. (e.g `Bryanston, Sandton`)</li>
                    <li><strong><i>Right-Click</i></strong> on the place that appears on the map, a drop down will appear.</li>
                    <li><strong><i>Left-Click</i></strong> on the coordinates to copy them.</li>
                </ul>
            </div>
        </body>
    );
}

export default Location;
