import React from 'react';
import styled from 'styled-components';

const UserDetails = styled.ul`
    display: grid;
	gap: 20px;
	grid-template-columns: auto 1fr 1fr;
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
const PostContainer = styled.div`
    max-width: 300px;
    border-radius: 12px;
    padding: 16px;
    margin-right: auto;
    margin-bottom: 20px;
    box-shadow: 0px 0px 3px blue;
    background-color: white;
`
const PostContent = styled.ul`
    p {
        font-size: 20px;
        padding-bottom: 10px; 
    }
    img {
        max-width: 90%;
        border-radius: 8px;
    }
`
function Posts({data, usersData, currentUser}) {
    const currentUserObj = usersData.find(user => user.userId === currentUser);

    return (
        <>
            {data.map(item => {
                return (
                    <PostContainer className="post_container" key={item.postId}>
                        <UserDetails>
                            <li><img src={currentUserObj.profilePictureUrl}/></li>
                            <li><h3>{currentUserObj.userName}</h3></li>
                            <span>{new Date(item.date).toLocaleDateString()}</span>
                        </UserDetails>
                        <PostContent>
                            <li><p>{item.postTextContent}</p></li>
                            <li><img src={item.imgUrl}/></li>
                        </PostContent>
                    </PostContainer>
                )
            })}
        </>
    )
}

export default Posts