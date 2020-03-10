# Настройка PhpStorm

>Для начала необходимо скачать PhpStorm [отсюда](https://www.jetbrains.com/phpstorm/)

## Keymap

Первым делом настраиваем ``Keymap`` (````⌘ + ,```` ````Keymap````) под себя:

Из часто используемых настроек:
- ``Upload to Default Server`` (обычно ````⌘ + S````)
- ``Download from Default Server`` (обычно ````⌘ + Shift + ↓````)

Остальное – все субъективно :)

## Настройка соединения
````⌘ + ,```` ````Build, Execution, Deployment```` ````Deployment```` ````Options````
- Снимаем галочку в ``Promt when overwriting or deleting local items``
- В селекте ``Warn when uploading over newer file`` ставим ``Compare content`` и ставим галочку в ``Notify of remote changes``


## Плагины

Заходим в список плагинов (````⌘ + ,```` ````Plugins````) и устанавливаем из репозитория:
- ``Bitrix Framework Support`` - будет хорошим помощником при работе с битриксом 
- ``Php Inspections (EA Extended)`` - поставить всем обязательно. Помогает избегать очевидных косяков.
