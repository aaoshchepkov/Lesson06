'use strict';

function isNum(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
} 
let count = 0;
let start = () => {
let num = Math.floor(Math.random() * 101);
function guessTheNumber() {
  let enteredNumber = prompt('Угадай число от 1 до 100');
  if (enteredNumber === null) {
        alert('Игра окончена');
        return ;
     }
  if (count === 10) {
    let losses = confirm('Попытки закончились, хотите сыграть еще?');
     if (losses === true) {
      count = 0;
      start (); 
     } else {
        alert('Игра окончена');
        return ;
     }
  }
  if (isNum(enteredNumber)) {
    enteredNumber = +enteredNumber;
     if (num === enteredNumber) {
     let win = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
     if (win === true) {
      count = 0;
      start ();
     } else {
      alert('Игра окончена');
      return ;
     }
    } else if (num < enteredNumber) {
     enteredNumber = alert ('Загаданное число меньше, осталось ' + (10-count) + ' попыток');
    } else if (num > enteredNumber) {
     enteredNumber = alert ('Загаданное число больше, осталось ' + (10-count) + ' попыток');
    }
 } else {
   alert('Введи число!');
 }
 count+= 1;
 guessTheNumber();
}
guessTheNumber();
};
start();


