import { Link } from 'react-router-dom'
import './nav.css'

export default function Navbar() {
    return (
        <nav className="navbar-landing">
            <div className='left-container'>
                <Link to="/"><p className='logo'>Uni-Lease</p></Link>
                <ul className="nav-list">
                    <li><Link to="/sell">List your space</Link></li>
                </ul>
            </div>
            <div className='right-container'>

            </div>
        </nav>
    )
}