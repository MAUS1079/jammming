import React from 'react';
import styles from './SearchResults.module.css';
import TrackList from '../TrackList/TrackList';

export default function SearchResults({ searchResults, onAdd }) {
    return (
        <div className={styles.SearchResults}>
            <h2>Results</h2>
            <TrackList 
                tracks={searchResults} 
                onAdd={onAdd}
                isRemoval={false}
            />
        </div>
    );
}