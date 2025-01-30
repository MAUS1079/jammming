import TrackList from '../TrackList/TrackList';
import styles from './Playlist.module.css';

export default function Playlist() {
    return (
        <div className={styles.Playlist}>
            <h1>Create new playlist</h1>
            <input defaltValue={'New Playlist'} />
            {/* <!-- Add a TrackList component --> */}
            <TrackList />
            <button className={styles.PlaylistSave}>SAVE TO SPOTIFY</button>
        </div>
    );
    }