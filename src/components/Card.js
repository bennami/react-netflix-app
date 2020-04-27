import React, { useState, useEffect } from 'react';
import useCollapse from 'react-collapsed';

function Card (props) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
        collapsedHeight: 50
    });

    return (
        <article className="column">
            <div className="card">
                <h1>{props.title}</h1>
                <img src={`https://image.tmdb.org/t/p/w200/${props.poster_path}`}/>
                <div className="description">
                    <p {...getCollapseProps()}>{props.overview}
                    </p>
                    <a {...getToggleProps()}>
                        {isExpanded ? 'Hide' : 'Read more'}
                    </a>
                    <p>Vote average: {props.vote_average}</p>
                </div>
            </div>
        </article>
    )
}

export default Card;