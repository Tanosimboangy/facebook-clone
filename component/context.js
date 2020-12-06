import React, { useReducer, createContext, useEffect } from 'react';
import postsData from "../postsData.json";
import users from "../usersData.json";

const Context = createContext();

function ContextProvider({children}) {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'GETTING_DATA': {
                return {
                    ...state,
                    data: postsData,
                    usersData: users,
                }
            }
            case 'LIKE': {
                const newData = state.data.map(item => {
                    if (item.postId === action.postId) {
                        return {
                            ...item,
                            likes: [...item.likes, action.newLike],
                        };
                    }
                    return item;
                });
                return {
                    ...state,
                    data: newData,
                };
            }
            case 'NEW_POST': {
                return {
                    ...state,
                    data: [...state.data, action.newPost],
                };
            }
            case 'DISLIKE': {
                const newPosts = state.data.map(item => {
                    if (item.postId === action.postId) {
                        return {
                            ...item,
                            likes: item.likes.filter(like => like.userId !== state.currentUser),
                        };
                    }
                    return item;
                });
                return {
                    ...state,
                    data: newPosts,
                };
            }
            case 'ADD_NEW_COMMENT': {
                const newComment = state.data.map(item => {
                    if (item.postId === action.postId) {
                        return {
                            ...item,
                            comments: [...item.comments, action.newComments],
                        };
                    }
                    return item;
                });
                return {
                    ...state,
                    data: newComment,
                };
            }
            default: {
                console.error("No action for type", action.type);
                break;
            }
        }
        return state;
    }, {
        data: [],
        usersData: [],
        currentUser: "1",
    })

    let { data, usersData, currentUser } = state;

    useEffect(() => {
        setTimeout(() => {
            dispatch({type: 'GETTING_DATA'})
          }, 50);
    }, [])

    return <Context.Provider value={{state, dispatch}}>
                {children}
            </Context.Provider>
}

export { Context, ContextProvider}
