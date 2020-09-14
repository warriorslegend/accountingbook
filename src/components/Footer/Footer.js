import React from 'react';
// Libraries
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="background-gray-dark white">
            <Link to="/contact" className="link">
                <span>Contáctanos</span>
            </Link>
        </footer>
    )
}
