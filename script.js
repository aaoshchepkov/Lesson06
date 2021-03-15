'use strict';
const cityArr = {
  rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
  uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
  bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
  jap: ['Токио', 'Киото', 'Осака', 'Иокогама']
};

let country = document.getElementById('country');
let city = document.getElementById('city');


country.addEventListener('change', function() {
  city.style.display = 'block';
  let cities = cityArr[this.value];
  city.length = 0;
  cities.forEach((item,i)=>{
  city.add(new Option(cities[i]));
  });
  });

city.addEventListener('change', ()=> {
let div = document.querySelector('.result'); 
div.textContent =`${country.options[country.selectedIndex].text} ${city.value}`;
});  


