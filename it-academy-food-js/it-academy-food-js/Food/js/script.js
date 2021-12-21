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
const modalWindow = document.querySelectorAll('[data-modal]'); //получаем объекты с HTML
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('[data-close]');

      function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow ='hidden'; // запрещаем скролл при открытом модальном окне
        clearInterval(modalTimerId); // вызываем функцию если пользователь нажал "связаться с нами", модальное окно больше не откроется

      }

modalWindow.forEach(btn => {           // вешаем оброботчик событий на все кнопки
  btn.addEventListener('click', openModal);   // обращаемся к стилям CSS и вешаем на них обработчик событий
    
});
function closeModal() {
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow =''; // возвощаем скролл
}
modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {        //делаем закрытие модального окна щелчком по любому месту
  if(e.target === modal) {
    closeModal();
    }
  });

document.addEventListener('keydown', (e) => {  // закрытие модального окна при помощи клавиши Esc
  if(e.code === "Escape" && modal.classList.contains('show')) {
    closeModal();
  }
});
const modalTimerId = setTimeout(openModal, 3000); // создаем функцию по открытию модального окна спустя время

function showModalByScroll() {                          //открытие модального окна когда пользователь прокрутил страничку до конца
  if (window.pageYOffset + document.documentElement.clientHeight >= document.
    documentElement.scrollHeight - 1) {
      openModal();
      window.removeEventListener('scroll', showModalByScroll); //запрещает повторное открытие при скролле вниз
    }
}

window.addEventListener('scroll', showModalByScroll);  
    
// Используем классы для карточек

class MenuCard {
  constructor(src, alt, title, descr, price, parentSeloctor, ...classes) {
    this.src = src;
    this.alt = alt;
    this.title = title;
    this.descr = descr;
    this.price = price;
    this.classes = classes;
    this.parent = document.querySelector(parentSeloctor);
    this.transfer = 2.54; // текущий курс доллара
    this.changeToBlr();
  }
  changeToBlr() {    //конвертация в доллары или рубли
     this.price = this.price * this.transfer;
  }
render(){
   const element = document.createElement('div'); // достаем из верстки нашу карточку
   if (this.classes.length === 0) {
     this.element = 'menu__item';
     element.classList.add(this.element);
   } else{
    this.classes.forEach(className => element.classList.add(className));
   }
   
   element.innerHTML = `
                  <img src=${this.src} alt=${this.alt}>   // достаем из верстки нашу карточку
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                
                `;
                this.parent.append(element);
    }
  }

  new MenuCard(  // создаем новую карточку с новой информацией и картинкой
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению б Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
      5,
      '.menu .container',
      'menu__item',
      'big'
      
  ).render();
  new MenuCard(   // создаем новую карточку с новой информацией и картинкой
    "img/tabs/elite.jpg",
    "elite",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению б Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
      2,
      '.menu .container',
      'menu__item'
      
  ).render();
  new MenuCard(  // создаем новую карточку с новой информацией и картинкой
    "img/tabs/post.jpg",
    "post",
    'Меню "Фитнес"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхожд.',
      1,
      '.menu .container',
      'menu__item'
      
  ).render();

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