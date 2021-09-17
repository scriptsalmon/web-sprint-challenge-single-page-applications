import React from 'react'
import { Link } from 'react-router-dom';
import image from '../Assets/Pizza.jpg'

export default function Homepage() {
    return (
        <div>
            <header>
                <img src={image} alt="image of a pizza mama-mia"/>
                <Link to="/pizza">
                    <button id="#order-pizza">Make Your Pie!</button>
                </Link>
            </header>

        </div>
    )
}
