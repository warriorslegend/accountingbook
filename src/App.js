import React from 'react';
// Libraries
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Style
import './css/general.css';
import './css/App.css';
// Content
import NavBar from './components/NavBar/NavBar';
import Panel from './components/Home/Panel'
import Home from './components/Home/Home'
import Dashboard from './components/Home/Dashboard'
import ProjectPage from './components/Projects/ProjectPage'
import MyProjects from './components/Projects/MyProjects'
import Settings from './components/Home/Settings'
import Account from './components/Account/Account'
import ContactUs from './components/Contact/ContactUs'
import NotFound from './components/NotFound/NotFound'
import Footer from './components/Footer/Footer'

function App() {
    return (
        <Router>
            <NavBar/>
            <section className="flex row">
                <Panel/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/projects/name/:id" children={ProjectPage}/>
                    <Route path="/projects/all" component={MyProjects}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/account" component={Account}/>
                    <Route path="/contact" component={ContactUs}/>
                    <Route path="" component={NotFound}/>
                </Switch>
            </section>
            <Footer/>
        </Router>
    );
}

export default App;
