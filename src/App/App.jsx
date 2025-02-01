import React, { useState } from 'react';
import './App.css';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchResults from '../components/SearchResults/SearchResults';
import Playlist from '../components/Playlist/Playlist';
import { tracks } from '../resources/data/mock_data';

function App() {
  const [searchResults, setSearchResults] = useState(tracks);
  
  console.log(searchResults);
  
  return (
    <>
      <SearchBar />
      <div className='main'>
        <SearchResults searchResults={searchResults} />
        <Playlist />
      </div>
    </>
  );
}

export default App;
