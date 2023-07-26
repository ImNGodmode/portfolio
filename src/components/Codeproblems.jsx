import React, {useState} from 'react'
import List from './List.jsx'
import Display from './Display.jsx'
function Codeblog() {
  const [challenge, setChallenge] = useState();
  return (
    <div className='content'>
      <div>
        This section is to show some of the code challenges that I have solved and some of the small games that I have made. First select a challenge or game from the list on the left. The problem and discription will load into the display box. The discription will include instructions for which variables to use. Once you set the values for the necessary variables the result will be displayed below the discription. 
      </div>
      <div className='codeProblemsBox'>
        <List  challenge ={challenge} setChallenge ={setChallenge}/>
        <Display challenge ={challenge}/>
      </div>
    </div>
  )
}

export default Codeblog
