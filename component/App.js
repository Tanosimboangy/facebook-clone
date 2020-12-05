import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Feed from '../component/Feed';
import AddPost from '../component/AddPost';
import Username from '../component/Username';
import Menu from '../component/Menu';

function App() {
    return (
        <div>
            <h1>My Facebook App</h1>
            <Menu />
            <Switch>
                <Route exact path="/">
                    <Feed />
                </Route>
                <Route path="/addPost">
                    <AddPost />
                </Route>
                <Route path="/options">
                    <Username />
                </Route>
            </Switch>
        </div>
    )
}
export default App;
