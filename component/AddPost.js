import React, {useState, useContext} from 'react';
// import styled from 'styled-components';
import { Context } from "./context";


function AddPost() {
    const { setData } = useContext(Context);

    const [textvalue, setTextvalue] = useState("");
    const [url, setUrl] = useState("");

    function handleNewPost(e) {
        e.preventDefault();
        const el = e.target.value;
        setTextvalue(el);
        setUrl(el);

        const newPost = {
            id: Date.now(),
            // username: username,
            // date: Date.now(),
            comments: textvalue,
            url: url,
            // like,
        };
        setData(newPost);
        setTextvalue(" ");
        setUrl(" ");
    }
    

    return (
        <form onSubmit={handleNewPost}>
            <label htmlFor="text">New post:</label>
            <textarea value={textvalue} onChange={e => setTextvalue(e.currentTarget.value)} id="text" cols="35" rows="10" required/>
            <label htmlFor="url">Picture  url:</label>
            <input value={url} onChange={e => setUrl(e.currentTarget.value)} id="url" type="url" required/>
            <button type="submit">Post</button>
        </form>
    )
}

export default AddPost
