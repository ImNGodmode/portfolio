import React from 'react';
import {Link, useNavigate} from 'react-router-dom';



function Navbar() {
  
  const navigate =useNavigate();
  const goToLanding = (() => {
    navigate('/');
  });

  return (
    <div className='NavContainer'>
      <div className='logoContainer'>
        <img src='https://media.licdn.com/dms/image/D4E03AQFZpLsWcsPsww/profile-displayphoto-shrink_100_100/0/1670349694377?e=1686182400&v=beta&t=OhDDgpufIJy0CT9wZDBlwOH7nMXSkHwd-MNaEDBVXaY' alt='' className='logo' onClick={goToLanding} />
      </div>
      <div className='tabsContainer'>
      <Link to="/AboutMe" className='tab'>About Me</Link>
      <Link to="/Resume" className='tab'>Resume</Link>
      <Link to="/Projects" className='tab'>Projects</Link>
      </div>
      <div className='contactContainer'>
        <div>Lets Connect!</div>
        <div className='contacts'>
          <div className='email'>Email: Blake.James.dev@gmail.com</div>
          <div className='socialMedia'>
            <a href='https://www.linkedin.com/in/blakejames89'>Linkedin</a>
            <a href='https://github.com/ImNGodmode'>Github</a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar