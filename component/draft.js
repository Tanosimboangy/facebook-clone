import { resetWarningCache } from 'prop-types';
import React, { createContext, useReducer } from 'react';
const Context = createContext();
function ContextProvider({ children }) {
	const [state, dispatch] = useReducer((state, action) => {
			switch (action.type) {
				case 'ADD_NEW_COMMENT_TO_POST': {
					const newPosts = state.posts.map(post => {
						if (post.postId === action.postId) {
							return {
								...post,
								comments: [...post.comments, action.comment],
							};
						}
						return post;
					});
					return {
						...state,
						posts: newPosts,
					};
				}
			}
		},
		{
			posts: [],
			users: [],
			userLoggedIn: '',
		}
	);
	return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
}
export default { Context, ContextProvider };