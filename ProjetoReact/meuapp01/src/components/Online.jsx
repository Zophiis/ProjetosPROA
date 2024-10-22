import React from "react";

function Online(props){
    return( <h1 > {props.conexao ? "Usuário online" : "Usuário offline"} </h1>)
}

export default Online