import React from 'react'
import './style.css'
import AnchorTemporaryDrawer from './drawer'
import Button from '../Button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <h1 className="logo">
            Cryptack <span style={{color: "var(--blue)"}}>.</span>
        </h1>
        <div className="links">
            <Link to="/">
                <p className="link">Home</p>
            </Link>
            <Link to="/watchlist">
                <p className="link">Watchlist</p>
            </Link>
            <Link to="/compare">
                <p className="link">Compare</p>
            </Link>
            <Link to="/dashboard">
                <Button text={"Dashboard"} />
            </Link>
        </div>
        <div className="drawer-component">
            <AnchorTemporaryDrawer />
        </div>

    </div>
  )
}

export default Header