
# Prominado Guides: Порталы Битрикс24

## Основные рабочие директории
 - /inside - тут размещаются все кастомные страницы
 - /local/assets - директория для размещения кастомных js и css файлов шаблона
 - /local/cron - cron скрипты
 - /local/ajax - ajax обработчики
 - /local/include - включаемые области
 - /local/php_interface/src - хранилище библиотек

## Кастомизация
Все работа должна происходить в директориях описанных выше. Крайне не желательно изменять файлы самого bitrix т.к. при обновлении все изменения будут утеряны!!!

**Подготовка**

 1. Создаем рабочие директории из списка выше
 2. Копируем `/bitrix/php_interface/init.php` в `/local/php_interface/init.php`
 3. [Подключаем библиотеки по стандарту PSR-4 с помощью composer](https://github.com/iTeeLion/docs/blob/master/Guides/Bitrix.md)

**Шаблон**

Для подключения кастомных js и css файлов используется директория /local/assets включим ее содержимое в шаблон.

Создаем новый файл `/local/php_interface/bx_events.php` и добавляем  `include_once('bx_events.php')` в конец init.php

Добавим в начало файла `/local/php_interface/bx_events.php` строки:

    AddEventHandler("main", "OnProlog", "OnPrologHandler");  
    function OnPrologHandler() {
	    include_once($_SERVER['DOCUMENT_ROOT'] . '/local/assets/init.php');
    }

Создадим файл `/local/assets/init.php` и добавим в него строки:

    global $APPLICATION;  
    // Include custom css files
    $APPLICATION->SetAdditionalCSS('/local/assets/css/custom.css', true);  
    // Include custom js files
    $APPLICATION->AddHeadScript('/local/assets/js/custom.js', true);

Для кастомизации стандартных компонентов следует использовать JS и CSS, а для добавления своих отдельные страницы или включаемые области.
