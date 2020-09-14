import React, { useState } from 'react';
// Libraries
import { Link } from 'react-router-dom';
import { Popover } from '@material-ui/core';
import { AccountCircleOutlined, AddRounded } from '@material-ui/icons';

export default function NavBar() {

    const [CreateAProjectState, setCreateAProjectState] = useState(null);

    const handleClick = (event) => {
        setCreateAProjectState(event.currentTarget);
    };

    const handleClose = () => {
        setCreateAProjectState(null);
    };

    const open = Boolean(CreateAProjectState);
    const id = open ? 'simple-popover' : undefined;

    return (
        <nav className="flex space-between align-center">
            <aside>
                <Link to="/" className="link">
                    <img src="" alt="Project 7"/>
                </Link>
            </aside>
            <aside className="flex align-center">
                <aside
                    className="button button-blue border radius-6px margin-right-1em"
                    onClick={handleClick}
                >
                    Crea un proyecto
                </aside>
                {CreateAProject(id, open, CreateAProjectState, handleClose)}
                <Link to="/account" className="link">
                    <div className="button">
                        <AccountCircleOutlined className="icon"/>
                        Cuenta
                    </div>
                </Link>
            </aside>
        </nav>
    )
}

function CreateAProject(id, open, CreateAProjectState, handleClose) {
    return <Popover
        id={id}
        open={open}
        anchorEl={CreateAProjectState}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
    >
        <aside className="padding-1em button button-white">
            <AddRounded className="icon"/>
            <span>Nuevo Proyecto</span>
        </aside>
    </Popover>;
}

