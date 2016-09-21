# Лайвхаки

## Битрикс

Репозиторий bxApiDocs в последнее время редко обновляется, поэтому для желающих иметь актуальное API следующая инструкция:

```ssh
scp -r user@host.ru:~/www/host.ru/bitrix/modules /Users/Sergey/Documents/Projects/modules/

rm -rf /Users/Sergey/Documents/Projects/modules/*/admin
rm -rf /Users/Sergey/Documents/Projects/modules/*/install
rm -rf /Users/Sergey/Documents/Projects/modules/*/lang
```