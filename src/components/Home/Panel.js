import React from 'react';
// Libraries
import { Link } from 'react-router-dom'

export default function Panel() {
    return (
        <div id="panel">
            <Link to="/" className="link">
                <div>Inicio</div>
            </Link>
            <Link to="/dashboard" className="link">
                <div>Dashboard</div>
            </Link>
            <Link to="/settings" className="link">
                <div>Ajustes</div>
            </Link>
        </div>
    )
}
