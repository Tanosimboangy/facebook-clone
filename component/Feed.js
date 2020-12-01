import React, { useContext } from 'react';
import { Context } from "./context";   

function Feed() {
    const { data } = useContext(Context);

    function increments(itemId) {
        const newList = data.map(item => {
            if (item.id === itemId) {
                return {
                    ...item,
                    like: item.like + 1,
                }
            }
            return item;
        });
        setAllSongs(newList);
    }
    
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
                                    <li>{item.description}</li>
                                </ul>
                            )
                        })}
                        <form onSubmit={e => newComment(e, id)}>
                            <input type="text" name="newComment"/>
                            <button type="submit">Post</button>
                        </form>
                    </article>
                )
            })}
        </div>
    )
}

export default Feed
