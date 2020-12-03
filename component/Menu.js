import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavStyles = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

function Menu() {
    return (
        <div>
            <h1>ONJA FACEBOOK</h1>
            <NavStyles>
                <li><h2><Link to="/">Feed</Link></h2></li>
                <li><h2><Link to="/addPost">Add a post</Link></h2></li>
                <li><h2><Link to="/username">UserName</Link></h2></li>
            </NavStyles>
        </div>
    )
}

export default Menu
