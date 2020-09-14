import React, { useState } from 'react';
// Libraries
import { NavLink } from 'react-router-dom';
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
                                <NavLink to={`/projects/name/${project.name.replace(/ /g, "-")}`} className="link" activeClassName="link-active">
                                    <div className="button button-white">
                                        {project.name}
                                    </div>
                                </NavLink>
                            </aside>
                        )
                    })}
                    <NavLink to="/projects/all" className="link" activeClassName="link-active">
                        <div className="button button-white">Ver todo</div>
                    </NavLink>
                </aside>

            )
        } else {
            return null
        }
    }


    return (
        <div id="panel">
            <NavLink to="/" exact className="link" activeClassName="link-active">
                <div className="button button-white">
                    <HomeOutlined className="icon"/>
                    Inicio
                </div>
            </NavLink>
            <NavLink to="/dashboard" className="link" activeClassName="link-active">
                <div className="button button-white">
                    <ShowChartOutlined className="icon"/>
                    Dashboard
                </div>
            </NavLink>
            <div className="button button-white" onClick={changeProjectState}>
                <AccountTreeOutlined className="icon"/>
                Mis proyectos
            </div>
            {<MyProyect/>}
            <NavLink to="/settings" className="link" activeClassName="link-active">
                <div className="button button-white"><SettingsOutlined className="icon"/> Ajustes</div>
            </NavLink>
        </div>
    )
}
