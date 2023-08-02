import React from 'react'

function Featureproject2() {
  return (
    <div className='content'>
        <div className='featureProject1Container'>
            <h3>MOBGaming</h3>
            <div className='descriptionBox'>
              <img src={process.env.PUBLIC_URL + '/MOBLogin.png'} alt="" className='projectPic'/>
              <img src={process.env.PUBLIC_URL + '/landing.png'} alt="" className='projectPic'/>
              <img src={process.env.PUBLIC_URL + '/gameDetail.png'} alt="" className='projectPic'/>
              <img src={process.env.PUBLIC_URL + '/cart.png'} alt="" className='projectPic'/>
              <p>
                This project is a moch ecommerce site for selling video games. It utalizes an api to access video game information and display it in a storefront. The project features user authentication (see top left picture) so users can log in and place games in thier cart for purchase later. Each game also has a more information screen for a more in depth description of the game. The application is responcive to screen size at 3 different increments. Two places I would like to expand on this projet are the cart and pagination. Currently the cart is not connected to a payment system like stripe. When you click on check out your cart is cleared but there isn't a transaction. Also the main landing page of the application brings up the first set of games from the api but there is no option to go further by ether continuing to scroll down or going to the next page. I would like to add this feature for browsing games. 
              </p>
              <div className='projectLinks'>
                <div className='github'>To see the code on github click <a href='https://github.com/blakejamesdev/MOBGaming' target="_blank" rel='noreferrer'>here!</a></div>
                <div className='github'>To go to a live version of the project click <a href='https://github.com/blakejamesdev/MOBGaming' target="_blank" rel='noreferrer'>here!</a>(this project is currently not being hosted)</div>
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default Featureproject2