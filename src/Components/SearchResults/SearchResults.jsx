import React from 'react';
import styles from './SearchResults.module.css';
import TrackList from '../TrackList/TrackList';


export default function SearchResults(props) {
  console.log(props.searchResults);

  return (
      <div className={styles.SearchResults}>
        <h1>Search results</h1>
        <TrackList tracks={props.searchResults} />
      </div>
  );
}