'use strict';

function isNum(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}
  

let count = 0;
const num =  () => {
let number = Math.floor(Math.random() * 101);
return number;
};
console.log(num());

function guessTheNumber() {
  let enteredNumber = prompt('Угадай число от 1 до 100');
  if (enteredNumber === null || count === 10) {
    let losses = confirm('Попытки закончились, хотите сыграть еще?');
     if (losses === true) {
      count = 0;
      num();
      guessTheNumber(); 
     } else {
        alert('Игра окончена');
        return ;
     }
  }
  if (isNum(enteredNumber)) {
    enteredNumber = +enteredNumber;
     if (num() === enteredNumber) {
     let win = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
     if (win === true) {
      count = 0;
      num();
      guessTheNumber(); 
     } else {
      alert('Игра окончена');
      return ;
     }
    } else if (num() < enteredNumber) {
     enteredNumber = alert ('Загаданное число меньше, осталось ' + (10-count) + ' попыток');
    } else if (num() > enteredNumber) {
     enteredNumber = alert ('Загаданное число больше, осталось ' + (10-count) + ' попыток');
    }
 } else {
   alert('Введи число!');
 }
 count+= 1;
 console.log(count);
 guessTheNumber();
 
}
guessTheNumber();


