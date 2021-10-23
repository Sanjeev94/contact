import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-extend-lg navbar-dark bg-dark py-2">
            <Link to="/" className="navbar-brand ml-5"
            >React Redux contact</Link>

        </nav >
    )
}
