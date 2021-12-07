//Практика
// const numberOfFilms = prompt('Сколько фильмов вы посмотрели?');
// const personalMovieDB = {
//     count: 0,
//     movies: [],
//     actors:{},
//     genres: [],
//     privat: false
// };
// if (numberOfFilms > 0) {
//     for(let i = 1; i <= numberOfFilms; i++){
//         let lastFilms = prompt('Один из последних просмотренных фильмов?');

// const { userInfo } = require("os");

// const { count } = require("console");

        
//         while (!lastFilms || lastFilms.length === 0){
//             lastFilms = prompt('Один из последних просмотренных фильмов?');
//         }
//         let raiting  = +prompt('На сколько оцените его? От 1 до 5');
//         while(!(raiting >= 1 && raiting <=5)){
//         raiting = +prompt('На сколько оцените его? От 1 до 5')
//         }
//         personalMovieDB.movies.push({[lastFilms]: raiting})
            
//     }
// } else alert ('Вы ввели некоректное значение');
// if (personalMovieDB.count < 10){
//     alert('Посмотрено довольно мало фильмов');

// }else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
//     alert('Вы классический зритель')

// }else if (personalMovieDB.count > 30){
//     alert('Вы киноман')
// }else alert('Произошла ошибка')



// console.log(personalMovieDB);

// const name = prompt('Ваше имя?');

// const lastName = prompt('Ваша фамилия?');
// const twoName = prompt('Ваше отчество?');
// let age = prompt('Ваш возвраст?');

// const aboutMe = {
// }

// console.log(aboutMe)

//  if (age >= 65){
//     alert('Вы на пенсии');
//  }else (age <65){
//      alert('Вы еще молоды');
// //  }

// //  console.log(aboutMe);
// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) { 
    /*проверяет на тру все значения , если все тру то выводит Сколько фильмов просмотрел*/
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms() { // тут функция будет заполнять 2 фильма в объект personalMovieDB
// 		// можно сделать как на уроке и задавать вопросы по количеству numberOfFilms
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколько оцените его?', '');
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }

// detectPersonalLevel();

// //showMyDB(personalMovieDB.privat); эту функцию надо реализовать
// //writeYourGenres(); эту функцию надо реализовать

// detectPersonalLevel: function() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }
// showMyDB: function(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// toggleVisibleMyDB: function() {
//     if (personalMovieDB.privat) {
//         personalMovieDB.privat = false;
//     } else {
//         personalMovieDB.privat = true;
//     }
// }
// writeYourGenres: function () {
//     for (let i = 1; i < 2; i++) {
//         let genre = prompt(`Ваш любимый жанр под номером ${i}`);

//         if (genre === '' || genre == null) {
//             console.log('Вы ввели некорректные данные или не ввели их вовсе');
//             i--;
//         } else {
//             personalMovieDB.genres[i - 1] = genre;
//         } 
//     }

//     personalMovieDB.genres.forEach((item, i) => {
//         console.log(`Любимый жанр ${i + 1} - это ${item}`);
//     });
// }
// }
"use strict";
// let number = 4.7;

// console.log('string' * 9);

// const persone = 'Valer';
// const bool = true;

// const obj = {
//     name: "Valer",
//     age: 37,
//     isMarried: true
// };
// console.log(obj ['name']);

// let arr = ['plum.png', 'orange.svg', 'aplee.jpg', 8, 46, {}, []];
// console.log(arr[6]);

// alert("Hello Valer!!!");
// const result = confirm('Are you here?');
// console.log(result);
// const answer = +prompt("Вам  есть 18?", "");
// console.log(typeof(answer + 10));
// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(typeof(answers));
// const user = 'Valery';
// alert(`Привет, ${user}`);




// первая пркактическая

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " ");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?'),
//       b = +prompt('На сколько оцените его?', " "),
//       c = prompt('Один из последних просмотренных фильмов?'),
//     d = +prompt('На сколько оцените его?', " ");

//     personalMovieDB.movies[a] = b;
//     personalMovieDB.movies[c] = d;
//     console.log(personalMovieDB);

// Вторая практическая

let numberOfFilms;
function start(){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " ");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " ");
    }
}
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


    

        function rememberMyFilms() {
            for (let i = 0; i < 2; i++){
                const a = prompt('Один из последних просмотренных фильмов?'),
                  b = +prompt('На сколько оцените его?', " ");
                  
                if (a != null && b != null &&  a != '' && b != ''  && a.length < 50) {
                    personalMovieDB.movies[a] = b;
                    console.log('done');
            }  else {
                    console.log("Error");
                    i--;
                 
                } 
            
            }
        }
        rememberMyFilms();

       
        function detectPersonalLevel() {
            if (personalMovieDB.count < 10) {
                console.log('Просмотрено довольно мало фильмов');
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) { 
                console.log('Вы классический зритель');
    
            } else if (personalMovieDB.count >= 30) {
                console.log('Вы киноман');
            } else {
                console.log('Произошла ошибка');
            }
        }
        detectPersonalLevel();

        function showMyDB(hidden) {
            if (!hidden) {
                console.log(personalMovieDB);
            }
        }
     showMyDB(personalMovieDB.privat);
        
     function writeYourGenres() {
      for (let i = 1; i <= 3; i++) {
        
        personalMovieDB.genres[i - 1]  = prompt(`Ваш любимый жанр под номером ${i}?`);
      }

     }
         
    writeYourGenres();
    

// function showFirstMessage () {
//     console.log('Hello');
// }
//   showFirstMessage();     
//   function calc(a,b) {
//       return(a + b);
//   }
//   console.log(calc(3, 9));
//   console.log(calc(7, 8));
//   console.log(calc(6, 4));
    
      

    


//  условия

// if (4 == 3) {
//     console.log("Ok");
// } else {
//     console.log("erreor!");
// }
// const num = 50;

// if (num < 49) {
//     console.log('Error!');
// } else if (num > 100) {
//     console.log("Bad");
// } else {
//     console.log('Ok!');
// }
//    (num === 50) ? console.log('Ok') : console.log("Error");
// const num = 50;
//  switch (num) {
//    case 49:
//      console.log("Error");
//     break;
//    case 100:
//       console.log("Error");
//      break;
//    case 52:
//       console.log("ok");
//      break;
//    default:
//      console.log('another time');
//      break;
// }
     

