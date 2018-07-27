# Prominado Guides: Битрикс24

## Структура шаблона
Изменять шаблон bitrix24 стоит только в исключительных и крайних случаях, т.к. при обнолвении все изменеия будут утрачены. Содержимое следует изменять с помощью JS, а добавлять с помощью включаемях областей (в шаблоне их достаточное количество) или так же с помощью JS.
1. Для подключения сторонних файлов JS/CSS следует создать файл /bitrix/templates/bitrix24/custom/assets.php и подключить его в init.php
```
AddEventHandler("main", "OnPageStart", "assetsInit");
function assetsInit(){
    global $APPLICATION;
    define('ASSETS_PATH', '/bitrix/templates/bitrix24/custom');
    include_once($_SERVER['DOCUMENT_ROOT'].ASSETS_PATH.'/assets.php');
}
```
2. Размещать кастомные файлы следует в соответствующих директориях внутри /bitrix/templates/bitrix24/custom/
```
|bitrix24
|-_custom
| |-css
| | |-styles.css
| | |...
| |-js
| | |-scripts.js
| | |...
| |assets.php
| |...
|-components
|-images
|...
```

## Структура кастомных страниц
Все кастомные скрипты/страницы должны лежать в директории "/portal".
1. Если скрипт/страница дополняет функционал коробочных страниц bitrix24 нужно создавать подобную структуру и в директории portal, на пример: нужно создать страницу дополняющую функционал счетов /crm/invoice/ дополнение нужно создавать в /portal/crm/invoice/. 
2. Если дополнение, на пример, относится только к странице редактирования /crm/invoice/edit/ следует создать и поддиректорию edit: /portal/crm/invoice/edit/.
3. Если скрипт/страница реализует новый функционал, можно создать произвольную структуру /portal/%anypage%/index.php.