import React, {useState, useContext} from 'react';
// import styled from 'styled-components';
import { Context } from "./context";


function AddPost() {
    const { data, setData } = useContext(Context);

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
        data(newPost);
        setTextvalue(" ");
        setUrl(" ");
    }
    

    return (
        <form onSubmit={handleNewPost} className="add_post">
            <label htmlFor="text">New post:</label>
            <textarea value={textvalue} onChange={e => setTextvalue(e.currentTarget.value)} id="text" cols="35" rows="10" required/>
            <label htmlFor="url">Picture  url: <input value={url} onChange={e => setUrl(e.currentTarget.value)} id="url" type="url" required/>
            </label>
            <button type="submit">Post</button>
        </form>
    )
}

export default AddPost
