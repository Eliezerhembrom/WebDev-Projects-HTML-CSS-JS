'use strict'
// console.log(document.querySelector('.score').textContent);

// console.log(document.querySelector('.input-btn').value);
const randomNumber = Math.floor(Math.random()* 20);

document.querySelector('.check').addEventListener('click', function(){
  const inputNumber = document.querySelector('.input-btn').value;
  const guess = Number(document.querySelector('.input-btn').value);
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = 'blue';
  if(!guess){
    document.querySelector('.guessing').textContent = 'Please Enter a Number';
  }else if(guess === 10){
    document.querySelector('.guessing').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = inputNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
  }else if(guess < 10){
    document.querySelector('.guessing').textContent = 'Too Low!';
    document.querySelector('.input-btn').value = '';
  }else{
    document.querySelector('.guessing').textContent = 'Too High!';
    document.querySelector('.input-btn').value = '';
  }
})

document.querySelector('.again').addEventListener('click', function(){
  document.querySelector('.input-btn').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = 'blue';
  document.querySelector('.guessing').textContent = 'Start guessing...';
});
