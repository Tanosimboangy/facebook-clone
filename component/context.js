import React, { useReducer } from 'react';
import dataJson from "../data.json";
const Context = React.createContext();

function fetchReducer(data, action) {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'GETTING_DATA':{
                return dataJson;
            }
            case "ADD_COMMENTS": {
                return {...state, item: action.comment};
            }
            default: {
                return state;
            }
        }
    }, {
        state: [],
        comment: '',
    })
    return [state, dispatch]
}

function newComment(e, id) { 
    console.log(id);
    e.preventDefault();
    const el = e.target;
    console.log(e.target);
    const addComment = {
        "comment": el.comment.value,
        "id": Date.now(),
        "date": Date.now(),
    }
    console.log(addComment);
     dataJson.map(item => {
         console.log(item.id);
        if (item.id === id) {
            console.log(item.comments);
            return {
                ...item,
                comments: item.comments.push(addComment)
            }
        }
        return item,
        console.log(item.id),
        console.log(item.comments)
    })
    dispatch({type: "ADD_COMMENTS", updatedComment: item})
    e.target.comment.value="";
}

function ContextProvider({children}) {
    const [data, dispatch] = useReducer(fetchReducer, dataJson);
    return(
        <Context.Provider 
            value={{
                data, 
                newComment, 
                dispatch}}
                >
                {children}
        </Context.Provider>)}
export  { ContextProvider, Context }
// new Date().toLocaleDateString()