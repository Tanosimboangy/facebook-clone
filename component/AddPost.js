import React, { useEffect, useRef, useContext} from 'react';
import { Context } from "./context";

function AddPost() {
    const { handleNewPost } = useContext(Context);
    let focusRef = useRef(null)
    
    useEffect(() => {
		focusRef.current.focus()
	}, [])

    return (
        <form onSubmit={handleNewPost} className="add_post">
            <label htmlFor="text">New post:</label>
            <textarea ref={focusRef} name="text" id="text" cols="35" rows="10" required/>
            <label htmlFor="url">Picture  url: <input name="url" id="url" type="url" required/>
            </label>
            <button type="submit">Post</button>
        </form>
    )
}

export default AddPost
