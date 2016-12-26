# Битрикс-ORM

## Что это такое

>ORM (англ. Object-relational mapping, рус. Объектно-реляционное отображение) - технология программирования, которая связывает базы данных с концепциями объектно-ориентированных языков программирования, создавая «виртуальную объектную базу данных». (Wikipedia)

## Для чего это нужно?

Позволяет сделать операции выборки и сохранения в БД однотипными, с одинаковыми параметрами и фильтрами. По возможности, таблицы сущностей должны обслуживаться с минимумом нового кода. Стандартные события добавления/изменения/удаления должны быть доступны автоматически.

## How To

К примеру, нам надо сделать форму обратной связи. Мы не хотим использовать инфоблоки, а ~~редакция не позволяет использовать модуль форм~~ формы мы тоже не хотим использовать.
 
* Для начала создадим таблицу в базе данных со всеми необходимыми нам полями. По правильному - нам нужно написать модуль, который при установке будет создавать эту таблицу.
* В папке /(bitrix|local)/modules/prominado.(module)/lib/ создаем файл, который будет отвечать за взаимодействие с базой данных
 
В нашем примере должен появиться файл ```/bitrix/modules/prominado.feedback/lib/messages.php```
С содержимым:
 
```php

// Нэймспейс - обязательно код модуля. prominado.feedback = Prominado\Feedback
namespace Prominado\Feedback;

use \Bitrix\Main;
use \Bitrix\Main\Type\DateTime;

// название класса - СущностьTable. В данном случае - MessagesTable
class MessagesTable extends Main\Entity\DataManager
{
	public static function getTableName()
	{
	    // Название нашей таблицы в базе
		return "b_prominado_messages";
	}
	
	public static function getMap()
	{
	    // Описываем все поля нашей таблицы   
		return array(
            new Main\Entity\IntegerField("ID", [
                "primary" => true,
                "autocomplete" => true,
                "title" => "Идентификатор",
            ]),
            new Main\Entity\DatetimeField("TIMESTAMP_X", [
                "default_value" => new Main\Type\DateTime(),
                "title" => "Дата отправки",
            ]),
            new Main\Entity\IntegerField("USER_ID", [
                "title" => "Идентификатор пользователя",
            ]),
            
            // Реализуем связку с сущностью User
            new Main\Entity\ReferenceField(
                "USER",
                "\Bitrix\Main\User",
                ["=this.USER_ID" => "ref.ID"],
                ["join_type" => "INNER"]
            ),
            
            new Main\Entity\StringField("MESSAGE", [
                "title" => "Сообщение",
                "required" => true
            ]),
            new Main\Entity\BooleanField("PROCESSED", [
                "title" => "Обработано",
                "values" => Array("Y", "N"),
                "default" => "N"
            ]),
        );
	}
	
	
	// Если нужно переопределить логику стандартного метода
	public static function add(array $data)
    {        
        return parent::add($data);
    }
}
```

## Как использовать

```php
$res = \Prominado\Feedback\MessagesTable::add([
    "USER_ID" => 1,
    "MESSAGE" => "Мое первое сообщение"
]);

if ($res->isSuccess())
{
    echo "Добавлено: "  . $res->getId();
}
else
{
    print_r($res->getErrorMessages());
}


// изменение и удаление
\Prominado\Feedback\MessagesTable::update($id, []);
\Prominado\Feedback\MessagesTable::delete($id);


// выборка
$ord = \Prominado\Feedback\MessagesTable::getList(["filter" => [
            ">=TIMESTAMP_X" => DateTime::createFromUserTime("d.m.Y 10:00:00"),
            "USER_ID" => 1
        ]])->fetchAll();

// Но нам мало получить ID пользователя. Мы еще хотим его имя и электронную почту

$ord = \Prominado\Feedback\MessagesTable::getList([
            "filter" => [
                ">=TIMESTAMP_X" => DateTime::createFromUserTime("d.m.Y 10:00:00"),
                "USER_ID" => 1
            ],
            // Помните ReferenceField? Вот это оно
            // Мы запрашиваем поля NAME и EMAIL из Сущности \Bitrix\Main\User у которой ID равен нашему USER_ID
            "select" => ["USER.NAME", "USER.EMAIL"]
        ])->fetchAll();
```

