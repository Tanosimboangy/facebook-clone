import React, { useState, useEffect, useReducer } from 'react';
import dataJson from "../data.json";
const Context = React.createContext();

function ContextProvider({children}) {
    const [textvalue, setTextvalue] = useState("");
    const [url, setUrl] = useState("");
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'GETTING_DATA':{
                return {...state, data: state.data = action.data};
            }
            case 'NEW_COMMENTS':{
                return {...state, data: state.comments = action.addNewComments}
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
            "date": Date.now(),
        }
        console.log(addComment);
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
        console.log(updatedList);
    }
    
    return(
        <Context.Provider 
            value={{
                data,
                textvalue,
                setTextvalue,
                setUrl,
                newComment,
                url,
                dispatch,
            }}>
                {children}
        </Context.Provider>)}

export  { ContextProvider, Context }

// new Date().toLocaleDateString()
// function handleNewPost(e) {
//     e.preventDefault();
//     const el = e.target.value;
//     setTextvalue(el);
//     setUrl(el);

//     const newPost = {
//         id: Date.now(),
//         comments: textvalue,
//         url: url,
//     };
//     console.log(newPost);
//     data.push(newPost);
//     setTextvalue(" ");
//     setUrl(" ");
// }