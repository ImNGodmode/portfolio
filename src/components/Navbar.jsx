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
      <div className='tabsContainer'>
        <div className='dropdown'>
          <button className='dropbtn'>MENU</button>
          <div className='dropContent'>
          <Link to="/AboutMe" className='tab'>About Me</Link>
          <Link to="/Resume" className='tab'>Resume</Link>
          <Link to="/Projects" className='tab'>Projects</Link>
          <Link to="/CodeProblems" className='tab'>Code Problems</Link>
          </div>
        </div>
      </div>
      <div className='contactContainer'>
        <div>Lets Connect!</div>
        <div className='contacts'>
          <div className='email'>Email: Blake.James.dev@gmail.com</div>
          <div className='socialMedia'>
            <a href='https://www.linkedin.com/in/blakejames89' className='tab' target="_blank" rel='noreferrer'>Linkedin</a>
            <a href='https://github.com/blakejamesdev'className='tab' target="_blank" rel='noreferrer'>Github</a>
            <a href='https://leetcode.com/ImNGodmode/' className='tab' target="_blank" rel='noreferrer'>LeetCode</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar