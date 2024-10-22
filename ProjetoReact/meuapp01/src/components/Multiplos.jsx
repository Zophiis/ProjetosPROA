import React from "react";

function Multiplos(props){
    return ( <h1> {props.nivel === 'iniciante' ? "Bem vinde, Iniciante!" : props.nivel === "intermediário" ? "Tu está progredindo" : props.nivel === "avançado" ? "Parabéns, especialista!!" : "Nível não recohecido"} </h1> )
}

export default Multiplos