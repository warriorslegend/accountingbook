import React from 'react';
// Style
import './css/general.css';
import './css/App.css';
// Content
import NavBar from './components/NavBar/NavBar';
import HomePath from './paths/HomePath'

function App() {
    return (
        <section>
            <NavBar/>
            <HomePath/>
        </section>
    );
}

export default App;
