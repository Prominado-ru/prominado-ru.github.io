(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{171:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("ul",[a("li",[t._v("К проекту в PhpStorm подключать библиотеку Битрикса (PhpStorm -> Preferences -> Languages & Frameworks -> PHP) и в Include path добавить папку, скачанную "),a("a",{attrs:{href:"https://github.com/Prominado-ru/bxApiDocs",target:"_blank",rel:"noopener noreferrer"}},[t._v("отсюда"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("Стараться избегать PHP кода на страницах и оборачивать его в самописный компонент ("),a("a",{attrs:{href:"https://github.com/Prominado-ru/bitrix-component/",target:"_blank",rel:"noopener noreferrer"}},[t._v("пример"),a("OutboundLink")],1),t._v(")")]),t._v(" "),t._m(2)]),t._v(" "),t._m(3),t._m(4),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("Часто используемые библиотеки включены в модуль Prominado:Bootstrap.\nВызываются по необходимости:")]),t._v(" "),t._m(14),a("p",[t._v("Список предустановленных библиотек:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("fancybox")]),t._v(" – "),a("a",{attrs:{href:"https://fancyapps.com/fancybox/3/",target:"_blank",rel:"noopener noreferrer"}},[t._v("fancyBox3"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("code",[t._v("bxslider")]),t._v(" – "),a("a",{attrs:{href:"https://bxslider.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("bxSlider"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("code",[t._v("bulma")]),t._v(" – "),a("a",{attrs:{href:"https://bulma.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("bulma"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("code",[t._v("owl")]),t._v(" – "),a("a",{attrs:{href:"https://owlcarousel2.github.io/OwlCarousel2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Owl Carousel 2"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("code",[t._v("inputmask")]),t._v(" – "),a("a",{attrs:{href:"http://digitalbush.com/projects/masked-input-plugin/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Masked Input Plugin for jQuery"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("code",[t._v("styler")]),t._v(" – "),a("a",{attrs:{href:"http://dimox.name/jquery-form-styler/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jQuery Form Styler"),a("OutboundLink")],1)])]),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("Пример:")]),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._v(" "),a("p",[t._v("Для данной задачи лучше использовать JS:")]),t._v(" "),t._m(22),t._m(23),t._v(" "),a("ul",[a("li",[t._v("Где это возможно, желательно начинать использовать "),a("a",{attrs:{href:"https://dev.1c-bitrix.ru/api_d7/",target:"_blank",rel:"noopener noreferrer"}},[t._v("D7"),a("OutboundLink")],1)])]),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),a("p",[t._v("лучше вынести проверку в отдельный класс и в шаблоне проверять с помощью него:")]),t._v(" "),t._m(27),t._m(28),t._v(" "),a("p",[t._v("Если к проекту подключается - "),a("a",{attrs:{href:"https://getcomposer.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Composer"),a("OutboundLink")],1),t._v(", то он инициируется в корне проекта, а в "),a("code",[t._v("init.php")]),t._v(" прописываем")]),t._v(" "),t._m(29),t._m(30),t._v(" "),t._m(31)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"_1с-битрикс"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1с-битрикс","aria-hidden":"true"}},[this._v("#")]),this._v(" 1С-Битрикс")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"общие-рекомендации"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#общие-рекомендации","aria-hidden":"true"}},[this._v("#")]),this._v(" Общие рекомендации")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("li",[a("code",[t._v("init.php")]),t._v(" – там ничего не пишем. В "),a("code",[t._v("/local/php_interface/")]),t._v(" создаем папку "),a("code",[t._v("src")]),t._v(", в которой размещаем классы, подключаемые по стандарту PSR-4 с помощью "),a("code",[t._v("composer")]),t._v(".\n"),a("code",[t._v("composer.json")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prominado/project_name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"project"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"authors"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Prominado"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"info@prominado.ru"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"require"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"autoload"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"psr-4"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"App\\\\"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"local/php_interface/src/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// local/php_interface/init.php")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require_once")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__DIR__")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/../../vendor/autoload.php'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// local/php_interface/src/Settings.php")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("App")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Settings")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Скрипты и стили подключаются штатными функциями "),s("code",[this._v("\\Bitrix\\Main\\Page\\Asset::getInstance()->add(Js/Css)")]),this._v(".")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"структура-сайта"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#структура-сайта","aria-hidden":"true"}},[this._v("#")]),this._v(" Структура сайта")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Структура сайта создается "),s("strong",[this._v("разделами")]),this._v(".\nВместо "),s("code",[this._v("/about/contacts.php")]),this._v(" надо создать раздел "),s("code",[this._v("/about/contacts/")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"сnужебная-структура"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#сnужебная-структура","aria-hidden":"true"}},[this._v("#")]),this._v(" Служебная структура")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("code",[t._v("/local/ajax/")]),t._v(" - Ajax скрипты")]),t._v(" "),a("li",[a("code",[t._v("/local/cron/")]),t._v(" - Cron скрипты")]),t._v(" "),a("li",[a("code",[t._v("/local/includes/")]),t._v(" - Включаемые области")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("В корне проекта "),a("strong",[t._v("только")]),t._v(" проект, "),a("code",[t._v("bitrix")]),t._v(", "),a("code",[t._v("vendor")]),t._v(" (если используется Composer), "),a("code",[t._v("local")]),t._v(" и "),a("code",[t._v("upload")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"структура-шабnона"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#структура-шабnона","aria-hidden":"true"}},[this._v("#")]),this._v(" Структура шаблона")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("В каталоге шаблона остаются только необходимые для Битрикс файлы - "),a("code",[t._v("header.php")]),t._v(", "),a("code",[t._v("footer.php")]),t._v(", "),a("code",[t._v("styles.css")]),t._v(" и т.д. Картинки, шрифты, js-библиотеки – выносятся в отдельные папки.")]),t._v(" "),a("li",[a("code",[t._v("images")]),t._v(" - изображения, спрайты, иконки")]),t._v(" "),a("li",[a("code",[t._v("fonts")]),t._v(" - шрифты")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("CJSCore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'fancybox'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'bxslider'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Остальные библиотеки и фреймворки располагаются "),s("code",[this._v("/local/libs/")]),this._v(" в каталогах, названия которых совпадают с названием библиотеки, при этом сохраняется внутренняя структура дистрибутива.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("/local/\n├── libs/\n│   ├── fancybox/\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   ├── jquery.fancybox.min.js\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   ├── jquery.fancybox.css\n│   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n│   ├── bxslider/\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   ├── "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n├── templates/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("название_шаблона"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/\n│   ├── header.php\n│   ├── footer.php\n│   ├── styles.css\n│   ├── template_styles.css\n│\n│   ├── components/\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   ├── "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n│\n│   ├── images/\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   ├── "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n├── script.js\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"структура-компонентов"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#структура-компонентов","aria-hidden":"true"}},[this._v("#")]),this._v(" Структура компонентов")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Из комплексного компонента вложенные компоненты выносятся наружу. То есть в шаблоне должно быть так:")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("/local/templates/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("название_шаблона"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/bitrix/\n├── news/\n│   ├── "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("название шаблона"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   ├── news.php\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   ├── detail.php\n│\n├── news.list/\n│   ├── "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("название шаблона"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   ├── template.php\n│\n├── news.detail/\n│   ├── "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("название шаблона"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   ├── template.php\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"динамические-данные"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#динамические-данные","aria-hidden":"true"}},[this._v("#")]),this._v(" Динамические данные")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v('Если на сайте используются динамические данные (например, кнопки "Добавить в избранное / Удалить из избранного" или "Добавить в корзину / В корзине") - '),s("em",[this._v("не нужно")]),this._v(" эту логику прописывать в шаблоне.\nКомпонент закэшируется и корректно это работать не будет.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFavorites")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" get_favorite "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[data-js-get-favorite]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("get_favorite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/local/ajax/favorite.php'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'success'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("each")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" item")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    get_favorite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.element[data-id='")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'] .element__heart'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'active'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"d7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#d7","aria-hidden":"true"}},[this._v("#")]),this._v(" D7")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"вспомогатеnьные-кnассы"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#вспомогатеnьные-кnассы","aria-hidden":"true"}},[this._v("#")]),this._v(" Вспомогательные классы")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("если встречается много условий, например, для определения будет ли выводиться вторая колонка на странице, то вместо того, чтобы прописывать все условия в "),s("code",[this._v("header.php | footer.php")]),this._v(":")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CSite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("InDir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/support/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" CSite"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("InDir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/some/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App\\"),a("span",{pre:!0,attrs:{class:"token package"}},[t._v("Settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Page")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasTwoColumns")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"композер"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#композер","aria-hidden":"true"}},[this._v("#")]),this._v(" Композер")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require_once")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__DIR__")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'/../../vendor/autoload.php'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"версионный-контроnь"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#версионный-контроnь","aria-hidden":"true"}},[this._v("#")]),this._v(" Версионный контроль")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("Служебная папка "),a("code",[t._v("vendor")]),t._v(" "),a("strong",[t._v("обязательно")]),t._v(" добавляются в "),a("code",[t._v(".gitignore")]),t._v("\nПри использовании composer в git должны быть "),a("code",[t._v("composer.lock")]),t._v(" и "),a("code",[t._v("composer.json")])])}],!1,null,null,null);s.default=e.exports}}]);