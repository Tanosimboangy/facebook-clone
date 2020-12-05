import React from 'react';
import styled from 'styled-components';

const UserDetail = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
	align-items: center;
    padding-bottom: 10px;
    li {
        img {
            width: 35px;
            height: 35px;
            border-radius: 50%;
	    }
    }
`

function UserDetails({ currentUserObj, item }) {
    return (
        <UserDetail>
            <li><img src={currentUserObj.profilePictureUrl}/></li>
            <li><h3>{currentUserObj.userName}</h3></li>
            <span>{new Date(item.date).toLocaleDateString()}</span>
        </UserDetail>
    )
}

export default UserDetails
