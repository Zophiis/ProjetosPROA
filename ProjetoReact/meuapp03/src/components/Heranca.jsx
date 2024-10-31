import React from "react";
import Cria from "./Herdeiro";

function Heranca(){
    const mensagemEnviada = 'Olá de su ancestral!'

    return (
        <>
        <h2>Componente superior</h2>
        <Cria mensagem={mensagemEnviada}/>
        </>
    )
}

export default Heranca