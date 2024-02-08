import { Link } from 'react-router-dom'
import './nav.css'
import myImage from './temporary-logo.png';

export default function Navbar() {
    return (
        <nav className="navbar-landing">
            <div className='left-container'>
                <span class="menu-button material-symbols-outlined">menu</span>
            </div>
            <div className='center-container'>
                <Link to="/" ><img className='logo' src={myImage} Link="" /></Link>
            </div>
            <div className='right-container'>
                <ul className="nav-list">
                    <li><Link to="/signin">Sign In</Link></li>
                    <li><Link to="/sell">List Your Space</Link></li>
                </ul>
            </div>
        </nav>
    )
}