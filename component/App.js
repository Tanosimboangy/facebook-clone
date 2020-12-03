import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Feed from '../component/Feed';
import AddPost from '../component/AddPost';
import Username from '../component/Username';
import Menu from '../component/Menu';

function App() {
    return (
        <div>
            <Menu />
            <Switch>
                <Route exact path="/"><Feed /></Route>
                <Route path="/addPost"><AddPost /></Route>
                <Route path="/username"><Username /></Route>
            </Switch>
        </div>
    )
}
export default App;