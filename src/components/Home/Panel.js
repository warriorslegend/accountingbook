import React from 'react'
import { Link } from 'react-router-dom'

export default function Panel() {
    return (
        <article id="panel">
            <Link to="/" className="link">
                <div className="button">Inicio</div>
            </Link>
            <Link to="/dashboard" className="link">
                <div className="button">Dashboard</div>
            </Link>
            <Link to="/settings" className="link">
                <div className="button">Ajustes</div>
            </Link>
        </article>
    )
}
