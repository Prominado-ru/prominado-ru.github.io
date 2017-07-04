# Работа с Git, PhpStorm и Битрикс24

Небольшая инструкция о том, как сделать работу с нашими иструментами разработки чуточку эффективнее :)

## [Как настроить Git в PhpStorm](VCS.md)

## Настраиваем связку PhpStorm и Битрикс24
1. Открываем настройки ````⌘ + ,```` ````Tools > Tasks````
2. Настраиваем сервер задач:
    * Переходим в ````Tasks > Servers```` и нажимаем на плюсик
    * В выпадающем списке выбираем ````Generic````
    * Переходим на [страницу с вебхуками](https://prominado.bitrix24.ru/marketplace/hook/) в Битрикс24
    * Создаем **входящий** вебхук с правами **задачи и пользователи**
    * В Server URL вставляем ссылку ````https://prominado.bitrix24.ru````
    * Отмечаем **Login Anonymously**
    * По желанию на вкладке Commit Message отмечаем опцию **Add Commit Message**
    * Переходим на Server Configuration
        * в Tasks List URL: 
        ````
        {serverUrl}/rest/<Ваш_ID>/<Ваш_код_вебхука>/task.item.list/?ORDER[TITLE]=asc&FILTER[RESPONSIBLE_ID]=<Ваш_ID>&FILTER[REAL_STATUS][]=1&FILTER[REAL_STATUS][]=2&FILTER[REAL_STATUS][]=3
        ````
        В примере REAL_STATUS фильтруется по 3 значениям (новая, в ожидании, в процессе исполнения). Фильтр можно настроить по своему усмотрению - [как сделать](https://dev.1c-bitrix.ru/rest_help/tasks/task/item/list.php)
        * В Single Task URL: 
        ````
        {serverUrl}/rest/22/rown99crz1aisgyf/task.item.getdata/?TASKID={id}
        ````
        
        **В обоих запросах выбираем метод POST**
        
        * Response Type: **JSON**
        
        * Дальше в таблице соответствия заполняем
        
         | Name    |    Path     |
         |---------|-------------|
         | tasks   | result      |
         | id      | ID          |
         | summary | TITLE        |
         | description | DESCRIPTION |

3. Настраиваем трекер времени
    * Переходим в ````Tasks > Time Tracking````
    * Ставим галочку
    
4. Сохраняем

После всех этих действий в PhpStorm появится вкладка ````Time Tracking````. Если нажать в ней на плюсик, отобразится список задач из Битрикс24.

Плюсы: 
1. Если кто то забывает ставить время в Битрикс24, ~~тот я~~ то можно посмотреть сколько времени потрачено (если работали в админке - увы, вспоминайте)
2. Для каждой задачи можно (нужно) создавать свою ветку в Git