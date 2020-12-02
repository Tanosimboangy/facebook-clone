import React, { useState, useEffect, useReducer } from 'react';
import dataJson from "../data.json";
const Context = React.createContext();

function ContextProvider({children}) {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'GETTING_DATA':{
                return {...state, data: state.data = action.data};
            }
            case 'NEW_COMMENTS':{
                return {...state, data: state.comments = action.addNewComments}
            }
            case 'NEW_POST':{
                return {...state, data: action.addNewPost}
            }
            default: {
                return state;
            }
        }
    }, {
        data: [],
    })

    let{ data }= state;
    if (!data) {
        return null;
    }
    useEffect(() => {
        dispatch({type:"GETTING_DATA", data: dataJson});
    }, [])

    function newComment(e, id) { 
        e.preventDefault();
        const el = e.target;
        const {comment} = el;
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
        dispatch({type: "GETTING_DATA", data: updatedList})
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
            "like": 0, 
        };
        const newData = data.push(newPost)
        dispatch({type: "GETTING_DATA", data: newData})
        console.log(data);
        e.target.reset();

    }
    // new Date().toLocaleDateString()
    return(
        <Context.Provider 
            value={{
                data,
                newComment,
                dispatch,
                handleNewPost,
            }}>
                {children}
        </Context.Provider>)}

export  { ContextProvider, Context }

