import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <header>
                <div className="Nav-logo">
                    <h1>Lambda Eats</h1>  
                </div>
                
                <nav className="Nav-links">
                    <Link to="/">Homepage</Link>
                    <Link to="/confirmation">Confirm</Link>
                </nav>
                
            </header>
        </div>

    )
}
