import React from 'react'
import { Link } from 'react-router-dom';
import image from '../Assets/Pizza.jpg';
import styled from 'styled-components';

const StyledHomepage = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    justify-content:center;
    align-content:center;
    flex-direction:column;
    background: ${props => props.theme.secondaryColor};
    
    img {
        width: 100%;
        height: 300px;
        object-fit:contain;
        margin-top:3%;
    }

    a {
        margin-left:45%;
    }

`

export default function Homepage() {
    return (
        <StyledHomepage>
            <header>
                <div>
                <Link to="/pizza">
                    <button id="order-pizza">Make Your Pie!</button>
                </Link>
                </div>
                <img src={image} alt="mama mia, a pizza!"/>
            </header>

            
        </StyledHomepage>
    )
}
