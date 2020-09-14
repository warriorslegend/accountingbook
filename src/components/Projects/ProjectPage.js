import React from 'react'
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
            <span className="title"><Params/></span>
        </article>
    )
}
