// Находим элементы на странице
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');

const counter = document.querySelector('[data-counter]');

// Отслеживаем клик на кнопку Минус
btnMinus.addEventListener('click', function() {
  console.log("minus click");

  if (parseInt(counter.innerText) > 1 ) {
    // Изменяем текст в счетчике его на 1
    counter.innerText = --counter.innerText;
  } 
  
})

// Отслеживаем клик на кнопку Plus



btnPlus.addEventListener('click', function() {
  console.log("plus click");
  counter.innerText = ++counter.innerText;
})