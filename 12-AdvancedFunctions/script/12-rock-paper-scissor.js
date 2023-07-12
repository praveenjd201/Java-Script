const scores=JSON.parse(localStorage.getItem('scores')) || {
  wins:0,
  losses:0,
  tie : 0
};

document.body.addEventListener('keydown',(event) =>{
  // console.log(event.key);
  if(event.key === 'r'){
    playGame('rock');
  }else if(event.key === 'p'){
    playGame('paper');
  }else if(event.key === 's'){
    playGame('scissor');
  }else if(event.key === 'Backspace'){
    showResetConfirmation();
    // resetScores();
  }else if(event.key === 'a'){
    autoPlay();
  }
})

document.querySelector('.js-rock')
  .addEventListener('click',() =>{
    playGame('rock');
  });

document.querySelector('.js-paper')
.addEventListener('click',() =>{
  playGame('paper');
});

document.querySelector('.js-scissor')
.addEventListener('click',() =>{
  playGame('paper');
});

document.querySelector('.js-resetScores')
.addEventListener('click',() =>{
  showResetConfirmation();
  // resetScores();
});
document.querySelector('.js-autoPlay')
  .addEventListener('click',() =>{
  autoPlay();
});



function showResetConfirmation(){
  document.querySelector('.js-reset-confirmationTab')
    .innerHTML=`Are you sure you want to reset the score? 
    <button class="js-reset-confirm-yes">Yes</button>
    <button class="js-reset-confirm-no">No</button>`;
  document.querySelector('.js-reset-confirm-yes')
    .addEventListener('click',() =>{
      resetScores();
      hideResetConfirmation();
  });
  document.querySelector('.js-reset-confirm-no')
    .addEventListener('click',() =>{
      hideResetConfirmation();
  });

}
function hideResetConfirmation(){
  document.querySelector('.js-reset-confirmationTab')
    .innerHTML= '';
}

updateScoreElement();
let intervalId;
let isPlaying = false;
let autoPlayBtn = document.querySelector('.js-autoPlay');

function autoPlay(){  
  let playerMove=pickComputerMove();
  let fun = function(){
    playGame(playerMove);
  }
  if(!isPlaying){
    intervalId = setInterval(fun,700);
    isPlaying=true;
    autoPlayBtn.innerHTML='stop playing';
  }else{
    clearInterval(intervalId) ;
    isPlaying=false;
    autoPlayBtn.innerHTML='contiune playing';
  }
}

function playGame(playermove){
  let computerMove = pickComputerMove();
  let result='';

  if(playermove === 'scissor'){
    if(computerMove === 'rock'){
      result='loss';
    }else if(computerMove === 'paper'){
      result = 'win';
    }else{
      result = 'tie'
    }

  }else if(playermove === 'paper'){
    if(computerMove === 'rock'){
      result='win';
    }else if(computerMove === 'paper'){
      result = 'tie';
    }else{
      result = 'loss'
    }
    
  }else{
    if(computerMove === 'rock'){
      result='tie';
    }else if(computerMove === 'paper'){
      result = 'loss';
    }else{
      result = 'win'
    }
  }
  validateScore(result);
  document.querySelector('.js-moves')
    .innerHTML=`you 
  <img src="../icons/${playermove}-emoji.png" class="move-icon">
  <img src="../icons/${computerMove}-emoji.png" class="move-icon">
  Computer`;

  // alert(`You picked ${playermove}. Computer picked ${computerMove}. ${result}.\n${validateScore(result)}`);
  
  // Wins: ,Losses: ,Ties: 


} 
function updateScoreElement(){
  document.querySelector('.js-score')
    .innerHTML=`Wins: ${scores.wins} ,Losses: ${scores.losses} ,Ties: ${scores.tie}`;
}

function pickComputerMove(){
  const randomNumber=Math.random();
  let computerMove='';
  if(randomNumber >=0 && randomNumber < 1/3){
      computerMove='rock'
    }else if(randomNumber >= 1/3 && randomNumber < 2/3){
      computerMove='paper'
    }else if(randomNumber >= 2/3 && randomNumber < 1){
      computerMove='scissor'
    }
    
    return computerMove;
}
function validateScore(result){
  
  if(result === 'win'){
    scores.wins+=1;       
  }else if(result === 'loss'){
    scores.losses+=1;      
  }else if(result === 'tie'){
    scores.tie +=1;
  }
  localStorage.setItem('scores',JSON.stringify(scores));
  updateScoreElement();
  document.querySelector('.js-result')
    .innerHTML=`you ${result}.`;

  
  
  // return `Wins:${scores.wins} ,Losses:${scores.losses} ,Ties:${scores.tie}`;
}

function resetScores(){
  localStorage.removeItem('scores')
  scores.wins=0;
  scores.losses=0;
  scores.tie=0;
  updateScoreElement();
  
}
