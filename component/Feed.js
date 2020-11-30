import React, { useContext } from 'react';
import { Context } from "./context";
import styled from 'styled-components';

const ListOfPost = styled.ul`
    padding: 16px;
    li {
        padding-bottom: 16px;
        p {
            max-width: 201px;
        }
        ul {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            max-width: 201px;
        }
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
                        <li>
                            <ul>
                                <li>{item.username}</li>
                                <li>{item.date}</li>
                            </ul>
                        </li>
                        <li><p>{item.comments}</p></li>
                        <li><img src={item.url} /></li>
                        <li>
                            <ul>
                                <li><button type="button" onClick={() => likeBtn(item.id)}>Like</button></li>
                                <li>{item.like}</li>
                            </ul>
                        </li>
                    </ListOfPost>
                )
            })}
        </div>
    )
}

export default Feed
