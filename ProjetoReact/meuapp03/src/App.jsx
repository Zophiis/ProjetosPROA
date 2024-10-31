import './App.css'
import Nomes from './components/ArrayNomes'
import Heranca from './components/Heranca'
import Tabela from './components/Tabela'
import Visible from './components/Visivel'


function App() {
  return (
    <>
      <Nomes/>
      <Heranca/>
      <Visible isVisible={true}/>
      <Tabela/>
    </>
  )
}

export default App
