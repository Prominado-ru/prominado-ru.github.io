# События D7

В Битриксе у любой сущности ORM есть 9 типов событий:

```bash 
Добавление элемента

OnBeforeAdd (fields)
OnAdd (fields)
OnAfterAdd (fields, primary)
```

```bash
Изменение элемента

OnBeforeUpdate (primary, fields)
OnUpdate (primary, fields)
OnAfterUpdate (primary, fields)
```

```bash
Удаление элемента

OnBeforeDelete (primary)
OnDelete (primary)
OnAfterDelete (primary)
```

Пример события для сущности `\Bitrix\Iblock\ElementTable` 

```php
<?php

\Bitrix\Main\EventManager::getInstance()->addEventHandler(
    'iblock',
    '\\Bitrix\\Iblock\\Element::OnBeforeAdd',
    function (\Bitrix\Main\Event $e) {
        echo '<pre style="color: red;">', print_r($e->getParameters(), true), '</pre>';
    }
);
```

Для всех сущностей этого будет достаточно. Постфикс `Table` класса сущности указывать не нужно