'use strict'

const guessList = document.getElementById("myList");
const scoreList = document.getElementById('scoreList')
const randomNumber = Math.floor(Math.random()* 20) + 1;
const myList = document.getElementById('myList');
let score = 20;
let highscore = 0;
let lastScore = 0;
document.querySelector('.check').addEventListener('click', function(){
  const inputNumber = document.querySelector('.input-btn').value;
  const guess = Number(document.querySelector('.input-btn').value);
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = 'blue';
  if(guess){
    score--;
  }
  document.querySelector('.score').textContent = score;


  if(!guess){
    document.querySelector('.guessing').textContent = 'Please Enter a Number';
  }else if(guess === randomNumber){
    lastScore = score;
    document.querySelector('.guessing').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = inputNumber;
    document.querySelector('body').style.backgroundColor = '#202A6F';
    document.querySelector('.input-btn').value = '';
    const currentDate = new Date();
    const hours = currentDate.getHours().toString().padStart(2, '0'); 
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0'); 
    
    const formattedTime = `${hours}:${minutes}:${seconds}`;  
      const newGuessListItem = document.createElement("li");
      newGuessListItem.textContent = `${formattedTime}`;
      guessList.appendChild(newGuessListItem);
  
      const newScoreListItem = document.createElement("li");
      newScoreListItem.textContent = `${score}`;
      scoreList.appendChild(newScoreListItem);

      party.confetti(this, {
          count: party.variation.range(20, 40),
      });


  }else if(guess < randomNumber){
    document.querySelector('.guessing').textContent = 'Try Higher!';
    document.querySelector('.input-btn').value = '';

  }else{
    document.querySelector('.guessing').textContent = 'Try Lower!';
    document.querySelector('.input-btn').value = '';
  }

})


document.querySelector('.again').addEventListener('click', function(){
  score = 20;
  document.querySelector('.input-btn').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#7054bf';
  document.querySelector('.guessing').textContent = 'Start guessing...';
  document.querySelector('.highscore').textContent = lastScore;
  document.querySelector('.score').textContent = score;

});
