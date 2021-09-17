import React from 'react'
import { Link } from 'react-router-dom';

export default function Homepage() {
    return (
        <div>
            <button id="#order-pizza">
                <Link to="/pizza">Make Your Pie!</Link>
            </button>
        </div>
    )
}
