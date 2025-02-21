import React, { useCallback } from 'react';
import styles from './Track.module.css';

export default function Track({ track, onAdd, onRemove, isRemoval }) {
    const handleClick = useCallback(() => {
        if (!track) {
            console.error('Track is undefined');
            return;
        }

        if (isRemoval) {
            if (typeof onRemove === 'function') {
                onRemove(track);
            }
        } else {
            if (typeof onAdd === 'function') {
                onAdd(track);
            }
        }
    }, [track, onAdd, onRemove, isRemoval]);

    if (!track) return null;

    return (
        <div className={styles.Track}>
            <div className={styles.TrackInformation}>
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
            </div>
            <button 
                className={styles.TrackAction}
                onClick={handleClick}
            >
                {isRemoval ? '-' : '+'}
            </button>
        </div>
    );
}