import React, {useContext} from 'react';
import { Context } from "../context";
import styled from 'styled-components';
import thumb_up from '../../img/thumb_up.svg';
import thumb_down from '../../img/thumb_down.svg';

const Postlike = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 100px;
    padding-bottom: 10px;
    img {
        background-color: blue;
        padding: 5px;
        border-radius: 50%;
    }
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
            {item.likes.some(like => like.userId === currentUser) ? 
                <img onClick={dislike} src={thumb_up} alt="dislike"/> : 
                <img onClick={likePost} src={thumb_down} alt="like"/>}
            <span><b>{item.likes.length}</b></span>
        </Postlike>
    )
}

export default PostLike
