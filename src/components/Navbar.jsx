import React from 'react'
import wine from '../assets/images/wine-glass.svg'
import { Link, useLocation } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'


export default function Navbar() {
  const  {pathname}  = useLocation();

    const isActive = (to) => {
      return pathname === to ? 'active' : '';
    };

  return (
    <nav className='container-fluid d-flex justify-content-between align-items-center py-2 border-bottom'>
        <div className="logo">
        <Link to="/" ><img src={wine} alt="" width={50}/></Link>
            
        </div>

        <div className="links d-flex gap-2 mw-20 align-items-center">
            <Link to="/" className={`btn btn-dark ${isActive('/')}`}>Home</Link>
            <Link to="/favorites" className={`btn btn-dark ${isActive('/favorites')}`}>Favorites</Link>
            <DarkModeToggle />
        </div>
    </nav>
  )
}