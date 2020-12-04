import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


function Menu() {
    return (
        <ul>
            <li><Link to="/">Feed</Link></li>
            <li><Link to="/addPost">Add Post</Link></li>
            <li><Link to="/options">Options</Link></li>
        </ul>
    )
}

export default Menu
