import React, {useContext} from 'react';
import { Context } from "../context";
import styled from 'styled-components';

const Postlike = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 100px;
`

function PostLike({item, currentUser}) {
    const { state, dispatch } = useContext(Context);

    function likePost() {
		const newLike = {
			likeId: Date.now(),
			userId: currentUser,
		};
		dispatch({ type: 'LIKE', newLike, postId: item.postId });
    }
    function dislike() {
        dispatch({ type: 'DISLIKE', postId: item.postId });
    }

    return (
        <Postlike>
            {item.likes.some(like => like.userId === currentUser) ? <button onClick={dislike}>Dislike</button> : <button onClick={likePost}>like</button>}
            <span>{item.likes.length}</span>
        </Postlike>
    )
}

export default PostLike
