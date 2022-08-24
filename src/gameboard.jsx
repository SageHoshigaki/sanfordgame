import React from 'react';
import Teamcard from './teamcard'
import './gameboard.css'

function Gameboard(){
    return(
        <div className="gameboard">
       <div class='team-scores columns'>
       <div class='column'>
       <Teamcard/> 
       </div>
       <div class='column'>
       <Teamcard/> 
       </div>
       </div>
       <div class='team-scores columns'>
       <div class='column'>
       <Teamcard/> 
       </div>
       <div class='column'>
       <Teamcard/> 
       </div>
       </div>

        </div>
    )
}

export default Gameboard;