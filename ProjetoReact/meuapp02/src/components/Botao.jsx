import React from "react"

function Botao(props) {
    return (
        <>
        <a href={props.url}>
        <button>{props.button}</button>
        </a>
        </>
    )

}

export default Botao