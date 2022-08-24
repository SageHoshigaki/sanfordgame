import React, {useState} from 'react';
import './teamcard.css';






function Teamcard(){
    const [currentScore, setScore] = useState(0);

    function addPoint(){
        setScore(currentScore + 1);
    }

    function decreaseScore(){
        setScore(currentScore - 1);
    }



    return(
        <div class='main-card'>
      
       
        <div className='parent'>
        <h1 class="score">{currentScore}</h1>
        <img class ="game-1"src="/img/cream1.png" alt="game-design2"/>
        <img class ="game-2"src="/img/2.png" alt="bg"/>
        </div>

          <button class="button is-centered minus-btn" onClick={decreaseScore}>-</button>
          <button class="button add-btn" onClick={addPoint}>+</button>
            
        </div>

    );
}

export default Teamcard;