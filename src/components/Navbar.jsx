import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

function Navbar() {
  
  const navigate =useNavigate();
  const goToLanding = (() => {
    navigate('/portfolio');
  });

  return (
    <div className='NavContainer'>
      <div className='logoContainer'>
        <img src={process.env.PUBLIC_URL + '/headshotEdit.png'} alt=''  className= 'logo' onClick={goToLanding}/>
      </div>
      
        
          <div className='dropdown'>
            <button className='dropbtn'>MENU</button>
            <div className='dropContent'>
              <Link to="/AboutMe" className='tab'>About Me</Link>
              <Link to="/Resume" className='tab'>Resume</Link>
              <Link to="/Projects" className='tab'>Projects</Link>
              <Link to="/CodeProblems" className='tab'>Code Problems</Link>
            </div>
          </div>
        
        
          <div className='dropdown'>
            <button className='dropbtn'>Lets Connect!</button>
            <div className='dropContent'>
                <a href='mailto:blake.james.dev@gmail.com' className='tab' target='_blank' rel='noreferrer'>Email</a>
                <a href='https://www.linkedin.com/in/blakejames89' className='tab' target="_blank" rel='noreferrer'>Linkedin</a>
                <a href='https://github.com/blakejamesdev'className='tab' target="_blank" rel='noreferrer'>Github</a>
                <a href='https://leetcode.com/ImNGodmode/' className='tab' target="_blank" rel='noreferrer'>LeetCode</a>
              </div>
            </div>
          
        </div>
      
   
  )
}

export default Navbar