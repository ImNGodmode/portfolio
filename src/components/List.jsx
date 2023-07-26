import React from 'react'

function List({challenge, setChallenge}) {
    const activeChallenge = ((event) => {
        setChallenge(event.target.textContent) 
    })
  return (
    <div className='listBox'>
        <div className='gameBox'> 
            Games
            <div>
                <div className='challenge' onClick={activeChallenge}>Blackjack</div>
                <div className='challenge'onClick={activeChallenge}>Space Invasion</div>
                <div className='challenge'onClick={activeChallenge}>Aim Trainer </div>
            </div>
        </div>
        <div className='gameBox'>
            Code Challenges 
            <div>
                <div className='challenge' onClick={activeChallenge}>buy and sell stock</div>
                <div className='challenge' onClick={activeChallenge}>first occurence in a string </div>
                <div className='challenge' onClick={activeChallenge}>fizzbuzz </div>
                <div className='challenge' onClick={activeChallenge}>jump game </div>
                <div className='challenge' onClick={activeChallenge}>jump game 2 </div>
                <div className='challenge' onClick={activeChallenge}>length of last word </div>
                <div className='challenge' onClick={activeChallenge}>longest prefix </div>
                <div className='challenge' onClick={activeChallenge}>majority element</div>
                <div className='challenge' onClick={activeChallenge}>merge sorted array </div>
                <div className='challenge' onClick={activeChallenge}>merge two sorted lists </div>
                <div className='challenge' onClick={activeChallenge}>palindrome plus one </div>
                <div className='challenge' onClick={activeChallenge}>remove duplicates</div>
                <div className='challenge' onClick={activeChallenge}>remove dups from sorted list</div>
                <div className='challenge' onClick={activeChallenge}>remove element</div>
                <div className='challenge' onClick={activeChallenge}>roman </div>
                <div className='challenge' onClick={activeChallenge}>rotate array</div>
                <div className='challenge' onClick={activeChallenge}>search insert position</div>
                <div className='challenge' onClick={activeChallenge}>stock</div>
                <div className='challenge' onClick={activeChallenge}>valid palindrome </div>
                <div className='challenge' onClick={activeChallenge}>valid parenthesis</div>

            </div>
        </div>


    </div>
  )
}

export default List