/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark main-navbar">
            <Link className="navbar-brand " to='/'>myNews</Link>
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to='/'>Home</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar