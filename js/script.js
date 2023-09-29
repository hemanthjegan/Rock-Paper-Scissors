function pickRandomMove(){
    const randNumber = Math.random();
    let computerMove='';
    if(randNumber >= 0 && randNumber < 1/3){
        computerMove = 'rock';
    }else if(randNumber >= 1/3 && randNumber < 2/3){
       computerMove = 'paper';
    }else if(randNumber >=2/3 && randNumber < 1){
        computerMove = 'scissors';
    }
    return computerMove;
}

/* const score = {
    wins : 0,
    losses : 0,
    ties : 0
}; */   // first we have to store the object in the localstorage and remove the initial variable 

const score = JSON.parse(window.localStorage.getItem('score')) || {
    wins : 0,
    losses : 0,
    ties : 0
} ;

/* if(score == null){
    score = {
        wins : 0,
        losses : 0,
        ties : 0
    } ;       
   
} */ 
// after clear localstorage using removeItem() it removes the key and value in the localstorage 
// Again you try to access it shoes NULL Because we use the above ststement

displayScore();

function playGame(playerMove){

    const computerMove = pickRandomMove();

    let result = '';



    if(playerMove === 'rock'){

        if(computerMove == 'rock'){
            result = 'Tie';
        }else if(computerMove == 'scissors'){
            result = 'You Win';
        }else if(computerMove == 'paper'){
            result = 'You Lose';
        }
        
    }else if(playerMove === 'paper'){

        if(computerMove == 'paper'){
            result = 'Tie';
        }else if(computerMove == 'rock'){
            result = 'You Win';
        }else if(computerMove == 'scissors'){
            result = 'You Lose';            }

    }else if(playerMove === 'scissors'){

        if(computerMove == 'scissors'){
            result = 'Tie';
        }else if(computerMove == 'paper'){
            result = 'You Win';
        }else if(computerMove == 'rock'){
            result = 'You Lose';
        }

    }


    if(result === 'You Win'){
        score.wins += 1;
    }else if(result === 'You Lose'){
        score.losses += 1;
    }else if(result === 'Tie'){
        score.ties += 1;
    }

    window.localStorage.setItem('score', JSON.stringify(score)); 

   
    document.getElementById('js-result-decision').innerHTML= result;

   // document.getElementById('js-result-desc').innerHTML=`You Picked ${playerMove} - Computer Picked ${computerMove}`;
   document.getElementById('js-result-desc')
   .innerHTML=`You Picked <img src="images/${playerMove}-emoji.png" alt="Player-picked" class="player-picked img-icon"> 
   Computer Picked <img src="images/${computerMove}-emoji.png" alt="Computer" class="computer-picked img-icon">`;

    displayScore();

    const content = document.getElementById('js-result-text');
    if (content.style.display == 'none') {
        content.style.display = 'block';
    }

    /* const resetBtn = document.getElementById('reset-btn');
    if(resetBtn.style.display == 'none'){
        resetBtn.style.display == 'block';
    } */
    
}


function displayScore(){
    document.getElementById('game-score').innerHTML=`Wins : ${score.wins}, Losses : ${score.losses}, Ties : ${score.ties}`;
}


function clear(){
    document.getElementById('final-result').innerHTML='Cleared..';
}


function resetScore(){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    
    localStorage.removeItem('score');  // It remove the key and value in the localstorage
    
    displayScore();
}

