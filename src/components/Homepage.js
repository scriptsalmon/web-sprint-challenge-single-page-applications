import React from 'react'
import { Link } from 'react-router-dom';
import image from '../Assets/Pizza.jpg';
import styled from 'styled-components';

const StyledHomepage = styled.div`
    width: 100%;
    height: 20rem;
    display:flex;
    justify-content:center;
    align-content:center;
    flex-direction:column;

    img {
        width: 100%;
        height: 300px;
        object-fit:contain;
    }
`

export default function Homepage() {
    return (
        <StyledHomepage>
            <header>
                <img src={image} alt="mama mia, a pizza!"/>
                <Link to="/pizza">
                    <button id="order-pizza">Make Your Pie!</button>
                </Link>
            </header>
        </StyledHomepage>
    )
}
