import React from 'react';
// Libraries
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Style
import './css/general.css';
import './css/App.css';
// Content
import NavBar from './components/NavBar/NavBar';
import HomePath from './paths/HomePath';

function App() {
    return (
        <Router>
            <section>
                <NavBar/>
                <Switch>
                    <Route path="/" exact component={HomePath}/>
                </Switch>
            </section>
        </Router>
    );
}

export default App;
