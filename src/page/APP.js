import React from 'react';
import {Route} from 'react-router-dom'
import HomePage from '../components/home/home_page'

function App() {
    return (
        <div>
            <Route exact path="/" component={HomePage}/>
        </div>
    );
}

export default App;
