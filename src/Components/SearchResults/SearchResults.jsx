import styles from './SearchResults.module.css';
import TrackList from '../TrackList/TrackList';


export default function SearchResults() {
  return (
    //   <div className={styles.container}>
    //   <h2>Search Results</h2>
    //   <ul>
    //     <li>Result 1</li>
    //     <li>Result 2</li>
    //     <li>Result 3</li>
    //   </ul>
    //   </div>
      
      <div className={styles.SearchResults}>
           <h1>Search results</h1>
           <TrackList />
      </div>
  );
}