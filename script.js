'use strict';

let week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
   toDay = new Date().getDay() - 1;  
week.forEach((item, i) => {
  if (i === toDay) {
     document.write(`<span><b>${item}</b></span><br>`);
   } else if (item === 'сб' || item === 'вс') {
     document.write(`<span><i>${item}</i></span><br>`);
   } else {
     document.write(`<span>${item}</span><br>`);
   }
}); 
