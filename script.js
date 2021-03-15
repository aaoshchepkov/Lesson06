'use strict';
let post1 = document.createElement('p');
let post2 = document.createElement('p');
let start = ()=> {
let toDay = new Date(),
weekDay = toDay.getDay()-1,
day = toDay.getDate(),
month = toDay.getMonth()+1,
year = toDay.getYear() + 1900,
hour = toDay.getHours(),
minute = toDay.getMinutes(),
second = toDay.getSeconds(),
nameHours = 'часов',
week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
months = 
['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

const timer1 = () => {
  if(hour === 1 || hour === 21){
    nameHours = 'час';
  } else if(hour === 2 || hour === 3 || hour === 4 || hour === 22 || hour === 23 || hour === 24 ) 
  {nameHours = 'часa';} 
  week.forEach((item, i) =>{
 if (i === weekDay) {
  months.forEach((itemM, i) => {
  if (month === i) {
    let month = itemM;
    post2.textContent = (`Сегодня ${item}, ${day} ${month} ${year} года, ${hour} ${nameHours} ${minute} мин ${second} сек`);
    document.body.append(post2);
  }
  }); 
 }
});
};
timer1();

const timer2 = () => {
if (day <=9){
  day = '0' + day;
}
if (month <=9){
  month = '0' + month;
}
if (hour <=9){
  hour = '0' + hour;
}
if (minute <=9){
  minute = '0' + minute;
}
if (second <=9){
 second = '0' + second;
} 
post1.textContent = (`${day}.${month}.${year} - ${hour}:${minute}:${second}`);
document.body.append(post1);
};
timer2();

};
start();

setInterval((start),1000);

