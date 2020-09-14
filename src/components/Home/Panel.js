import React, { useState } from 'react';
// Libraries
import { Link } from 'react-router-dom';
import { AccountTreeOutlined, HomeOutlined, SettingsOutlined, ShowChartOutlined } from '@material-ui/icons'
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
                                    <div className="button button-white">
                                        {project.name}
                                    </div>
                                </Link>
                            </aside>
                        )
                    })}
                    <Link to="/projects/all" className="link">
                        <div className="button button-white">Ver todo</div>
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
                <div className="button button-white">
                    <HomeOutlined className="icon"/>
                    Inicio
                </div>
            </Link>
            <Link to="/dashboard" className="link">
                <div className="button button-white">
                    <ShowChartOutlined className="icon"/>
                    Dashboard
                </div>
            </Link>
            <div className="button button-white" onClick={changeProjectState}>
                <AccountTreeOutlined className="icon"/>
                Mis proyectos
            </div>
            {<MyProyect/>}
            <Link to="/settings" className="link">
                <div className="button button-white"><SettingsOutlined className="icon"/> Ajustes</div>
            </Link>
        </div>
    )
}
