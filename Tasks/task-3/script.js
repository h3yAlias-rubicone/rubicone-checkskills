/*
 * Задача 3: «Плоская структура»
 *
 * Используя ES6 синтаксис и знания по ООП реализуйте простую структуру:
 * Опишите функционал класса Human. Данный класс принимает строку name и число age.
 * Класс обладает методом _sayHello, при вызове которого выводится сообщение в консоль: "Привет, меня зовут ИМЯ, мне ЛЕТ"
 * Где ИМЯ - строка, переданная как name
 * а ЛЕТ - число, переданное как age.
 *
 * От этого класса унаследуйте следующие классы Developer и GuitarPlayer.
 * Каждый из этих классов принимает строку spec и строку instrument;
 *
 * При вызове метода _sayHello экземпляра каждого из этих двух классов в консоль выводится следующее сообщение:
 * "Привет, меня зовут ИМЯ, я - СПЕК и мой лучший друг - ИНСТРУМЕНТ"
 *
 * Где СПЕК - строка spec
 * А ИНСТРУМЕНТ - строка instrument
 *
 * Каждый из этих классов имеет уникальный метод:
 *
 * Класс Developer имеет метод _startCoding, выводящий в консоль каждые 5 секунд в течение 10 секунд сообщение "Coding..."
 * Класс GuitarPlayer имеет метод _startPlayingGuitar, выводящий в консоль сообщение "Играю на ИНСТРУМЕНТ"
 * Где ИНСТРУМЕНТ - строка instrument
 *
*/

class Human {
    constructor(name, age) {


    }

    _sayHello() {

    }

}
