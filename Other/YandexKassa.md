## Настройка Яндекс.Кассы

Яндекс.Касса обновила протокол и выпустила [SDK](https://github.com/yandex-money/yandex-checkout-sdk-php)

[Официальная документация](https://kassa.yandex.ru/docs/guides/)

## Установка

````bash
composer require yandex-money/yandex-checkout-sdk-php
````

## Создание платежа

Для оплаты необходимо создать платеж. 
В данном примере используется также передача данных о товарах для соблюдения 54-ФЗ.

````php
<?
$client = new \YandexCheckout\Client();
$client->setAuth($shop_id, $secret);
$yandex = $client->createPayment([
    'amount'              => [
        'value'    => '1700.00',
        'currency' => 'RUB'
    ],
    'receipt'             => [
        'items'           => [
            [
                'description' => 'Товар 1',
                'quantity'    => '1',
                'amount'      => [
                    'value'    => '200.00',
                    'currency' => 'RUB'
                ],
                'vat_code'    => '1'
            ],
            [
                'description' => 'Товар 2',
                'quantity'    => '1',
                'amount'      => [
                    'value'    => '1500.00',
                    'currency' => 'RUB'
                ],
                'vat_code'    => '1'
            ]
        ],
        'tax_system_code' => '1',
        'phone'           => '79990000000',
        'email'           => 'info@test.com'
    ],
    'payment_method_data' => [
        'type' => 'bank_card'
    ],
    'confirmation'        => [
        'type'       => 'redirect',
        'return_url' => 'https://site.ru/local/handlers/yandex.php'
    ]
]);
$data = $yandex->getConfirmation()->jsonSerialize();
// redirect to $data['confirmation_url']
````

## Подтверждение или отклонение платежа
В момент оплаты Яндекс посылает запрос на страницу, указанную в confirmation.return_url

На страницу отправляется информация о транзакции: способ оплаты, идентификатор, сумма и тд.
На стороне сайте необходимо проверить правильность данных (если счет выставлен на 5000, а от Яндекса пришел ответ, что пытаются оплатить 500 рублей – отклюняем транзакцию)

````php
<?

$body = json_decode(file_get_contents('php://input'), true);

$transaction_id = $body['object']['id'];
$is_paid = $body['object']['paid'];
$amount = (int)$body['object']['amount']['value'];

if ($is_paid) {
    $client = new \YandexCheckout\Client();
    $client->setAuth($shop_id, $secret);

    if($amount === '5000') {
        $client->capturePayment([
            'amount' => $body['object']['amount']
        ], $transaction_id);
    } else {
        $client->cancelPayment($transaction_id);
    }
}
````

## Возврат платежа

````php
<?
$client = new \YandexCheckout\Client();
$client->setAuth($shop_id, $secret);
$yandex = $client->createRefund([
    'payment_id' => $transaction_id,
    'amount'              => [
        'value'    => '1700.00',
        'currency' => 'RUB'
    ],
    'receipt'             => [
        'items'           => [
            [
                'description' => 'Товар 1',
                'quantity'    => '1',
                'amount'      => [
                    'value'    => '200.00',
                    'currency' => 'RUB'
                ],
                'vat_code'    => '1'
            ],
            [
                'description' => 'Товар 2',
                'quantity'    => '1',
                'amount'      => [
                    'value'    => '1500.00',
                    'currency' => 'RUB'
                ],
                'vat_code'    => '1'
            ]
        ],
        'tax_system_code' => '1',
        'phone'           => '79990000000',
        'email'           => 'info@test.com'
    ],
    'description' => 'Возрат товаров'
]);
````