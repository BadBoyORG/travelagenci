import './App.css'

import Navbar from './components/layout/Navbar'

import Home from './components/pages/Home'
import Tour from './components/pages/Tour'
import Watch from './components/pages/Watch'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Tour />
      <Watch />
    </>
  )
}

export default App
