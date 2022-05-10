import React from 'react';

const Titulo = ({ welcome, name }) => {
    return(
        <div>
            <h1>{welcome}</h1>
            <p>{name}</p>
        </div>
    )
}

export { Titulo }