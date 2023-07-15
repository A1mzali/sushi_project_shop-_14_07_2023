// Добавляем прослушку на всем окне

window.addEventListener('click', function (event) {

  // Обьявляем переменную для счетчика
  let counter;

  // проверяем клик строго по кнопкам + или -
  if(event.target.dataset.action === 'plus'|| event.target.dataset.action === 'minus') {
       // Находим обертку всего нашего счетчика
       const counterWrapper = event.target.closest('.counter-wrapper');

       // Находим див с числом счетчика
        counter = counterWrapper.querySelector('[data-counter]')
  }

  // Провеоряем яв-ля ли элемент по которому был совершен клик кнопкой + или -
  if (event.target.dataset.action === 'plus') {
    counter.innerText = ++counter.innerText;
  }

  if (event.target.dataset.action === 'minus') {
    if (parseInt(counter.innerText) > 1 ) {
      // Изменяем текст в счетчике его на 1
      counter.innerText = --counter.innerText;
    } 
    
  }




})