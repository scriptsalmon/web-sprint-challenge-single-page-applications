import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.div`
    width: 100%;
    height: 5rem;
    display:flex;
    justify-content:space-around;
    align-content:baseline;

    .Nav-links {
        padding-top:2.5%;
    }

    a {
        padding:1% 5%;
        text-decoration:none;
    }

`

export default function Nav() {
    return (
        <StyledNav>
                <div className="Nav-logo">
                    <h1>Lambda Eats</h1>  
                </div>
                <nav className="Nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/contact">Contact</Link>
                </nav>

        </StyledNav>
    )
}
