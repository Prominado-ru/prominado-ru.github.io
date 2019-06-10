# Schema.org

При разработке используем наиболее популярную микроразметку

обязательность полей учитывается на основе [Яндекс.Валидатора](https://webmaster.yandex.ru/tools/microtest/)

## [Organization](http://schema.org/Organization)

**Обязательные поля:**
- name
- address

**Пример:**
````html
<div itemscope itemtype="http://schema.org/Organization">
    <span itemprop="name">Prominado</span>
    <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
    Адрес:
        <span itemprop="streetAddress">ул. Ушинского, 38/2</span>
        <span itemprop="postalCode">150000</span>
        <span itemprop="addressLocality">Ярославль, Россия</span>
    </div>
    Телефон:<span itemprop="telephone">+7 (4852) 288-277</span>,
    Эл. почта: <span itemprop="email">info@prominado.ru</span>
    Сотрудники:
    <span itemprop="employee" itemscope itemtype="http://schema.org/Person">
        <span itemprop="name">Александр</span>
    </span>,
    <span itemprop="employee" itemscope itemtype="http://schema.org/Person">
        <span itemprop="name">Сергей</span>
    </span>,
    <span itemprop="employee" itemscope itemtype="http://schema.org/Person">
        <span itemprop="name">Евгений</span>
    </span>
</div>
````

## [Product](http://schema.org/Product)

**Обязательные поля:**
- offers
- description

**Пример:**
````html
<div itemscope itemtype="http://schema.org/Product">
    <img itemprop="image" src="bitrix-start.jpg" alt="1С-Битрикс: Управление стартом"/>
    <span itemprop="name">1С-Битрикс: Управление стартом</span>
    <span itemprop="description">1С-Битрикс - CMS, система управления интернет проектами, создание веб-проектов, система управления внутренним порталом компании</span>
    <div itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
        <span itemprop="ratingValue">90</span> / <span itemprop="bestRating">100</span>
        (проголосовало: <span itemprop="ratingCount">24</span> человека)
    </div>
    <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">
        <span itemprop="name">1С-Битрикс: Управление стартом – Старт</span>
        <a itemprop="url" href="/bitrix/start/">Купить за 5 400 руб.</a>
        <meta itemprop="priceCurrency" content="RUB" />
        <meta itemprop="price" content="5400.00" />
    </div>
    <div itemprop="offers" itemscope itemtype="http://schema.org/Offer">
        <span itemprop="name">1С-Битрикс: Управление стартом – Стандарт</span>
        <a itemprop="url" href="/bitrix/standart/">Купить за 15 900 руб.</a>
        <meta itemprop="priceCurrency" content="RUB" />
        <meta itemprop="price" content="15900.00" />
    </div>
  </div>
</div>
````

## [Offer](http://schema.org/Offer)

**Обязательные поля:**
- priceCurrency
- price

**Пример:**
````html
<div itemscope itemtype="http://schema.org/Offer">
        <span itemprop="name">1С-Битрикс: Управление стартом – Стандарт</span>
        <a itemprop="url" href="/bitrix/standart/">Купить за 15 900 руб.</a>
        <meta itemprop="priceCurrency" content="RUB" />
        <meta itemprop="price" content="15900.00" />
    </div>
````

## [Person](http://schema.org/Person)

**Обязательные поля:**
нет 

**Пример:**
````html
<div itemscope itemtype="http://schema.org/Person">
    <span itemprop="name">Виктор Сергеевич</span>
    <img src="victor.jpg" itemprop="image" alt="Виктор Сергеевич"/>
    <span itemprop="jobTitle">Умный офисный помощник</span>
    <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
        <span itemprop="streetAddress">ул. Ушинского, 38/2</span>
        <span itemprop="addressLocality">Ярославль</span>,
        <span itemprop="addressRegion">Ярославская область</span>
        <span itemprop="postalCode">150000</span>
      </div>
    <span itemprop="telephone">+7 (4852) 288-277</span>
    <a href="mailto:info@prominado.ru" itemprop="email">info@prominado.ru</a>
    Сайт Виктора Сергеевича: <a href="https://prominado.ru/portfolio/victor/" itemprop="url">https://prominado.ru/portfolio/victor/</a>
</div>
````


## [Event](http://schema.org/Event)

**Обязательные поля:**
нет

**Пример:**
````html
<div itemscope itemtype="http://schema.org/Event">
    <div itemprop="startDate" content="2017-12-29T22:00">29 декабря в 22:00</div>
    <div itemprop="name">Корпоратив в Prominado</div>
    <div itemprop="location" itemscope itemtype="http://schema.org/Place">
        <span itemprop="telephone">+7 (4852) 288-277</span>
        <span itemprop="name">Студия Prominado</span>
        <div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
            <span itemprop="streetAddress">ул. Ушинского, 38/2</span><br>
            <span itemprop="addressLocality">Ярославль</span>,
            <span itemprop="addressRegion">Ярославская область</span>
            <span itemprop="postalCode">150000</span>
        </div>
    </div>
</div>
````