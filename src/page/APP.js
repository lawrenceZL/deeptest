import React from 'react';
import {Route} from 'react-router-dom'
import HomePage from '../containers/home/home_page'
import Tweakers from '../components/tweakers/tweakers'

function App() {
    return (
        <div>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/tweakers" component={Tweakers}/>
        </div>
    );
}

export default App;
