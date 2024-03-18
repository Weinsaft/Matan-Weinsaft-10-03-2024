import React from 'react'
import wine from '../assets/images/wine-glass.svg'
import { Link } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'


export default function Navbar() {
  return (
    <nav className='container-fluid d-flex justify-content-between align-items-center py-2 border-bottom'>
        <div className="logo">
        <Link to="/" ><img src={wine} alt="" width={50}/></Link>
            
        </div>

        <div className="links d-flex gap-2 mw-20 align-items-center">
            <Link to="/" className='btn btn-dark'>Home</Link>
            <Link to="/favorites" className='btn btn-dark'>Favorites</Link>
            <DarkModeToggle />
        </div>
    </nav>
  )
}