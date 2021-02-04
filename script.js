'use strict';

function isNum(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}
  
function guessTheNumber() {
  
  let luckyNumber = 56;

  let enteredNumber = prompt('Угадай число от 1 до 100');
  if (enteredNumber === null) {
    alert('Игра окончена');
    return enteredNumber;
  }
  
  if (isNum(enteredNumber)) {
    enteredNumber = +enteredNumber;
     if (luckyNumber === enteredNumber) {
     alert('Поздравляю, Вы угадали!!!');
     return enteredNumber;
    } else if (luckyNumber < enteredNumber) {
     enteredNumber = alert ('Загаданное число меньше');
    } else if (luckyNumber > enteredNumber) {
     enteredNumber = alert ('Загаданное число больше');
    }
 } else {
   alert('Введи число!');
 }
 return guessTheNumber();
}
guessTheNumber();

