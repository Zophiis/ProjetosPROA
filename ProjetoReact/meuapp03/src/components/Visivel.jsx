import React from "react";
import './Visivel.css'
function Visible({isVisible}){
    return (
        <div className={isVisible ? 'escuro' : null}>
        {isVisible ? <p>um parágrafo bem bolado.</p> : null}
        </div>
    )
}

export default Visible