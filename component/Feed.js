import React, { useContext } from 'react';
import { Context } from "../component/context";
import Posts from "../component/Posts";

function Feed() {
    const { state } = useContext(Context);
    const { data, usersData, currentUser, dispatch } = state;

    return <Posts 
        data={data} 
        usersData={usersData} 
        currentUser={currentUser} 
        dispatch={dispatch}
        />
}

export default Feed;