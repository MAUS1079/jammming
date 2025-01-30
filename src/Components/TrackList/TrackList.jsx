import styles from './TrackList.module.css';
import Track from '../Track/Track';

export default function Tracklist() {
    return (
        <div className={styles.Tracklist}>
            {/* <!-- You will add a map method that renders a set of Track components  --> */}
            <Track />
            <Track />
            <Track />
            <Track />
            <Track />
            <Track />
            <Track />
        </div>
    );
}