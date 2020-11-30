import React from 'react'
import { Link, Switch, Route } from 'react-router-dom';
import Feed from '../component/Feed';
import AddPost from '../component/AddPost';
import Username from '../component/Username';
import styled from 'styled-components';

const List = styled.ul`
    display: flex;
    flec-direction: row;
    align-items= center;
    justify-content: space-between;
    padding-left: 16px; 
`

function App() {
    return (
        <div>
            <h1>ONJA FACEBOOK</h1>
            <List>
                <li><h2><Link to="/">Feed</Link></h2></li>
                <li><h2><Link to="/addPost">Add a post</Link></h2></li>
                <li><h2><Link to="username">Username</Link></h2></li>
            </List>
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
