import React, { useCallback } from 'react';
import TrackList from '../TrackList/TrackList';
import styles from './Playlist.module.css';

export default function Playlist({ playlistName, playlistTracks, onNameChange, onRemove }) {
    const handleNameChange = useCallback((event) => {
        onNameChange(event.target.value);
    }, [onNameChange]);

    return (
        <div className={styles.Playlist}>
            <h1> { playlistName }</h1>
            <input 
                value={playlistName}
                onChange={handleNameChange}
                placeholder="New Playlist"
            />
            <TrackList 
                tracks={playlistTracks}
                onRemove={onRemove}
                isRemoval={true}
            />
            <button className={styles.PlaylistSave}>
                SAVE TO SPOTIFY
            </button>
        </div>
    );
}