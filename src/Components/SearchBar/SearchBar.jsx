import React, { useState, useCallback } from 'react';
import avatar from '../../resources/img/Avatar.png';
import styles from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleTermChange = useCallback((event) => {
        setSearchTerm(event.target.value);
    }, []);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        onSearch(searchTerm);
    }, [onSearch, searchTerm]);

    return (
        <header>
            <img className={styles.avatar} src={avatar} alt='Avatar' />
            <div className={styles.searchbar}>
                <input 
                    type='text' 
                    placeholder='Search for Songs or Artist'
                    onChange={handleTermChange}
                    value={searchTerm}
                />
                <button onClick={handleSubmit}>
                    Search
                </button>
            </div>
            <h1>My Jammming App</h1>
        </header>
    );
}