import styles from './SearchResults.module.css';

export default function SearchResults() {
  return (
      <div className={styles.container}>
      <h2>Search Results</h2>
      <ul>
        <li>Result 1</li>
        <li>Result 2</li>
        <li>Result 3</li>
      </ul>
    </div>
  );
}