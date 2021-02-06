import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to={'/'}>
                    <h1 className="title is-4">Buscador de peliculas <span role="img" aria-label="camera">🎥</span></h1>
                </Link>
         
            </div>
        </nav>
    )
}
