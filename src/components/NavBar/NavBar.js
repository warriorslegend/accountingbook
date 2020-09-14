import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="flex space-between">
            <Link to="/" className="link">
                <div className="button">Logo</div>
            </Link>
            <div className="button">Cuenta</div>
        </nav>
    )
}
