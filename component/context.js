import React, { createContext, useReducer } from 'react';
import dataJson from "../data.json";
import users from "../user.json";

const Context = createContext();

function ContextProvider({children}) {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'ADD_NEW_POST': {
                return {
                    ...state,
                    data: [...state.data, action.newPost],
                }
            }
            case 'UPDATE_COMMENTS_POSTS': {
                return {
                    ...state,
                    data: [...state.data, action.updatedList],
                }
            }
            default: {
                console.error("Action is done!");
                break;
            }
        }
        return state;
    }, {
        data: dataJson,
        usersData: users,
    })

    let { data } = state;

    function newComment(e, id) { 
        e.preventDefault();
        const {comment} = e.target;
        const addComment = {
                "id": Date.now(),
                "url": "https://picsum.photos/300/300",
                "username": "jacquit",
                "comment": comment.value,
                "date": new Date().toLocaleDateString(),
            }
            const updatedList = data.map(item => {
            if (item.id === id) {
                    return {
                    ...item,
                    comments: [...item.comments, addComment]
                }
            }
            return item
        })
        dispatch({type: "UPDATE_COMMENTS_POSTS", data: updatedList})
        e.target.reset();
    }
    
    function handleNewPost(e) {
        e.preventDefault();
        const el = e.target;
        const {text, url} = el;
        const newPost = {
            "id": Date.now(),
            "username": "Franccois",
            "date": Date.now(),
            "description": text.value,
            "url": url.value,
            "like": "", 
            "comments": []
        };
        dispatch({type: "ADD_NEW_POST", newPost: newPost})
        e.target.reset();
        console.log(data);
    }
    
    return(
        <Context.Provider 
            value={{
                state,
                dispatch,
                newComment,
                handleNewPost
            }}>
                {children}
        </Context.Provider>)}
export  { ContextProvider, Context }
