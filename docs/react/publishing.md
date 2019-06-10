## React Native Публикация

### Apple

Запуск компиляции проекта 

````bash
cd ~/Projects/<Application_folder>/
exp build:ios
````

Отслеживание статуса компиляции
````bash
exp build:status
````

В результате получим ссылку на ``.ipa`` файл

````bash
[exp] iOS:
[exp] IPA: https://exp-shell-app-assets.s3-us-west-1.amazonaws.com/ios-4f9b8a44-e427-4572-a016-ea17429b19ab-archive.ipa
````

Скачиваем файл и запускаем ``Application Loader`` 

### Android