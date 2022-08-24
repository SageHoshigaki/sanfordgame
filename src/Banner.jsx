import React from 'react';
import './banner.css'

function Banner(){
    function Reset(){
        window.location.reload();
    }
    return(
        <div>
        <h1 class='game-title'>Court Of Sanford State Your Claim !!</h1>
<button onClick={Reset} class='button is-info reset-btn'>Reset</button>
        </div>
    )
}

export default Banner;