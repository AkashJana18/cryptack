import React, { useState } from 'react'
import './style.css'
import AnchorTemporaryDrawer from './drawer'
import Button from '../Button'
import Theme from '../Theme'
import { Link } from 'react-router-dom'
import { useTheme } from '../../../context/ThemeContext'

const Header = () => {
  const {darkMode, _} = useTheme()
  const headerStyles = darkMode ? 'header header-dark' : 'header header-light'
  const linkStyles = darkMode ? 'link link-dark' : 'link link-light'
  return (
    <div className={headerStyles}>
        <h1 className="logo">
            Cryptack <span style={{color: "var(--blue)"}}>.</span>
        </h1>
        <div className="links">
            <Theme/>
            <Link to="/">
                <p className={linkStyles}>Home</p>
            </Link>
            <Link to="/watchlist">
                <p className={linkStyles}>Watchlist</p>
            </Link>
            <Link to="/compare">
                <p className={linkStyles}>Compare</p>
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