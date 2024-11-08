import reactLogo from '../assets/react.svg'
import viteLogo from '../../public/vite.svg'
import './App.css'
import ClickCounter from './ClickCounter'

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <ClickCounter title='ClickCounter TEST' _10clickMessage='You are a master in the art of clicking' mouseOn='click on me please !'/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;