import styles from './Track.module.css';

export default function Track() {
    return (
        <div className={styles.Track}>
            <div className='Track-information'>
                <h3>Track Name</h3>
                <p>Artist | Album</p>
            </div>
            <button className='Track-action'>+ or -</button>
        </div>
    );
}