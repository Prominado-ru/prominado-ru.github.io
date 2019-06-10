# PHP Хаки

В init.php нельзя пользоваться `CMain::ShowViewContent()`, но можно использовать такую функцию-обертку над `AddViewContent()`:

````
function AddViewContentFromFile($spot, $file, $pos){
    global $APPLICATION;
    ob_start();
    include_once($file);
    $content = ob_get_contents();
    ob_end_clean();
    $APPLICATION->AddViewContent($spot, $content, $pos);
}
````