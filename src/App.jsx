import './App.css'

import Home from './pages/Home'
import Services from './pages/Services'
import Developer from './pages/Developer'

import Menubar from './components/Menubar'


  function App() {
    return (
      <div className="App">
        <Menubar />
        <Home />
        <Services />
        <Developer />
      </div>
    )
  }

export default App
