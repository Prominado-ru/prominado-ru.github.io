# Prominado Guides: 1С-Битрикс

## Общие рекомендации
- К проекту в phpStorm подключать библиотеку Битрикса (PhpStorm -> Preferences -> Languages & Frameworks -> PHP) и в Include path добавить папку, скачанную [отсюда](https://github.com/matiaspub/bxApiDocs) (Репозиторий обновляется редко, скоро сделаю свой)
- Стараться избегать PHP кода на страницах и оборачивать его в самописный компонент ([пример](https://github.com/Prominado-ru/bitrix-component/))
- `init.php` – там ничего не пишем. В `/local/php_interface/` создаются файлы `functions.php`, `events.php`, `constants.php`, в init же только подключение этих файлов. Надо помнить, что если разместить события в `/local/php_interface/events.php`, то события будут работать только для сайта, которому принадлежит папка `/local/`, для остальных сайтов `/local/` - своя
- Скрипты и стили подключаются штатными функциями `\Bitrix\Main\Page\Asset::getInstance()->add(Js/Css)`.

## Структура сайта
- /local/ajax/ - Ajax скрипты
- /local/cron/ - Cron скрипты
- /local/includes/ - Включаемые области

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

Список предустановленных библиотек: <Дописать>

Остальные библиотеки и фреймворки располагаются в каталогах, названия которых совпадают с названием библиотеки в папке `libs`, при этом сохраняется внутренняя структура дистрибутива.

Пример:

```bash
/local/templates/<название_шаблона>/
├── header.php
├── footer.php
├── styles.css
├── template_styles.css
│
├── components/
|   ├── ..
│
├── images/
|   ├── ..
|
├── libs/
│   ├── fancybox/
|   |   ├── jquery.fancybox.min.js
|   |   ├── jquery.fancybox.css
│   |
│   ├── bxslider/
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

## D7
- Где это возможно, желательно начинать использовать `D7`

## Композер
Если к проекту подключается - [Composer](getcomposer.org), то он инициируется в корне проекта, а в ````init.php```` прописываем
````php
<?
require_once $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';
````

## Версионный контроль
Служебная папка ````vendor```` **обязательно** добавляются в ````.gitignore````
При использовании composer в git должны быть ````composer.lock```` и ````composer.json````

## [Статьи](../Other/Links.md#Битрикс)