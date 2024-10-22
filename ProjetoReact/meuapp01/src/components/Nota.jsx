import React from 'react'

function Nota(props) {
    if (props.avaliacao >= 90) {
        return <p>Excelente!!</p>
    } else if (props.avaliacao >= 70 && props.avaliacao < 90) {
        return <p>Bom</p>
    } else {
        return <p> Precisa melhorar</p>
    }
}

export default Nota