import React from 'react'

function Featureproject1() {
  return (
    <div className='content'>
        <div className='featureProject1Container'>
            <h3>Zombie Aim Trainer</h3>
            <div className='descriptionBox'>
                <img src={process.env.PUBLIC_URL + '/ZombieAimTrainer.png'} alt="" className='projectPic'/>
                <p>
                    This was one of my first solo projects while I was going through bootcamp. It is a very simple game with a static character in the middle of the screen. Zombies spawn randomly at 8 predetermined locations around the screen and move toward the character. You must shoot (click on) the zombie to kill it before it reaches the character in the middle of the screen. While it is basic, and my skills have far surpassed what is shown here, it is still one of my favorite projects. At the time I created this I had only been coding for 4 weeks, and had only worked with html, css, and JavaScript. If you need a quick break from your daily grind give it a quick play below.
                </p>
            </div>
        </div>
        
    </div>
  )
}

export default Featureproject1