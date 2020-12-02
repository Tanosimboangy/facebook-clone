import React, { useEffect, useReducer } from 'react';
import dataJson from "../data.json";
const Context = React.createContext();

function ContextProvider({children}) {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'GETTING_DATA':{
                return {...state, data:  action.data};
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
            "like": "", 
            "comments": []
        };
        dispatch({type: "GETTING_DATA", data: [...data, newPost]})
        e.target.reset();
        console.log(data);
    }

    return(
        <Context.Provider 
            value={{
                data,
                newComment,
                dispatch,
                handleNewPost,
                state
            }}>
                {children}
        </Context.Provider>)}

export  { ContextProvider, Context }

