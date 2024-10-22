import React from "react"

function Autenticacao ({autenticado}){
    if (autenticado){
        return (
            <>
            <h2>Bem vinde, usuário!</h2>
            </>
        )
    } else{
        return null;
    }
}

export default Autenticacao;