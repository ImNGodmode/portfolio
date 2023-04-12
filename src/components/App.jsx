import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import About from './About'
import Landing from './Landing'
import {Routes, Route} from 'react-router-dom'
import Resume from './Resume'
import Projects from './Projects'
import Codeblog from './Codeblog'

function App() {
  return (
    <div className='App'>
        <Navbar/>
                
        <Routes>
            <Route path="/portfolio" element={<Landing/>} />
            <Route path="/AboutMe" element={<About/>} />
            <Route path="/Resume" element={<Resume/>} />
            <Route path="/Projects" element={<Projects/>} />
            <Route path="/CodeBlog" element={<Codeblog/>} />
            {/* <Route path="/games" element={<Store foundGame={foundGame} setFoundGame={setFoundGame} cart={cart} setCart={setCart} searchGame={searchGame} rFoundGame={rFoundGame}/>} /> */}
          </Routes>

        <Footer/>
        
    </div>
  )
}

export default App