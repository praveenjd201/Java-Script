const scores=JSON.parse(localStorage.getItem('scores')) || {
  wins:0,
  losses:0,
  tie : 0
};

updateScoreElement();
 




function playGame(playermove){
  computerMove = pickComputerMove()  
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
