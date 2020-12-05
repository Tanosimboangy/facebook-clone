import React from 'react';
import styled from 'styled-components';

const PostContainer = styled.div`
    max-width: 240px;
    border-radius: 12px;
    padding: 16px;
    margin-right: auto;
    margin-bottom: 20px;
    box-shadow: 0px 0px 3px blue;
    background-color: white;
`
const UserDetails = styled.ul`
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
const PostContent = styled.ul`
    p {
        font-size: 20px;
        padding-bottom: 10px; 
    }
    img {
        max-width: 90%;
        border-radius: 8px;
        margin-bottom: 10px;
    }
`
const PostLike = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 100px;
`

function Posts({data, usersData, currentUser, dispatch}) {
    const currentUserObj = usersData.find(user => user.userId === currentUser);

    function likePost() {
		const newLike = {
			likeId: Date.now(),
			userId: currentUser,
		};
		dispatch({ type: 'LIKE', newLike, postId: item.postId });
	}

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
                        <PostLike>
                            {item.likes.some(like => like.userId === currentUser) ? <button>Dislike</button> : <button onClick={likePost}>like</button>}
                            <span>{item.likes.length}</span>
                        </PostLike>
                    </PostContainer>
                )
            })}
        </>
    )
}

export default Posts