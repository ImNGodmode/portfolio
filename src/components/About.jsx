import React from 'react'


function Info() {
  return (
    <div className='content'>
      <div className='about'>
        <div className='introContainer'>
          {/* <img src='https://media.licdn.com/dms/image/D4E03AQFZpLsWcsPsww/profile-displayphoto-shrink_100_100/0/1670349694377?e=1693440000&v=beta&t=xwtpL7WX7RYoWRPJKqgvqZvjiPuLGk1We_JzANC6KFc' alt='' /> */}
          <h1>About Me</h1>
          <p>
              Hello, and thank you for taking the time to visit my portfolio page. My name is Blake James and I am a tech-profesional in central Kentucky. I have loved computers and gaming since I was young. I have worked with computers at a hobbiest level since High School. I built my own desktop, and have helped many others in building thier personal machines. In 2022 I completed a full-stack software engineering boot camp with Per Scholas. Since completing this program I have moved from working more on the hardware side of computers to building software and web applications. When I am not at work or looking for new oppertunities to utalize my development skills I am often sitting at my desk trying to expand my knowledge, and find new and interesting things to add to my applications. I am passionate about creating user focused applications, programs that leverage technology to simplify life, and make the users day to day easier.  </p>
        </div>
        <div>
          <h2>Current Technologies</h2>
          <div className='stackContainer'>
          <img src={process.env.PUBLIC_URL + '/html.png'} alt="HTML 5" className='techPic'/>
          <img src={process.env.PUBLIC_URL + '/css.png'} alt='CSS 3' className='techPic' />
          <img src={process.env.PUBLIC_URL + '/javaScript.png'} alt='Java Script' className='techPic' />
          <img src={process.env.PUBLIC_URL + '/expressjs.png'} alt='Express' className='techPic' />
          <img src={process.env.PUBLIC_URL + '/nodejs.png'} alt='Node JS' className='techPic' />
          <img src={process.env.PUBLIC_URL + '/react.png'} alt='React' className='techPic' />
          <img src={process.env.PUBLIC_URL + '/mongoDB.png'} alt='Mongo DB' className='techPic' />
          <img src={process.env.PUBLIC_URL + '/github.png'} alt='Github' className='techPic' />
          <img src={process.env.PUBLIC_URL + '/bootstrap.png'} alt='Bootstrap' className='techPic' />
          </div>
        </div>
    </div>
  </div>
  )
}

export default Info