# Гриды и фильтр в Битриксе

>Собственно что это и зачем? Мы часто делаем всякие крутые CRM'ки, системы учета и прочие internal-use-only порталы.
>В Битриксе появился инструмент (симпатичный) для вывода таблиц и фильтров к ним.

## Подготовка
За фильтр и таблицу отвечают 2 компонента - main.ui.filter и main.ui.grid соответственно.
Они есть даже в редакции "Первый сайт", поэтому использовать можно всегда

## main.ui.filter
Выводится, как обычный компонент Битрикса
```php
<?php

/**
* @param FILTER_ID string Идентификатор фильтра (должен быть уникальным)
* @param GRID_ID string Идентификатор грида к которому применяем фильтр
* @param FILTER array Массив с полями для фильтрации
* @param ENABLE_LABEL bool Показывать название полей или нет
* @param ENABLE_LIVE_SEARCH bool Будет ли доступна live-фильтрация
* 
*/

$APPLICATION->IncludeComponent('bitrix:main.ui.filter', '', [
    'FILTER_ID' => 'report_list',
    'GRID_ID' => 'report_list',
    'FILTER' => [
        ['id' => 'DATE', 'name' => 'Дата', 'type' => 'date'],
        ['id' => 'IS_SPEND', 'name' => 'Тип операции', 'type' => 'list', 'items'  => ['' => 'Любой', 'P' => 'Поступление', 'M' => 'Списание'], 'params' => ['multiple' => 'Y']],
        ['id' => 'AMOUNT', 'name' => 'Сумма', 'type' => 'number'],
        ['id' => 'PAYER_INN', 'name' => 'ИНН Плательщика', 'type' => 'number'],
        ['id' => 'PAYER_NAME', 'name' => 'Плательщик'],
    ],
    'ENABLE_LIVE_SEARCH' => true,
    'ENABLE_LABEL' => true
]);

```

## main.ui.grid
Когда фильтр у нас подготовлен, займемся выводом таблицы

```php
<?php

/**
* 
* @param GRID_ID string Идентификатор грида (такой же указывали у фильтра)
* @param COLUMNS array Массив с head таблицы
* @param ROWS array Массив с значениями таблицы, действиями в контекстном меню
* @param SHOW_ROW_CHECKBOXES bool Показывать чекбоксы у строк для множественных действий
* @param NAV_OBJECT object Объект для постранички
* @param AJAX_MODE string Использовать ли ajax режим
* @param AJAX_ID string Ajax ID Берется из компоента фильтра
* @param PAGE_SIZES array Массив для селекта с выбором кол-ва элементов на странице
* @param AJAX_OPTION_JUMP string
* @param SHOW_CHECK_ALL_CHECKBOXES bool Показывать "Выбрать все"
* @param SHOW_ROW_ACTIONS_MENU bool
* @param SHOW_GRID_SETTINGS_MENU bool
* @param SHOW_NAVIGATION_PANEL bool 
* @param SHOW_PAGINATION bool 
* @param SHOW_SELECTED_COUNTER bool Показывать "Выбрано элементов"
* @param SHOW_TOTAL_COUNTER bool Показывать "Всего элементов"
* @param SHOW_PAGESIZE bool Выводить селект с выбором кол-ва элементов на странице 
* @param SHOW_ACTION_PANEL bool
* @param ALLOW_COLUMNS_SORT bool
* @param ALLOW_COLUMNS_RESIZE bool
* @param ALLOW_HORIZONTAL_SCROLL bool Будет доступен горизонтальный скролл
* @param ALLOW_SORT bool Разрешить сортировку
* @param ALLOW_PIN_HEADER bool Разрешать закреплять шапку таблицы
* @param AJAX_OPTION_HISTORY bool
* 
*/

$grid_options = new Bitrix\Main\Grid\Options('report_list');
$sort = $grid_options->GetSorting(['sort' => ['DATE' => 'DESC'], 'vars' => ['by' => 'by', 'order' => 'order']]);
$nav_params = $grid_options->GetNavParams();

$nav = new Bitrix\Main\UI\PageNavigation('report_list');
$nav->allowAllRecords(true)
    ->setPageSize($nav_params['nPageSize'])
    ->initFromUri();
        
$filter = [];
$filterOption = new Bitrix\Main\UI\Filter\Options('report_list');
$filterData = $filterOption->getFilter([]);

foreach ($filterData as $key => $value) {
    // собираем фильтр
}

$list = [];
$res = MyORMTable::getList([
    'order'       => $sort['sort'],
    'select'      => ['*'],
    'filter'      => $filter,
    'offset'      => $nav->getOffset(),
    'limit'       => $nav->getLimit(),
    'count_total' => true,
]);

foreach ($res->fetchAll() as $ar) {
    $list[] = [
        'data' => [
         'ID' => $ar['ID'],
         'DATE' => $ar['DATE'],   
        ]
    ];
}

$APPLICATION->IncludeComponent('bitrix:main.ui.grid', '', [
    'GRID_ID' => 'report_list',
    'COLUMNS' => [
        ['id' => 'ID', 'name' => 'ID', 'sort' => 'ID', 'default' => true],
        ['id' => 'DATE', 'name' => 'Дата', 'sort' => 'DATE', 'default' => true],    
    ],
    'ROWS' => $list,
    'SHOW_ROW_CHECKBOXES' => false,
    'NAV_OBJECT' => $nav,
    'AJAX_MODE' => 'Y',
    'AJAX_ID' => \CAjax::getComponentID('bitrix:main.ui.grid', '.default', ''),
    'PAGE_SIZES' => [
        ['NAME' => "5", 'VALUE' => '5'],
        ['NAME' => '10', 'VALUE' => '10'],
        ['NAME' => '20', 'VALUE' => '20'],
        ['NAME' => '50', 'VALUE' => '50'],
        ['NAME' => '100', 'VALUE' => '100']
    ],
    'AJAX_OPTION_JUMP'          => 'N',
    'SHOW_CHECK_ALL_CHECKBOXES' => true,
    'SHOW_ROW_ACTIONS_MENU'     => true,
    'SHOW_GRID_SETTINGS_MENU'   => true,
    'SHOW_NAVIGATION_PANEL'     => true,
    'SHOW_PAGINATION'           => true,
    'SHOW_SELECTED_COUNTER'     => true,
    'SHOW_TOTAL_COUNTER'        => true,
    'SHOW_PAGESIZE'             => true,
    'SHOW_ACTION_PANEL'         => true,
    'ALLOW_COLUMNS_SORT'        => true,
    'ALLOW_COLUMNS_RESIZE'      => true,
    'ALLOW_HORIZONTAL_SCROLL'   => true,
    'ALLOW_SORT'                => true,
    'ALLOW_PIN_HEADER'          => true,
    'AJAX_OPTION_HISTORY'       => 'N'
]);

```