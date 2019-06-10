# Консольные скрипты

Тяжелые скрипты (ипорты, парсеры) желательно писать, чтобы их можно было запускать в консоли

1. Можно использовать [консольного джедая](http://opensource.notamedia.ru/console-jedi/) от Notamedia (как использовать напишу отдельно)
2. Адаптировать текущие скрипты для работы в консоли

Пример кода:

````php
#!/opt/php/7.0-bx-optimized/bin/php-cgi

<?
$_SERVER['DOCUMENT_ROOT'] = '/home/bitrix/ext_www/site.ru';

define('NO_KEEP_STATISTIC', true);
define('NOT_CHECK_PERMISSIONS', true);

require $_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/prolog_before.php';
require $_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/classes/general/csv_data.php';

set_time_limit(0);

// тут код

require $_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/epilog_after.php';
````

в частности, у reg.ru при вызове /usr/bin/php запускается php 5.3, поэтому в начале мы переопределили интерпретатор php ([пути до других версий](https://www.reg.ru/support/hosting-i-servery/hosting-sajtov/yazyki-programmirovaniya-i-skripty/kak-smenit-versiyu-php))

Вызывать скрипты или вешать на крон так:
````bash
cd ~/home/bitrix/ext_www/site.ru/local/cli/ && ./script.php
```` 

не забывая проставить права
````bash
chmod +x script.php
````