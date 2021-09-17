import React from 'react'
import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <header>
                <h1>Lambda Eats</h1>  
                <Link to="/">Homepage</Link>
            </header>
        </div>

    )
}
