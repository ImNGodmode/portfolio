import React from 'react'

function featureproject3() {
  return (
    <div className='content'>
    <div className='featureProject1Container'>
        <h3>MOBGaming</h3>
        <div className='descriptionBox'>
          <img src={process.env.PUBLIC_URL + '/login.png'} alt="" className='projectPic'/>
          <img src={process.env.PUBLIC_URL + '/welcome.png'} alt="" className='projectPic'/>
          <img src={process.env.PUBLIC_URL + '/info.png'} alt="" className='projectPic'/>
          <p>
            This project is a platform for trainers to interact with clients and log progress for lifting programs and macro nutrition. This application features user authentication with two log in tiers. The higher tier is for coaches. It allows the user to see thier information as well as all trainee information and make updates to all information. The second is for trainees. On this tier the user can only see and update thier own information. They can also see updates made to thier log by thier coach. 
          </p>
          <div className='projectLinks'>
            <div className='github'>To see the code on github click <a href='https://github.com/blakejamesdev/fitnessCoaching' target="_blank" rel='noreferrer'>here!</a></div>
            <div className='github'>To go to a live version of the project click<a href='https://github.com/blakejamesdev/fitnessCoaching' target="_blank" rel='noreferrer'>here!</a>(this project is currently not being hosted)</div>
          </div>
        </div>
    </div>
    
</div>
  )
}

export default featureproject3