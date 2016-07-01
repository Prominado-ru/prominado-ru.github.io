>Для начала вопрос: а зачем? Зачем вообще следить за стилями кода? Ответ для меня простой: код пишется один раз, а читается потом десятками людей на протяжении многих лет. Следовательно стоимость поддержки кода многократно превышает стоимость написания. А раз так — то стоит потратить немного времени и отформатировать код согласно некому стандарту. (с просторов хабра)

# Стандартизация

## Структура шаблона

- В каталоге шаблона остаются только необходимые для Битрикс файлы - `header.php`, `footer.php`, `styles.css` и т.д.
- `images` - изображения, спрайты, иконки
- `fonts` - шрифты
- библиотеки и фреймворки располагаются в каталогах, названия которых совпадают с названием библиотеки в папке `vendor`, при этом сохраняется внутренняя структура дистрибутива.

Пример:

```bash
/local/templates/<название_шаблона>/
├── header.php
├── footer.php
├── styles.css
├── templaye_styles.css
│
├── components/
|   ├── ..
│
├── images/
|   ├── ..
|
├── vendor/
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

## Структура служебных файлов
- /local/ajax/ - Ajax скрипты
- /local/cron/ - Cron скрипты

## Битрикс
- К проекту в phpStorm подключать библиотеку Битрикса (PhpStorm -> Preferences -> Languages & Frameworks -> PHP) и в Include path добавить папку, скачанную [отсюда](https://github.com/matiaspub/bxApiDocs)
- Из комплексного компонента выносить всю дичь. То есть в шаблоне должно быть так:
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
- Весь PHP код на странице стараться минимизировать. Если неизбежно, то обернуть всю логику в самописный компонент ([пример](https://github.com/Prominado-ru/bitrix-component/)) и на странице размещать именно компонент
- init.php. Там вообще ничего не размещаем. в /local/php_interface/ создаем файлы CFunctions.php, CEvents.php и в них размещаем логику, в init же только подключение этих файлов. Надо помнить, что если разместить события в /local/php_interface/CEvents.php, то события будут работать только для сайта, которому принадлежит папка /local/, для остальных сайтов /local/ - своя


## PHP
- Все классы оборачивать своим namespace (лучше по названию проекта, а не \Prominado\)
- Все большие скрипты (импорты, классы) - документировать. если не phpdoc, то хотя бы за что отвечает функция
- Оформление кода - [PSR-1](http://svyatoslav.biz/misc/psr_translation/#_PSR-1), [PSR-2](http://svyatoslav.biz/misc/psr_translation/#_PSR-2), [Битрикс](https://dev.1c-bitrix.ru/learning/course/index.php?COURSE_ID=43&LESSON_ID=5759)
- Скрипты и стили подключаются штатными функциями \Bitrix\Main\Page\Asset::getInstance()->add(Js/Css)
- НЕЛЬЗЯ вставлять код вызова компонента внутрь файла template.php другого компонента

## D7
- Где это возможно, желательно начинать использовать D7
  - [Аналоги любимых функций](http://www.intervolga.ru/blog/bitrix/d7-analogi-lyubimykh-funktsiy-v-1s-bitriks/) от Интерволги
  - [Application и Context](https://mrcappuccino.ru/blog/post/d7-application-and-context-objects) от Mr.Cappuccino
  - [Работа с файловой системой](https://mrcappuccino.ru/blog/post/work-with-file-system-bitrix-d7) от Mr.Cappuccino
  - [Серверные переменные](http://blog.d-it.ru/dev/d7-object-server-work-correctly-with-server-variables/) от Антона Долганина
  - [Остальное](http://dev.1c-bitrix.ru/api_d7/) от Битрикса

## CSS
- [БЭМ](https://ru.bem.info/methodology/naming-convention/#Стиль-Гарри-Робертса). Если не все принципы, то хотя бы методологию наименования. 
