import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ListStyled = styled.ul`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 20px;
    li {
        a {
            font-size: 20px;
            color: blue;
            font-weight: 900;
            text-transform: uppercase;
        }
    }
`


function Menu() {
    return (
        <ListStyled>
            <li><Link to="/">Feed</Link></li>
            <li><Link to="/addPost">Add Post</Link></li>
            <li><Link to="/options">Options</Link></li>
        </ListStyled>
    )
}

export default Menu
