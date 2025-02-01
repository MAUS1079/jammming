import React from 'react';
import styles from './TrackList.module.css';
import Track from '../Track/Track';

export default function TrackList({ tracks = [] }) {
    if (!tracks || tracks.length === 0) {
        return <div className={styles.TrackList}>No tracks found</div>;
    }

    return (
        <div className={styles.TrackList}>
            {tracks.map((track) => (
                <Track
                    key={track.id}
                    track={track}
                />
            ))}
        </div>
    );
}