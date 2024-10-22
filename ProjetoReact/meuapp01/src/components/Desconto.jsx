import React from 'react'

const Desconto=({temDesconto}) => {
    return ( <h1>{temDesconto ? "Desconto aplicado": "Não há desconto"}</h1>)
}

export default Desconto