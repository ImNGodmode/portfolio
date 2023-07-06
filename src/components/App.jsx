import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import About from './About'
import Landing from './Landing'
import {Routes, Route} from 'react-router-dom'
import Resume from './Resume'
import Projects from './Projects'
import Codeproblems from './Codeproblems'
import Featureproject1 from './Featureproject1'
import Featureproject2 from './Featureproject2'
import Featureproject3 from './Featureproject3'

function App() {
  return (
    <div className='App'>
        <Navbar/>
                
        <Routes>
            <Route path="/portfolio" element={<Landing/>} />
            <Route path="/AboutMe" element={<About/>} />
            <Route path="/Resume" element={<Resume/>} />
            <Route path="/Projects" element={<Projects/>} />
            <Route path="/CodeProblems" element={<Codeproblems/>} />
            <Route path="/Featureproject1" element={<Featureproject1/>} />
            <Route path="/Featureproject2" element={<Featureproject2/>} />
            <Route path="/Featureproject3" element={<Featureproject3/>} />
            
          </Routes>

        <Footer/>
        
    </div>
  )
}

export default App