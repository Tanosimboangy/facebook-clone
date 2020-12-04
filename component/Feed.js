import React, { useContext } from 'react';
import { Context } from "./context";   

function Feed() {
    const { state, newComment } = useContext(Context);
    let { data } = state;
    
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
                            <li><p>{item.description}</p></li>
                            <li><img src={item.url} /></li>
                            <li>
                                <ul>
                                    <li><button type="button">Like</button></li>
                                    <li>{item.like}</li>
                                </ul>
                            </li>
                        </ul>
                        {item.comments.map(items => {
                            return (
                                <ul key={items.id}>
                                    <li>
                                        <ul>
                                            <li><img src={items.url} /></li>
                                            <li>{items.username}</li>
                                            <li>{items.date}</li>
                                        </ul>
                                    </li>
                                    <li>{items.comment}</li>
                                </ul>
                            )
                        })}
                        <form onSubmit={e => newComment(e, item.id)}>
                            <input type="text" name="comment"  required/>
                            <button type="submit">Post</button>
                        </form>
                    </article>
                )
            })}
        </div>
    )
}

export default Feed
