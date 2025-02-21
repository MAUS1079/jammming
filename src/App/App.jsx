import React, { useState, useCallback } from 'react';
import './App.css';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchResults from '../components/SearchResults/SearchResults';
import Playlist from '../components/Playlist/Playlist';
import { tracks } from '../resources/data/mock_data';


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = useCallback((term) => {
      console.log(`Searching for ${term}`);
      const filteredTracks = tracks.filter(track => 
          track.name.toLowerCase().includes(term.toLowerCase()) ||
          track.artist.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(filteredTracks);
  }, []);

    const addTrack = useCallback(
        (track) => {
            if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
                return;
            setPlaylistTracks((prevTracks) => [...prevTracks, track]);
        },
        [playlistTracks]
    );

  const removeTrack = useCallback((track) => {
      setPlaylistTracks(playlistTracks.filter(savedTrack => 
          savedTrack.id !== track.id
      ));
  }, [playlistTracks]);

  const updatePlaylistName = useCallback((name) => {
      setPlaylistName(name);
  }, []);

  return (
      <>
          <SearchBar onSearch={search} />
          <div className='main'>
              <SearchResults 
                  searchResults={searchResults} 
                  onAdd={addTrack} 
              />
              <Playlist 
                  playlistName={playlistName}
                  tracks={playlistTracks}
                  onRemove={removeTrack}
                  onNameChange={updatePlaylistName}
              />
          </div>
      </>
  );
}

export default App;
