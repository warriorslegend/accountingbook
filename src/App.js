import React from 'react';
// Libraries
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Style
import './css/general.css';
import './css/App.css';
// Content
import NavBar from './components/NavBar/NavBar';
import Panel from './components/Home/Panel'
import Dashboard from './components/Home/Dashboard'
import Footer from './components/Footer/Footer'

function App() {
    return (
        <Router>
            <section>
                <NavBar/>
                <Switch>
                    <article className="flex row">
                        <Panel/>
                        <Route path="/" exact component={Dashboard}/>
                    </article>  
                </Switch>
                <Footer/>
            </section>
        </Router>
    );
}

export default App;
