import React, { useState } from 'react';
// Libraries
import { Link } from 'react-router-dom';
// Content
import ProjectList from '../../database/Projects.json'

export default function Panel() {

    const [Project, setProject] = useState(false);

    const changeProjectState = () => setProject(!Project);

    function MyProyect() {
        if (Project === true) {
            return(
                <aside>
                    {ProjectList.map(project => {
                        return (
                            <aside key={project.name}>
                                <Link to={`/projects/name/${project.name.replace(/ /g, "-")}`} className="link">
                                    <div className="button">
                                        {project.name}
                                    </div>
                                </Link>
                            </aside>
                        )
                    })}
                    <Link to="/projects/all" className="link">
                        <div>Ver todo</div>
                    </Link>
                </aside>

            )
        } else {
            return null
        }
    }


    return (
        <div id="panel">
            <Link to="/" className="link">
                <div>Inicio</div>
            </Link>
            <Link to="/dashboard" className="link">
                <div>Dashboard</div>
            </Link>
            <div className="button" onClick={changeProjectState}>Mis proyectos</div>
            {<MyProyect/>}
            <Link to="/settings" className="link">
                <div>Ajustes</div>
            </Link>
        </div>
    )
}
