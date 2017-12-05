# Prominado Guides: jQuery

## Именование переменных

Переменные содержащие jQuery объект должны начинаться со знака $

````javascript
var $header = $("#header");
var $articles = $("article");
````

Используйте правильно единственное (singular) и множественное (plural) числа

````javascript
var $sidebar = $("#sidebar");
var $articles = $(".article");
````

Правильно указывайте множественное число (plural) для слов исключений:
````javascript
var $child = $("#child");
var $children = $(".child");
````

## Именование функций

Имена функций должны быть короткими и содержательными, избегайте двухсмысленных или бессмысленных наименованией:

````javascript
// bad
function makeGreen() {} // color? background? WAT?
function loadData() {}  // what data?
function error() {}     // error? WTF?
````

К перечисленным функциям возникает слишком много вопросов, сравните со следующим примером:

````javascript
// good
function changeColorToGreen() {}
function loadJSON() {}
function showErrorDialog() {}
````

## События и элементы

Если на какой то элемент нужно повесить событие **не нужно** навешивать его на общий класс.
````javascript
// bad
$(document).on('click', '.article__button', function() {});
````

добавьте ````data```` атрибут к элементу и на него уже вешайте событие

````javascript
// good
$(document).on('click', '[data-show-modal]', function() {});
````

## Callback функции

Для упрощения чтения кода следует избегать использования анонимных функций

````javascript

// bad
// on click handler + callback function
$(document).on('click', '[data-change-color-to-green]', function() {
  $(this).css('color', 'green');
});
````

Повторное использование функции стало невозможным. Сравните:

````javascript

// bad
// on click handler + callback function
$(document).on('click', '[data-change-color-to-green]', changeColorToGreen);

function changeColorToGreen() {
    $(this).css('color', 'green');   
}
````

Наглядней преимущество именования можно оценить в более комплексном примере:

````javascript

// on click handler
$('[data-load-json]').on('click', loadJSON);

// callback with AJAX call
function loadJSON(event) {
  $.ajax('ajax/example.json', {context: event.currentTarget})
    .done(changeColorToGreen)
    .fail(changeColorToRed)
  ;
}

// callback for success
function changeColorToGreen() {
  $(this).css('color', 'green');
}

// callback for error
function changeColorToRed() {
  $(this).css('color', 'red');
}
````

## Кэширование

Если вы пропустили этот момент в учебнике [jQuery для начинающих](http://anton.shevchuk.name/jquery-book/), то повторю ещё разок ПОИСК ЭЛЕМЕНТОВ НЕ КЭШИРУЕТСЯ, следовательно вам надо самостоятельно позаботиться о кэшировании ваших выборок:

````javascript
// bad
$('#sidebar');
// ...
$('#sidebar').css('color', '#ff0');
// ...
$('#sidebar').hide();
````

Подобный код следует переписать:

````javascript
// good
var $sidebar = $('#sidebar');
// ...
$sidebar.css('color', '#ff0');
// ...
$sidebar.hide();
````