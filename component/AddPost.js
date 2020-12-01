import React, {useState, useEffect, useRef, useContext} from 'react';
import { Context } from "./context";

function AddPost() {
    const { data } = useContext(Context);
    const [textvalue, setTextvalue] = useState("");
    const [url, setUrl] = useState("");
    let focusRef = useRef(null);

    function handleNewPost(e) {
        e.preventDefault();
        const el = e.target.value;
        setTextvalue(el);
        setUrl(el);
        console.log(textvalue);
        console.log(url);

        const newPost = {
            id: Date.now(),
            comments: textvalue,
            url: url,
        };
        data.push(newPost);
        setTextvalue(" ");
        setUrl(" ");
    }
    
    useEffect(() => {
		focusRef.current.focus()
	}, [])

    return (
        <form onSubmit={handleNewPost} className="add_post">
            <label htmlFor="text">New post:</label>
            <textarea ref={focusRef} value={textvalue} onChange={e => setTextvalue(e.currentTarget.value)} id="text" cols="35" rows="10" required/>
            <label htmlFor="url">Picture  url: <input value={url} onChange={e => setUrl(e.currentTarget.value)} id="url" type="url" required/>
            </label>
            <button type="submit">Post</button>
        </form>
    )
}

export default AddPost
