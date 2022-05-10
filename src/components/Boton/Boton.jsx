import React from 'react';

const Boton = ({ handleClick, texto, styles }) => {
    return(
        <button style={styles} onClick={handleClick}>{texto}</button>
    )
}

export { Boton }