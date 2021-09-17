import React from 'react'
import { Link } from 'react-router-dom';

export default function Homepage() {
    return (
        <div>
            <Link to="/pizza">
                <button id="#order-pizza">Make Your Pie!</button>
            </Link>
        </div>
    )
}
