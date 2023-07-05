import React from 'react';
import styles from "@/components/Settings/SettingsCSS/location.module.css"

const Location = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.intro}>Please enter the longitude and latitude in the boxes below, make sure it`s precise or follow the instructions below to get your coordinates.</h2>


            <div className={styles.formHolder}>
                <div className={styles.coordinates}>
                    <p>Latitude</p>
                    <input type="text" placeholder='-26.057660268343795'/>
                </div>
                <div className={styles.coordinates}>
                    <p>Longitude</p>
                    <input type="text" placeholder=' 28.023167203109832'/>
                </div>

                <div className={styles.submit}>Save</div>
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
        </div>
    );
}

export default Location;
