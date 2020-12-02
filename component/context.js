import React, { useState,useReducer } from 'react';
import dataJson from "../data.json";
const Context = React.createContext();

function fetchReducer(data, action) {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case 'GETTING_DATA':{
                return dataJson;
            }
            // case 'ON_SUBMIT':{
            //     return (...state, data: state.data = )
            // }
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


function ContextProvider({children}) {
    const [textvalue, setTextvalue] = useState("");
    const [url, setUrl] = useState("");
    const [data, dispatch] = useReducer(fetchReducer, dataJson);

    function handleNewPost(e) {
        e.preventDefault();
        const el = e.target.value;
        setTextvalue(el);
        setUrl(el);

        const newPost = {
            id: Date.now(),
            comments: textvalue,
            url: url,
        };
        data.push(newPost);
        setTextvalue(" ");
        setUrl(" ");
    }

    return(
        <Context.Provider 
            value={{
                data, 
                handleNewPost,
                textvalue,
                setTextvalue,
                setUrl,
                url,
                dispatch}}
                >
                {children}
        </Context.Provider>)}
export  { ContextProvider, Context }
// new Date().toLocaleDateString()
// function newComment(e, id) { 
//     e.preventDefault();
//     const el = e.target;
//     console.log(el);
//     const addComment = {
//         "id": Date.now(),
//         "comment": el.comment.value,
//         "date": Date.now(),
//     }
//      dataJson.map(item => {
//          console.log(item);
//         if (item.id === id) {
//             console.log(item.comments);
//             return {
//                 ...item,
//                 comments: item.comments.push(addComment)
//             }
//         }
//         return item,
//         console.log(item)
//     })
// }
