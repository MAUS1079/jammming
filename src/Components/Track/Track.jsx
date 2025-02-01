import React from 'react';
import styles from './Track.module.css';

export default function Track(props) {
    return (
        <div className={styles.Track}>
            <div className='Track-information'>
                <h3>{props.track.name}</h3>
                <p>{props.track.artist} | {props.track.album}</p>
            </div>
            <button className='Track-action'>+ or -</button>
        </div>
    );
}