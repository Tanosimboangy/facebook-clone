import React from 'react';
import styled from 'styled-components';
import UserDetails from '../component/Post/UserDetails';
import PostContent from '../component/Post/PostContent';
import PostLike from '../component/Post/PostLike';
import PostComment from './Post/PostComment';

const PostContainer = styled.div`
    max-width: 280px;
    border-radius: 12px;
    padding: 16px;
    margin-right: auto;
    margin-bottom: 20px;
    box-shadow: 0px 0px 3px blue;
    background-color: white;
`

function Posts({data, usersData, currentUser}) {
    const currentUserObj = usersData.find(user => user.userId === currentUser);

    return (
        <>
            {data.map(item => {
                return (
                    <PostContainer className="post_container" key={item.postId}>
                        <UserDetails 
                            currentUserObj={currentUserObj} 
                            item={item}
                        />
                        <PostContent 
                            item={item} 
                        />
                        <PostLike 
                            item={item} 
                            currentUser={currentUser} 
                        />
                        < PostComment 
                            item={item}
                            usersData={usersData}
                            currentUser={currentUser}
                        />
                    </PostContainer>
                )
            })}
        </>
    )
}

export default Posts