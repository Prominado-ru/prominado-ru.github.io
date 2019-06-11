# Установка и настройка

### Установка ПО:
* [Node.js](https://nodejs.org/en/download/) – без него никак ¯\_(ツ)_/¯
* [nmp](https://www.npmjs.com) – менеджер пакетов, практически все ставится им
* [Expo XDE](https://expo.io/tools) – Надстройка над React Native
* [exp](https://docs.expo.io/versions/latest/guides/exp-cli.html) – Expo CLI
* [Homebrew](https://brew.sh/) – Установщик инструментов, которых нет в MacOS
* [watchman](https://facebook.github.io/watchman/docs/install.html) – Отслеживает измененные файлы

### Начало проекта


### Установка библиотек

После установки библиотек необходимо выполнить в папке проекта
````bash
watchman watch-del-all 
rm -rf node_modules/ && npm install
rm -rf $TMPDIR/react-*
````