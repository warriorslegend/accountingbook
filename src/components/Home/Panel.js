import React from 'react'
import { Link } from 'react-router-dom'

export default function Panel() {
    return (
        <aside className="option-panel padding-1em">
            <Link to="/" className="link">
                <div className="button">Inicio</div>
            </Link>
            <div className="button">Dashboard</div>
            <div className="button">Ajustes</div>
        </aside>
    )
}
