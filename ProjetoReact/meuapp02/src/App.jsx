import './App.css'
import Botao from './components/Botao'
import Comm from './components/Comment'
import Boo from './components/Condicional'
import DivEstilo from './components/Estilo'
import Fragmentos from './components/Fragmentos'
import Imagem from './components/Imagem'
import Redireciona from './components/Link'
import Lista from './components/Lista'
import Paragrafo from './components/Paragrafo'
import OlaMundo from './components/TextoSimples'
import Titulos from './components/Titulos'

function App() {

  return (
    <>
      <OlaMundo />
      <Paragrafo paragrafo="Somente a dor coletiva gera união. - Jailson " />
      <Lista />
      <Imagem url="https://br.pinterest.com/pin/19844054603709314/" /> <br />{/*link quebrando, independente do modo de exportação */}
      <br />
      <Botao url="https://br.pinterest.com/pin/492649953196105/" button="Clique AQUI" />
      <br />
      <br />
      <Redireciona />
      <Titulos titulo='Inteligência Artificial' subtitulo="Ferramenta utilizada de forma inadequada tem sido usada para roubo propriedade intelectual de artistas."></Titulos>
      <Boo cedo ={false}/>
      <DivEstilo/>
      <Fragmentos/>
      <Comm/>
    </>
  )
}

export default App
