import React from 'react'
// Libraries
import { useParams } from 'react-router-dom';

export default function ProjectPage() {

    const Params = () => {
        let { id } = useParams();

        return(
            <span>{id.replace("-", " ")}</span>
        )
    }

    return (
        <article>
            <aside className="flex space-between align-center">
                <span className="title"><Params/></span>
            </aside>
        </article>
    )
}
