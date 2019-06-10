# HTML и CSS

## HTML
### Общие правила
* Стандарт - HTML5: ``<!DOCTYPE html>``
* Валидный HTML - используем сервис W3C HTML Validator (а также не забываем правильно настроить PhpStorm)
* Использование inline стилей и обработчиков событий НЕДОПУСТИМО, от слова совсем
* Избегайте использования блоков ``<style>`` и ``<script>``, подключайте внешние скрипты и стили, даже если там «одна маленькая функция»
* Не используйте ``&mdash;``, ``&quot;`` и т.д. в тексте

### Правила форматирования
* Каждый блочный элемент должен начинаться с новой строки
* Дочерние элементы должны иметь отступы относительно родительского элемента
* Теги и атрибуты должны быть строчными (lowercase)
* Значение атрибутов должны заключаться в двойные кавычки: ``<img src="/img.jpg" alt="image alt">``
* Порядок атрибутов должен быть единообразным

### Сборка страницы
* Если какие-то элементы имеют разные состояния в зависимости от условий, реализовывать это необходимо _модификаторами_ элементов или их родителя.
````html
<!-- bad -->
<style>
    .catalog__item {
        width: 20%;
    }
    .main-page .catalog__item {
        width: 25%;
    }
</style>
<div class="page main-page">
    <header />
    <breadcrumbs />
    <somethingElse />
    <div class="catalog">
        <div class="catalog__item"></div>
        <div class="catalog__item"></div>
        <div class="catalog__item"></div>
    </div>
    <footer />
</div>

<!-- normal -->
<style>
    .catalog__item {
        width: 20%;
    }
    .has-large-items .catalog__item {
        width: 25%;
    }
</style>
<div class="page">
    <header />
    <breadcrumbs />
    <somethingElse />
    <div class="catalog has-large-items">
        <div class="catalog__item"></div>
        <div class="catalog__item"></div>
        <div class="catalog__item"></div>
    </div>
    <footer />
</div>

<!-- good -->
<style>
    .catalog__item {
        width: 20%;
    }
    .catalog__item.is-large {
        width: 25%;
    }
</style>
<div class="page">
    <header />
    <breadcrumbs />
    <somethingElse />
    <div class="catalog">
        <div class="catalog__item is-large"></div>
        <div class="catalog__item is-large"></div>
        <div class="catalog__item is-large"></div>
    </div>
    <footer />
</div>

````

### Переключатели
Если необходимо сделать переключатель (выбор пола пользователя, выбор службы доставки итд) - не нужно извращаться с ``javascript``.
Используйте обычные ``radio`` и ``checkbox`` переключатели.
````html
<style>
    .gender__item input[type=radio] {
        display: none;
    }
    .gender__item input[type=radio] + .gender__name {
        // обычное состояние
    }
    .gender__item input[type=radio]:checked + .gender__name {
        // выбранное состояние
    }
</style>
<div class="gender">
    <label for="gender_m" class="gender__item">
        <input type="radio" name="gender" value="m" id="gender_m" />
        <span class="gender__name">Мужской</span>
    </label>
    <label for="gender_f" class="gender__item">
        <input type="radio" name="gender" value="f" id="gender_f" />
        <span class="gender__name">Женский</span>
    </label>
</div>
````

## CSS
### Общие правила
* Названия селекторов - только на английском языке
* Валидный CSS - используем сервис W3C CSS validator (а также не забываем правильно настроить PhpStorm)
* Не используйте #ID в CSS, у них нет никаких преимуществ перед классами, но при этом - высокая специфичность и отсутствие возможности повторного использования
* Используйте минимально необходимую вложенность селектора, если работает ``.nav-head``, то не нужно прописывать ``.nav .nav-head``, результат тот же
* Не квалифицируйте селектор без необходимости, не стоит писать ``ul.nav``, если можно обойтись лишь ``.nav``
* При выборе имени класса следует помнить, что имя должно однозначно указывать на назначение либо содержание элементов, но никак не визуальные атрибуты
* Наименование классов согласно [БЭМ'у](https://ru.bem.info/methodology/naming-convention/#Стиль-Гарри-Робертса)

````html
<div class="block">
    <div class="block__item">
        <div class="block__text is-warning is-strong">Text</div>
    </div>
</div>
````

* У тэгов стили **не указываются**
````css
/* bad */
input, 
select {
     
}

/* normal */
.form input, 
.form select {
     
}

/* good */
.input,
.select {
     
}

````

### Правила форматирования
* Теги, классы, свойства - всё в нижнем регистре (lowercase)
* При перечислении селекторов каждый из них должен быть записан с новой строки
* Между селектором и открывающей фигурной скобочкой должен быть пробел
* При описании свойств добавляйте пробел только после двоеточия
* Каждое новое свойство следует записывать с новой строки
* В конце строчки со свойствами следует писать точку с запятой
* При указании цвета, не используйте именованные цвета: пишите color: ``#ff0;`` вместо ``color:red;``
* Для отключение границ, следует использовать ``border: 0;`` вместо ``border: none``;
* Закрывающаяся фигурная скобочка должна быть на новой строке
* Между блоками правил должна быть пустая строка

## Минификация svg
Для оптимизация svg используется [svgo](https://github.com/svg/svgo/blob/master/README.ru.md)
````bash
npm install svgo -g
find images -name *.svg -print0 | xargs -0 -L 1 svgo
````

## Плагины
Если какую-то задачу решает уже готовый проверенный веками плагин, пожалуйста, используйте его, не нужно велосипеды изобретать.
[Список часто используемых плагинов](../other/plugins.md)