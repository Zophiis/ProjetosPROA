import React from "react";

function Botao(props) {
    return (
        <>
            <button>
                {props.logado ? 'Sair' : 'Entrar'}
            </button>
        </>
    )
}

export default Botao