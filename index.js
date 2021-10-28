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
//  }

//  console.log(aboutMe);
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) { /*проверяет на тру все значения , если все тру то выводит Сколько фильмов просмотрел*/
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
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

function rememberMyFilms() { // тут функция будет заполнять 2 фильма в объект personalMovieDB
		// можно сделать как на уроке и задавать вопросы по количеству numberOfFilms
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

//showMyDB(personalMovieDB.privat); эту функцию надо реализовать
//writeYourGenres(); эту функцию надо реализовать

function showMyDB(h) {
    if (personalMovieDB.privat === false){
    console.log(personalMovieDB);

    }
     
} 
showMyDB();


function writeYourGenres(){
    for (let i = 0; i < 2; i++){
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i +1}`);

    }

}
writeYourGenres();

