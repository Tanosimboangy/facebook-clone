import React, { useContext } from 'react';
import { Context } from "./context";
import styled from 'styled-components';

const ListOfPost = styled.ul`
    padding: 16px;
    max-width: 201px;
    li {
        padding-bottom: 16px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`

function Feed() {
    const { data } = useContext(Context);
    const { likeBtn } = useContext(Context);
    return (
        <div className="feed_container">
            {data.map(item => {
                return (
                    <ListOfPost key={item.id}>
                        <li>{item.username} {item.date}</li>
                        <li><img src={item.url} /></li>
                        <li><button type="button" onClick={() => likeBtn(item.id)}>Like</button> {item.like}</li>
                    </ListOfPost>
                )
            })}
        </div>
    )
}

export default Feed
