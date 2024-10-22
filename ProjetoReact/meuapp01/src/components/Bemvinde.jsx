import React from 'react'
import enbyDuck from './enbyDuck.png'
import './Bemvinde.css'

function Bemvinde() {
    return (
    <>
    <h1> Olá! Seja <span className="bemVinde"> bem vinde </span> a lista 01 de React!! </h1>
    <h1 id="head">Onde seu sofrimento está apenas começando.</h1>
    <img id="enbyDuck" src={enbyDuck} alt="Imagem da bandeira LGBTQIAPN+ " />
    </>
    )
}

export default Bemvinde