import React from 'react';
import Track from '../Track/Track';
import styles from './TrackList.module.css';

export default function TrackList({ tracks = [], onAdd, onRemove, isRemoval }) {
    // Add null check for tracks
    if (!Array.isArray(tracks) || tracks.length === 0) {
        return <div className={styles.TrackList}>No tracks available</div>;
    }

    return (
        <div className={styles.TrackList}>
            {tracks.map(track => (
                <Track
                    key={track.id}
                    track={track}
                    onAdd={onAdd}
                    onRemove={onRemove}
                    isRemoval={isRemoval}
                />
            ))}
        </div>
    );
}