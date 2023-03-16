import './App.css'
import Random from './Components/Random'
import logo from './assets/img/logo.svg'


function App() {


  return (
    <div className="App">
      <header >
        <div className='header-logo'>
          <img className='logo' src={logo} alt="" />
        </div>
      </header>
      <Random/>    
    </div>
  )
}

export default App
