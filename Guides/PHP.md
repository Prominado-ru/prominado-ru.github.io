# Prominado Guides: PHP

В качестве стандартов оформления PHP-кода приняты стандарты от [PHP Framework Interop Group](http://www.php-fig.org/):

* [PSR-0 – Стандарт автозагрузки](http://svyatoslav.biz/misc/psr_translation/#_PSR-0) - устарел
* [PSR-1 – Базовый стандарт оформления кода](http://svyatoslav.biz/misc/psr_translation/#_PSR-1)
* [PSR-2 – Рекомендации по оформлению кода](http://svyatoslav.biz/misc/psr_translation/#_PSR-1)
* [PSR-3 – Интерфейс протоколирования](http://svyatoslav.biz/misc/psr_translation/#_PSR-1)
* [PSR-4 – Улучшенная автозагрузка](http://svyatoslav.biz/misc/psr_translation/#_PSR-1)

## Общие правила
- Не используйте двойные кавычки

>Когда сервер обрабатывает код, он проверяет все содержимое двойных кавычек на наличие переменных, констант и другое. Это занимает время. А то, что находится между одинарными кавычками сервер обрабатывает как готовый текст и ему все равно, что там находится.

````php
// bad
$data["user"] = [];

// good
$data['user'] = [];
````

- Не используйте магические цифры
````php
// bad
CIBlockElement::GetList([], ['IBLOCK_ID' => 5], false, false, ['IBLOCK_ID', 'ID']);

// good
$catalog_iblock_id = 5;

CIBlockElement::GetList([], ['IBLOCK_ID' => $catalogIblockId], false, false, ['IBLOCK_ID', 'ID']);
````

Предпочтительнее использовать константы или классы:

````php
class Settings 
{
    const CATALOG_IBLOCK_ID = 5;
}

CIBlockElement::GetList([], ['IBLOCK_ID' => Settings::CATALOG_IBLOCK_ID], false, false, ['IBLOCK_ID', 'ID']);
````

Чтобы упростить жизнь себе и другим, используйте автоформатирование кода в PhpStorm:

```Preferences -> Editor -> Code Style -> PHP -> Set from PSR1/PSR2```

Также настоятельно рекомендую установить плагин [Php Inspections (EA Extended)](https://github.com/kalessil/phpinspectionsea/blob/master/docs/getting-started.md)