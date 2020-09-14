import React from 'react';
// Libraries
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="flex space-between align-center">
            <aside>
                <Link to="/" className="link">
                    <img src="" alt="Project 7"/>
                </Link>
            </aside>
            <aside className="flex button align-center">
                <aside className="styled-button border radius-6px" style={{marginRight: '1em'}}>
                    Crea un proyecto
                </aside>
                <Link to="/account" className="link">
                    <div>Cuenta</div>
                </Link>
            </aside>
        </nav>
    )
}
