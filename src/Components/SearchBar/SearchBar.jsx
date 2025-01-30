import avatar from '../../resources/Avatar.png';
import styles from './SearchBar.module.css';

export default function SearchBar() {
    return (
        <header>
            <img className={styles.avatar} src={avatar} alt='Avatar' />
            <div className={styles.searchbar}>
                <input type='text' placeholder='Search for Songs' />
                <button>Search</button>
            </div>
            <h1>My Jammming App</h1>
        </header>
    );
}