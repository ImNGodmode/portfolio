import React from 'react'


function Projects() {
  return (
    <div className='content'>
      <div className='currentProjectContainer'>
        <h3>Current Project</h3>
        <p>Check out what I am currently working on! (right now your looking at it)</p>

      </div>
      <div className='featureContainer'>
        <h3>Featured Projects</h3>  
        <div className='projectsBox'>
          <div className='projectBox'>
            <h4>Zombie Survival Aim Trainer</h4>
            <img src={process.env.PUBLIC_URL + '/ZombieAimTrainer.png'} alt="" className='projectPic'/>
            <p>This was one of my first solo projects while I was going through bootcamp. It is a very simple game with a static character in the middle of the screen. Zombies spawn randomly at 8 predtermined locations around the screen and move toward the character. You must shoot (click on) the zombie to kill it before it reaches the character in the middle of the screen. While it is basic, and my skills have far surpassed what is shown here, it is still one of my favorite projects. At the time I coded this I had only been coding for 4 weeks, and had only worked with html, css, and JavaScript. 
            </p>
            <div className='buttonBox'>
              <div className='moreInfo'>More info</div>
              <div className='github'><a href='https://github.com/blakejamesdev/Mod1Project' target="_blank" rel='noreferrer'>Github</a></div>
            </div>
          </div>
          <div className='projectBox'>
            <h5>MOB Gaming</h5>
            <img src={process.env.PUBLIC_URL + '/landing.png'} alt='' className='projectPic'/>
            <p>This was the last group project before the final for my bootcamp. The highlights for this project are the use of user authentication, bootstrap, and a videogame api to memic an ecommerce page selling video games. 
            </p>
            <div className='buttonBox'>
              <div className='moreInfo'>More info</div>
              <div className='github'><a href='https://github.com/blakejamesdev/MOBGaming' target="_blank" rel='noreferrer'>Github</a></div>
            </div>
          </div>
          <div className='projectBox'>
            <h5>name</h5>
            <img src='#' alt=''className='projectPic'/>
            <p>short discription
            </p>
          </div>
          <div className='projectBox'>
            <h5>name</h5>
            <img src='#' alt=''className='projectPic'/>
            <p>short discription
            </p>
          </div>
        </div>

      </div>
      <div className='projects'>
        <h3>All Projects</h3>
        <div className='projectsBox'>
          <div className='projectBox'>
            <h5>Space Battle</h5>
            <img src={process.env.PUBLIC_URL + '/spaceBattle.png'} alt='' className='projectPic'/>
            <p>A turn based strategy game made with HTML, CSS, AND JavaScript. You must defeat alians to earn gold and use your gold wisely to upgrade your ship and cannons or recharge your shields.
            </p>
            <div className='buttonBox'>
              <div className='moreInfo'>More info</div>
              <div className='github'><a href='https://github.com/blakejamesdev/Homework/tree/main/alienSpaceship' target="_blank" rel='noreferrer'>Github</a></div>
            </div>
          </div>
          <div className='projectBox'>
            <h5>name</h5>
            <img src='#' alt=''className='projectPic'/>
            <p>short discription
            </p>
          </div>
          <div className='projectBox'>
            <h5>name</h5>
            <img src='#' alt=''className='projectPic'/>
            <p>short discription
            </p>
          </div>
          <div className='projectBox'>
            <h5>name</h5>
            <img src='#' alt=''className='projectPic'/>
            <p>short discription
            </p>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Projects