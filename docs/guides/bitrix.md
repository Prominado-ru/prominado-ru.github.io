# 1С-Битрикс

## Общие рекомендации
- К проекту в PhpStorm подключать библиотеку Битрикса (PhpStorm -> Preferences -> Languages & Frameworks -> PHP) и в Include path добавить папку, скачанную [отсюда](https://github.com/Prominado-ru/bxApiDocs)
- Стараться избегать PHP кода на страницах и оборачивать его в самописный компонент ([пример](https://github.com/Prominado-ru/bitrix-component/))
- `init.php` – там ничего не пишем. В `/local/php_interface/` создаем папку `src`, в которой размещаем классы, подключаемые по стандарту PSR-4 с помощью `composer`.
``composer.json``
````json
{
    "name": "prominado/project_name",
    "type": "project",
    "authors": [
        {
            "name": "Prominado",
            "email": "info@prominado.ru"
        }
    ],
    "require": {},
    "autoload": {
        "psr-4": {"App\\": "local/php_interface/src/"}
    }
}
````

````php
<?php
// local/php_interface/init.php
require_once __DIR__ . '/../../vendor/autoload.php';
````

````php
<?php
// local/php_interface/src/Settings.php
namespace App;

class Settings
{
    
}
````

- Скрипты и стили подключаются штатными функциями `\Bitrix\Main\Page\Asset::getInstance()->add(Js/Css)`.

## Структура сайта
Структура сайта создается **разделами**.
Вместо `/about/contacts.php` надо создать раздел `/about/contacts/`

## Служебная структура
- ``/local/ajax/`` - Ajax скрипты
- ``/local/cron/`` - Cron скрипты
- ``/local/includes/`` - Включаемые области

В корне проекта **только** проект, ````bitrix````, ````vendor```` (если используется Composer), ````local```` и ````upload````

## Структура шаблона
- В каталоге шаблона остаются только необходимые для Битрикс файлы - `header.php`, `footer.php`, `styles.css` и т.д. Картинки, шрифты, js-библиотеки – выносятся в отдельные папки.
- `images` - изображения, спрайты, иконки
- `fonts` - шрифты

Часто используемые библиотеки включены в модуль Prominado:Bootstrap. 
Вызываются по необходимости:
```php
CJSCore::Init(['fancybox', 'bxslider']);
```  

Список предустановленных библиотек: 
* ``fancybox`` – [fancyBox3](https://fancyapps.com/fancybox/3/)
* ``bxslider`` – [bxSlider](https://bxslider.com/)
* ``bulma`` – [bulma](https://bulma.io/)
* ``owl`` – [Owl Carousel 2](https://owlcarousel2.github.io/OwlCarousel2/)
* ``inputmask`` – [Masked Input Plugin for jQuery](http://digitalbush.com/projects/masked-input-plugin/)
* ``styler`` – [jQuery Form Styler](http://dimox.name/jquery-form-styler/)

Остальные библиотеки и фреймворки располагаются ``/local/libs/`` в каталогах, названия которых совпадают с названием библиотеки, при этом сохраняется внутренняя структура дистрибутива.

Пример:

```bash
/local/
├── libs/
│   ├── fancybox/
|   |   ├── jquery.fancybox.min.js
|   |   ├── jquery.fancybox.css
│   |
│   ├── bxslider/
|   |   ├── ..
|
├── templates/<название_шаблона>/
│   ├── header.php
│   ├── footer.php
│   ├── styles.css
│   ├── template_styles.css
│
│   ├── components/
|   |   ├── ..
│
│   ├── images/
|   |   ├── ..
|
├── script.js
...
```

## Структура компонентов
- Из комплексного компонента вложенные компоненты выносятся наружу. То есть в шаблоне должно быть так:
```bash
/local/templates/<название_шаблона>/bitrix/
├── news/
│   ├── <название шаблона>/
|   |   ├── news.php
|   |   ├── detail.php
│
├── news.list/
│   ├── <название шаблона>/
|   |   ├── template.php
│
├── news.detail/
│   ├── <название шаблона>/
|   |   ├── template.php
...
```

## Динамические данные
Если на сайте используются динамические данные (например, кнопки "Добавить в избранное / Удалить из избранного" или "Добавить в корзину / В корзине") - *не нужно* эту логику прописывать в шаблоне.
Компонент закэшируется и корректно это работать не будет.

Для данной задачи лучше использовать JS:

````javascript
function getFavorites() {
    var get_favorite = $('[data-js-get-favorite]');
    if (get_favorite.length) {
        $.post('/local/ajax/favorite.php', function (data) {
            var result = JSON.parse(data);
            if (result.response === 'success') {
                $.each(result.items, function (i, item) {
                    get_favorite.find('.element[data-id=' + item + '] .element__heart').addClass('active');
                });
            }
        })
    }
}
````

## D7
- Где это возможно, желательно начинать использовать [D7](https://dev.1c-bitrix.ru/api_d7/)

## Вспомогательные классы

если встречается много условий, например, для определения будет ли выводиться вторая колонка на странице, то вместо того, чтобы прописывать все условия в ``header.php | footer.php``:

````php
if(CSite::InDir('/support/') || CSite::InDir('/some/')) {
    
}

````

лучше вынести проверку в отдельный класс и в шаблоне проверять с помощью него:
````php
if(App\Settings\Page::hasTwoColumns()) {

}
````

## Композер
Если к проекту подключается - [Composer](https://getcomposer.org), то он инициируется в корне проекта, а в ````init.php```` прописываем
````php
<?php

require_once __DIR__ . '/../../vendor/autoload.php';
````

## Версионный контроль
Служебная папка ````vendor```` **обязательно** добавляются в ````.gitignore````
При использовании composer в git должны быть ````composer.lock```` и ````composer.json````
