import React, { useState, useContext } from 'react';
import { Context } from '../component/context';

export default function AddPost() {
	const [postContent, setPostContent] = useState('');
	const [postImage, setPostImage] = useState('http://picsum.photos/400');

	const { state, dispatch } = useContext(Context);
    const { currentUser } = state;
    
	function createNewPost(e) {
		e.preventDefault();
		const newPost = {
			postId: Date.now(),
			date: new Date(),
			postTextContent: postContent,
			userId: currentUser,
			imgUrl: postImage,
			likes: [],
			comments: [],
        };
		dispatch({ type: 'NEW_POST', newPost: newPost });
		resetForm();
	}
	function resetForm() {
		setPostContent('');
		setPostImage('');
	}

	return (
		<div>
			<h2>Add a post</h2>
			<form onSubmit={createNewPost}>
				<label>New post content:</label>
				<textarea
					placeholder="Say what's on your mind..."
					value={postContent}
					onChange={e => setPostContent(e.target.value)}
					required
				/>
				<label>New post picture :</label>
				<input
					type="url"
					placeholder="Paste a picture url here"
					value={postImage}
					onChange={e => setPostImage(e.target.value)}
					required
				/>
				<button>Post</button>
			</form>
		</div>
	);
}
