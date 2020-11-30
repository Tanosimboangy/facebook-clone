import React, { useContext } from 'react';
import { Context } from "./context";
import styled from 'styled-components';

// box-shadow: 2px 2px 10px black;
// border-radius: 12px;
    

function Feed() {
    const { data } = useContext(Context);
    const { likeBtn } = useContext(Context);
    return (
        <div className="feed_container">
            {data.map(item => {
                return (
                    <article className="article_post" key={item.id}>
                        <ul>
                            <li>
                                <ul>
                                    <li><img src={item.url}/></li>
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
                        </ul>
                        {/* <form>
                            
                        </form> */}
                    </article>
                )
            })}
        </div>
    )
}

export default Feed
