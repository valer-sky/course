 window.addEventListener('DOMContentLoaded', function() {
//  Табы
 
  const tabs = document.querySelectorAll('.tabheader__item'), // на что кликаем
        tabsContent = document.querySelectorAll('.tabcontent'), // контент табов
        tabsParent = document.querySelector('.tabheader__items'); // оброботчик события табов
      
      function hideTabContent() {           //прячем (скрываем контент) табы
        tabsContent.forEach(item => {       //перебираем массив
          item.classList.add('hide');
          item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {                        //убираем активность
          item.classList.remove('tabheader__item_active');
        });
      }
      function showTabContent(i = 0) {              //показываем табы
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active'); //добовляем активность
      }

      hideTabContent();    //вызываем фунции
      showTabContent();

    tabsParent.addEventListener('click', (event) => {   //назначаем оброботчик событий
      const target = event.target;

      if (target && target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) => {           //перебираем табы и подстовляем номер
          if (target == item) {
            hideTabContent();
            showTabContent(i);
          }
        });
      }
    });
    //
//     const timerId = setTimeout(function() {
// console.log('Hello');
//     }, 2000);

    //ТАЙМЕР

    const deadline = '2022-01-01';

    function getTimeRemaining(endtime) {      // математически округляем числа
      const t = Date.parse(endtime) - new Date(),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);
      
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }
      function getZero(num) {       // вставляем ноль перед днем и часом когда меньше 10
        if (num >= 0 && num < 10) {
          return `0${num}`;
        } else {
          return num;
        }
      }

      function setClock(selector, endtime) {     // обращаемся к классам на страничке(спаны)
      const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

      updateClock();  // исключает маргании при обновлении страницы
      
      function updateClock() {
        const t = getTimeRemaining(endtime);

        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total <= 0) {     // отключаем таймер когда дедлайн
          clearInterval(timeInterval);
          days.innerHTML = 0;
          hours.innerHTML = 0;
          minutes.innerHTML = 0;
          seconds.innerHTML = 0;
        }

      }

    }

    setClock('.timer', deadline); //запускаем таймер функцией
// 
// Модальное окно
const modalWindow = document.querySelector('[data-modal]'); //получаем объекты с HTML
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('[data-close]');

modalWindow.addEventListener('click', () => {   // обращаемся к стилям CSS и вешаем на них обработчик событий
  modal.classList.add('show');
  modal.classList.remove('hide');

});
modalCloseBtn.addEventListener('click', () => {
  modal.classList.add('hide');
  modal.classList.remove('show');
});

 });
// window.addEventListener('DOMContentLoaded', function() {

//     const content = [...document.querySelectorAll('.tabcontent')];//контент
//     const tabItems = [...document.querySelectorAll('.tabheader__item')];// навигация табов
//     const navigation = document.querySelector('.tabheader__items');
  
//     function toogleTab(index) {
//       content.forEach((tab) => {
//         tab.classList.add('hide');
//         tab.classList.remove('show');
//       });//скрываем все элементы
//       content[index].classList.remove('hide'); //убираем класс каторый скрывает блок у элемента под номером index
//       content[index].classList.add('show');
  
//       tabItems.forEach((item) => {
//         item.classList.remove('tabheader__item_active');
//       });
  
//       tabItems[index].classList.add('tabheader__item_active');
//     }
//     toogleTab(0);
  
//     navigation.addEventListener('click', (e) => {
//       const target = e.target;
//       if (target.classList.contains('tabheader__item')) {
//         toogleTab(Number(e.target.dataset.index));
//       }
//     });
  
    // setTimeout(() => {
    //   console.log('setTimeout');
    // }, 5000) // запускает функцию через 5 секунд 1 раз
  
    // setInterval(() => {
    //   console.log('setInterval');
    // }, 1000) // запускает функцию каждую секунду
  
    // console.log(new Date());
    // console.log(new Date().getFullYear());
    // console.log(new Date().getHours());
  
  //   const date = () => {
  //     const dateNow = new Date();
  //     const obj =  {
  //       h: dateNow.getHours(),
  //       m: dateNow.getMinutes(),
  //       y: dateNow.getFullYear(),
  //       s: dateNow.getSeconds(),
  //       mont: dateNow.getMonth() + 1,
  //       day: dateNow.getDay()
  //     };
  //     return `${obj.day}:${obj.mont}:${obj.y}`;
  //   };
  //   console.log(date());
  // });