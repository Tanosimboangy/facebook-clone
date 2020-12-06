import React, {useState, useContext} from 'react';
import { Context } from "../context";
import styled from 'styled-components';

const CommentList = styled.ul`
    li:first-of-type {
        ul {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: row;
            img {
                width: 45px;
                height: 45px;
                border-radius: 50%;
	        }
        }
    }
    li:last-of-type {
        padding-bottom: 10px;
    }
`
const CommentListContainer = styled.div`
    font-size: 20px;
`
const FormComment = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    background: #F2F2F2;
    border-radius: 12px;
    border: none;
    outline: none;
    max-width: 300px;
    padding: 10px;
    input {
        border: none;
        outline: none;
        cursor: pointer;
        border-radius: 10px;
        font-size: 18px;
        color: blue;
        width: 100%;
        background: none;
    }
    button {
        border: 0;
        line-height: 2.5;
        padding: 0 20px;
        font-size: 1rem;
        text-align: center;
        cursor: pointer;
        outline: none;
        color: #fff;
        text-shadow: 1px 1px 1px #000;
        border-radius: 10px;
        background-color: rgba(220, 0, 0, 1);
        background-image: linear-gradient(to top left,
        rgba(0, 0, 0, .2),
        rgba(0, 0, 0, .2) 30%,
        rgba(0, 0, 0, 0));
        box-shadow: inset 2px 2px 3px rgba(255, 255, 255, .6),
                    inset -2px -2px 3px rgba(0, 0, 0, .6);

    }
`

function PostComment({item, usersData, currentUser}) {
    const { dispatch } = useContext(Context);
    const [newCommentText, setNewComment] = useState('');

    function addComment(e) {
		e.preventDefault();
		const newComment = {
			commentId: Date.now(),
			userId: currentUser,
			date: Date.now(),
			commentTextContent: newCommentText,
		};
		dispatch({ type: 'ADD_NEW_COMMENT', postId: item.postId, newComment });
		setNewComment('');
	}

    return (
        <>
            {
                item.comments.map(comment => {
                    let newCommentUserId = comment.userId;
                    const currentCommentUser = usersData.find(user => user.userId == newCommentUserId);
                    return (
                        <CommentListContainer key={comment.commentId}> 
                            <CommentList>
                                <li>
                                    <ul>
                                        <li><img src={currentCommentUser.profilePictureUrl} /></li>
                                        <li>{currentCommentUser.userName}</li>
                                        <li>{new Date(comment.date).toLocaleDateString()}</li>
                                    </ul>
                                </li>
                                <li>{comment.commentTextContent}</li>
                            </CommentList>
                            <FormComment onSubmit={addComment}>
                                <input
                                    type="text"
                                    value={newCommentText}
                                    onChange={e => setNewComment(e.target.value)}
                                    placeholder="New comment"
                                    required
                                />
			                    <button>Post</button>
                            </FormComment>
                        </CommentListContainer>
                    )
                })
            }
        </>
    )
}

export default PostComment
