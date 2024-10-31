import React from "react";

function Boo({cedo}) {
    return (
        <>
        {cedo ? <p>Bom dia</p> : <p>Boa noite</p>}
        </>
    )
}

export default Boo