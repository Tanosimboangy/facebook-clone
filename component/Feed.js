import React, { useContext } from 'react';
import { Context } from "./context";   

function Feed() {
    const { data, dispatch } = useContext(Context);

    // function handleSubmit(e) {
    //     console.log(e.parentElement);
    // }   
    
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
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => {
                                    dispatch({type: 'ON_CHANGE', name: e.target.value})
                                }}
                            />
                        </form>
                    </article>
                )
            })}
        </div>
    )
}

export default Feed
