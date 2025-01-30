import './App.css';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchResults from '../components/SearchResults/SearchResults';
import Playlist from '../components/Playlist/Playlist';

function App() {
  return (
    <>
      <SearchBar />
      <div className='main'>
        <SearchResults />
        <Playlist />
      </div>
    </>
  );
}

export default App;
