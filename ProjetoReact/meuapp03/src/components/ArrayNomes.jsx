import React from "react";

function Nomes (){
    const Nome=['Alex','Noah','Eros','Ellie']
const listaNomes=Nome.map(
  (n, i)=> //index e função key geram uma identificação p/ cada elemento
    <li key={i}>{n}</li>
)
    return(
        <ul>{listaNomes}</ul>
    )
}
export default Nomes
