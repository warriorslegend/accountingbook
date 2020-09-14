import React from 'react';
// Content
import Panel from '../components/Home/Panel';
import Dashboard from '../components/Home/Dashboard';

export default function HomePath() {
    return (
        <article className="flex row">
            <Panel/>
            <Dashboard/>
        </article>
    );
}
