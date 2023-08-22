import React from 'react'
import "./header.css"
import logo from "./LOGO.png"
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='header'>
        <div className="headerLeft">
            <Link to="/"><img src={logo} alt="" className="header__icon" /></Link>
            <div className="links">
            <Link to="/movies/popular" style={{textDecoration:"none"}}><span>Popular</span></Link>
            <Link to="/movies/top_rated" style={{textDecoration:"none"}}> <span>Top Rated</span></Link>
            <Link to="/movies/upcoming" style={{textDecoration:"none"}}><span>Upcoming </span></Link>
            </div>
        </div>
    </div>
  )
}

export default Header
