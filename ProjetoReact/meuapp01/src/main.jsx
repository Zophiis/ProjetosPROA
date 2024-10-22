import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Bemvinde from './components/Bemvinde.jsx'
import Saudacao from './components/Saudacao.jsx'
import Autenticacao from './components/Autorizacao.jsx'
// import App from './App.jsx'
import MaiorIdade from './components/Idade.jsx'
import Estudante from './components/Estudante.jsx'
import Nota from './components/Nota.jsx'
import Desconto from './components/Desconto.jsx'
import Online from './components/Online.jsx'
import Multiplos from './components/Multiplos.jsx'
import Botao from './components/Login.jsx'

const usuarioAutenticado = true;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Bemvinde />
    <Saudacao nome="Jaja"/>
    <Autenticacao autenticado={usuarioAutenticado}/>
    <MaiorIdade idade={18}/>
    <Estudante autorizacao={true}/>
    <Nota avaliacao={91}/>
    <Desconto temDesconto={true}/>
    <Online conexao={true}/>
    <Multiplos nivel='avançado'/>
    <Botao logado={true}/>
    <br/>
    <Botao logado={false}/>
  </StrictMode>
)