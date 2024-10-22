import React from 'react'

function Estudante({autorizacao}) {
    if (autorizacao){
        return (<h3>Tu é um estudante</h3>)
    } else {
        return(<h3>Tu não é estudante</h3>)
    }
}

export default Estudante