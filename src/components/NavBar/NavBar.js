import React from 'react';
// Libraries
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="flex space-between">
            <Link to="/" className="link">
                <img src="" alt="Project 7"/>
            </Link>
            <Link to="/account" className="link">
                <div>Cuenta</div>
            </Link>
        </nav>
    )
}
