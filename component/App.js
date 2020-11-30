import React from 'react'
import { Link, Switch, Route } from 'react-router-dom';
import Feed from '../component/Feed';
import AddPost from '../component/AddPost';
import Username from '../component/Username';

function App() {
    return (
        <div>
            <h1>ONJA FACEBOOK</h1>
            <ul>
                <li><h2><Link to="/">Feed</Link></h2></li>
                <li><h2><Link to="/addPost">Add a post</Link></h2></li>
                <li><h2><Link to="username">Username</Link></h2></li>
            </ul>
            <Switch>
                <Route exact path="/">
                    <Feed />
                </Route>
                <Route exact path="/addPost">
                    <AddPost />
                </Route>
                <Route exact path="/username">
                    <Username />
                </Route>
            </Switch>
        </div>
    )
}

export default App
