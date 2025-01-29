import avatar from '../../Resources/Avatar.png';
import './Header.component.css';

export default function Header() {
    return (
        <header>
            <img className='avatar' src={avatar} alt='Avatar' />
            <div className='searchBar'>
                <input type='text' placeholder='Search for Songs' />
                <button>Search</button>
            </div>
            <h1>My Jammming App</h1>
        </header>
    );
}