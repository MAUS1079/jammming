import TrackList from '../TrackList/TrackList';
import styles from './Playlist.module.css';

export default function Playlist({ playlistName, playlistTracks }) {
    return (
        <div className={styles.Playlist}>
            <h1>Create new playlist</h1>
            <input value={playlistName} readOnly />
            <TrackList tracks={playlistTracks} />
            <button className={styles.PlaylistSave}>SAVE TO SPOTIFY</button>
        </div>
    );
    }