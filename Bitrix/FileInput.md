# Drag'n'Drop

Если нужна drag'n'drop загрузка файлов, в 1С-Битрикс для этого есть готовый класс:

````php
/**
 * @param upload boolean Разрешить загрузку файлов
 * @param medialib boolean
 * @param fileDialog boolean
 * @param cloud boolean
 * @param maxCount int Максимальное количество файлов (0 - без ограничений)
 * @param maxSize int Максимальный размер файла
 * @param allowUpload string Разрешить загрузку (A - все / I - только картинки / F - только файлы)
 * @param allowUploadExt string Разрешенные расширения файлов через запятую (doc, xls, xlsx)
 * @param allowSort string Разрешить сортировать файлы (Y - да / N - нет)
 * @param name string Название, которое будет содержать описание файлов в $_POST
 * @param description boolean Разрешить добавлять описание к файлам 
 * @param delete boolean Разрешить удалять файлы 
 * @param edit boolean Разрешить редактировать файлы (картинки)
 * @param thumbSize int Размер превью
 **/

$fileInput = FileInput::createInstance([
    'upload'      => true,
    'allowUpload' => 'F',
    'medialib'    => false,
    'fileDialog'  => false,
    'cloud'       => false,
    'name'        => 'FILES[n#IND#]',
    'delete'      => true,
    'description' => false,
    'edit'        => false,
    'maxCount'    => 5
]);

/**
* @param $showFiles int/array Идентификатор файла или массив идентификаторов, которые будут выведены в форме загрузки
**/
echo $fileInput->show($showFiles);
````

После отправки формы в ``$_POST`` придет массив:

````
Array
(
    [FILES] => Array
        (
            [n0] => Array
                (
                    [name] => Первый докуумент.docx
                    [type] => application/vnd.openxmlformats-officedocument.wordprocessingml.document
                    [tmp_name] => /BXTEMP-2018-01-11/21/bxu/main/d656a066df26990537dd06bb0f085304/file1515654479379/default
                    [size] => 6977695
                    [error] => 
                )

            [n1] => Array
                (
                    [name] => Второй докуумент.docx
                    [type] => application/vnd.openxmlformats-officedocument.wordprocessingml.document
                    [tmp_name] => /BXTEMP-2018-01-11/21/bxu/main/d656a066df26990537dd06bb0f085304/file1515655436787/default
                    [size] => 20578
                    [error] => 
                )

        )
)
````

## Ограничения
* Сохранять файлы нужно методом ``\CIBlock::makeFileArray()``. ```\CFile::MakeFileArray()``` **работать не будет**.
* Загрузка файлов возможна **только зарегистрированным пользователям**. Использование класса для анонимных форм не рекомендуется