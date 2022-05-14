import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import Home from './components/pages/Home'
import Tour from './components/pages/Tour'
import Watch from './components/pages/Watch'
import About from './components/pages/About'
import Blog from './components/pages/Blog'
import News from './components/pages/News'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Tour />
      <Watch />
      <About />
      <Blog />
      <News />
      <Footer />
    </>
  )
}

export default App
