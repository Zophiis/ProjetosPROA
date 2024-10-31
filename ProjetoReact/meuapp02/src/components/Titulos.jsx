import React from "react";
import './Titulos.css'

function Titulos(props){
    return(
        <>
        <h1>{props.titulo}</h1>
        <h2>{props.subtitulo}</h2>
        </>
    )
}
export default Titulos