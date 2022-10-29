import cardMap from "../components/Pages/Home/-ProductCard/img/card-map.png";
import cardChart from "../components/Pages/Home/-ProductCard/img/card-chart.png";
import cardPhone from "../components/Pages/Home/-ProductCard/img/card-phone.png";
import cardArrow from "../components/Pages/Home/-ProductCard/img/card-arrow.svg";

import productsImg from "../components/Pages/Home/-CompetenceCard/img/competence-products.svg";
import servicesImg from "../components/Pages/Home/-CompetenceCard/img/competence-services.svg";

import oilcargo from "../components/Pages/Home/img/oilcargo.png";
import tateco from "../components/Pages/Home/img/tateco.png";
import gazprom from "../components/Pages/Home/img/gazprom.png";
import parus from "../components/Pages/Home/img/parus.png";

import sbmTask1 from "../components/Pages/Products/-SectionPictureBackground/img/sbm-task1.jpg";
import sbmTask2 from "../components/Pages/Products/-SectionPictureBackground/img/sbm-task2.jpg";
import sbmTask3 from "../components/Pages/Products/-SectionPictureBackground/img/sbm-task3.jpg";

import sbmTaskBg from "../components/Pages/Products/-SectionPictureBackground/img/bg/orange-wave-bg.png";
import azsAdvantageskBg from "../components/Pages/Products/-SectionPictureBackground/img/bg/yellow-wave-bg.png";

import sbmCardIconBus
  from "../components/Pages/Products/-SectionCardsWithIcons/-CardsWithIcons/-CardWithIcon/img/sbm/icon-smb-bus.svg";
import sbmCardIconKid
  from "../components/Pages/Products/-SectionCardsWithIcons/-CardsWithIcons/-CardWithIcon/img/sbm/icon-smb-kid.svg";
import sbmCardIconLight
  from "../components/Pages/Products/-SectionCardsWithIcons/-CardsWithIcons/-CardWithIcon/img/sbm/icon-smb-light.svg";
import sbmCardIconRoad
  from "../components/Pages/Products/-SectionCardsWithIcons/-CardsWithIcons/-CardWithIcon/img/sbm/icon-smb-road.svg";

import madCardIconArrow
  from "../components/Pages/Products/-SectionCardsWithIcons/-CardsWithIcons/-CardWithIcon/img/mad/icon-mad-arrow.svg";
import madCardIconPath
  from "../components/Pages/Products/-SectionCardsWithIcons/-CardsWithIcons/-CardWithIcon/img/mad/icon-mad-path.svg";
import madCardIconSupport
  from "../components/Pages/Products/-SectionCardsWithIcons/-CardsWithIcons/-CardWithIcon/img/mad/icon-mad-support.svg";
import madCardIconTelegram
  from "../components/Pages/Products/-SectionCardsWithIcons/-CardsWithIcons/-CardWithIcon/img/mad/icon-mad-telegram.svg";

import sbmCardIconBgBlue
  from "../components/Pages/Products/-SectionCardsWithIcons/-CardsWithIcons/-CardWithIcon/img/blue-bg.png";
import sbmCardIconBgOrange
  from "../components/Pages/Products/-SectionCardsWithIcons/-CardsWithIcons/-CardWithIcon/img/orange-bg.png";
import madCardIconBgDarkgreen
  from "../components/Pages/Products/-SectionCardsWithIcons/-CardsWithIcons/-CardWithIcon/img/darkgreen-bg.png";
import madCardIconBgLightgreen
  from "../components/Pages/Products/-SectionCardsWithIcons/-CardsWithIcons/-CardWithIcon/img/lightgreen-bg.png";

import ProductMap from "../components/Pages/Products/-ProductCard/img/products-card-map.png";
import ProductChart from "../components/Pages/Products/-ProductCard/img/products-card-chart.png";
import ProductPhone from "../components/Pages/Products/-ProductCard/img/products-card-phone.png";
import ProductAZS from "../components/Pages/Products/-ProductCard/img/products-card-azs.png";
import ProductAPM from "../components/Pages/Products/-ProductCard/img/products-card-apm.png";

import madScreen1 from "../components/Pages/Products/MAD/img/screen1.png";
import madScreen2 from "../components/Pages/Products/MAD/img/screen2.png";
import madScreen3 from "../components/Pages/Products/MAD/img/screen3.png";
import madScreen4 from "../components/Pages/Products/MAD/img/screen4.png";
import madScreen5 from "../components/Pages/Products/MAD/img/screen5.png";
import madScreen6 from "../components/Pages/Products/MAD/img/screen6.png";

import erpAutomationIconPhone from "../components/Pages/Products/ERP/img/erp-phone.svg";
import erpAutomationIconDoc from "../components/Pages/Products/ERP/img/erp-doc.svg";
import erpAutomationIconProccess from "../components/Pages/Products/ERP/img/erp-proccess.svg";
import erpAutomationIconTelegram from "../components/Pages/Products/ERP/img/erp-telegram.svg";
import erpAutomationIconTruck from "../components/Pages/Products/ERP/img/erp-truck.svg";
import erpAutomationIconPeople from "../components/Pages/Products/ERP/img/erp-people.svg";
import erpAutomationIconMoney from "../components/Pages/Products/ERP/img/erp-money.svg";
import erpAutomationIconSatellite from "../components/Pages/Products/ERP/img/erp-satellite.svg";

import erpArrowDiagonal from "../components/Pages/Products/ERP/img/arrow-diagonal.svg";
import erpArrowVertical from "../components/Pages/Products/ERP/img/arrow-vertical.svg";
import erpArrowHorizontal from "../components/Pages/Products/ERP/img/arrow-horizontal.svg";

/**
 * Пункты меню
 * @type {[{href: string, title: string}, {href: string, title: string}, {href: string, title: string}]}
 */
export const menuItems = [
  {title: window.innerWidth > 950 ? 'Оставить заявку' : 'Заявка', href: '/order'},
  {title: 'Услуги', href: '/services'},
  {title: 'Продукты', href: '/products'},
  {title: 'Контакты', href: '/contacts'}
];

/**
 * Данные для карточек продуктов на главной странице
 * @type {[{img, textPosition: string, className: string, text: string, href: string, title: string, alternativeText: string}, {img, textPosition: string, className: string, text: string, href: string, title: string, alternativeText: string}, {img, textPosition: string, className: string, text: string, href: string, title: string, alternativeText: string}, {img, textPosition: string, className: string, href: string, title: string, alternativeText: string}]}
 */
export const productCards = [
  {
    title: 'SaaS решения для перевозчиков',
    text: `<ul><li>Оптимизация процессов</li><li>Снижение расходов</li><li>Помощь во внедрении</li></ul>`,
    alternativeText: 'Узнать больше о SaaS решениях для перевозчиков',
    href: '/products/sbm',
    className: 'sbm',
    textPosition: 'right',
    img: cardMap
  },
  {
    title: 'Система планирования ресурсов предприятия',
    text: 'Комплексная автоматизация процессов транспортной компании',
    alternativeText: 'Узнать больше о системе планирования ресурсов предприятия',
    href: '/products/erp',
    className: 'erp',
    textPosition: 'center',
    img: cardChart
  },
  {
    title: 'Мобильное приложение водителя ',
    text: 'Подключается к вашей системе, помогает держать  под контролем все этапы погрузки и транспортировки',
    alternativeText: 'Узнать больше о мобильном приложении водителя',
    href: '/products/mad',
    className: 'mad',
    textPosition: 'left',
    img: cardPhone
  },
  {
    title: 'Увидеть все наши проекты',
    alternativeText: 'Увидеть все наши проекты',
    href: '/products',
    className: 'empty',
    textPosition: 'none',
    img: cardArrow
  }
];

/**
 * Данные для карточек продуктов на странице продуктов
 * @type {[{img, text: string, href: string, title: string}, {img, text: string, href: string, title: string}, {img, text: string, href: string, title: string}, {img, text: string, href: string, title: string}]}
 */
export const currentProductsData = [
  {
    title: 'Диспетчеризация автобусов',
    text: 'SaaS решение для транспортных компаний, занимающихся перевозкой пассажиров',
    img: ProductMap,
    href: '/products/sbm'
  },
  {
    title: 'Система планирование ресурсов предприятия',
    text: 'Организация взаимодействия всех ресурсов в рамках одной транспортной компании ',
    img: ProductChart,
    href: '/products/erp'
  },
  {
    title: 'Мобильное приложение водителя',
    text: 'Позволяет оптимизировать процесс перевозки, предоставляет водителю информацию по рейсу, помогает быстрому взаимодействию с логистом',
    img: ProductPhone,
    href: '/products/mad'
  },
  {
    title: 'Мобильное приложение "АРМ механика"',
    text: 'Удобный инструмент для работы водителей, экспедиторов',
    img: ProductAPM,
    href: '/products/arm'
  },
  {
    title: 'Безоператорные АЗС',
    text: 'компактная автозаправочная установка, защищенная от разливов и возгорания, адаптированная для оперативного перемещения с объекта на объект',
    img: ProductAZS,
    href: '/products/azs'
  },
]

/**
 * Данные для блока "Чем мы занимаемся" на главной странице
 * @type {[{img, linkText: string, className: string, text: string, href: string, title: string}, {img, linkText: string, className: string, text: string, href: string, title: string}]}
 */
export const competenceCards = [
  {
    title: 'Внедрение  и поддержка готовых продуктов',
    text: 'когда готовые решения (модели и программы) адаптируются к условиям конкретного пользователя и его задачам только за счет настройки штатных опций',
    linkText: 'Посмотреть продукты',
    href: '/products',
    img: productsImg,
    className: 'competence-card-products'
  },
  {
    title: 'Услуги по разработке и аналитике',
    text: `<ul><li>Разработка ПО на заказ</li><li>Аудит, анализ и внедрение бизнес-процессов</li></ul>`,
    linkText: 'Посмотреть услуги',
    href: '/services',
    img: servicesImg,
    className: 'competence-card-services'
  }
];

/**
 * Данные для блока "Наши клиенты" на гловной странице
 * @type {[{img, tooltip: string}, {img, tooltip: string}, {img, tooltip: string}]}
 */
export const brandsArray = [
  {img: tateco, tooltip: 'TatEco'},
  {img: gazprom, tooltip: 'Газпром'},
  {img: parus, tooltip: 'Парус'},
  {img: oilcargo, tooltip: 'Ойл Карго'},
];

/**
 * Данные для перечня услуг на странице услуги
 * @type {[{text: string, title: string, points: string[]}, {text: string, title: string, points: string[]}]}
 */
export const servicesArray = [
  {
    title: 'Разработка ПО на заказ',
    text: 'Мы осуществляем полный цикл разработки мобильных и веб приложений, начиная от создания софта с нуля, закрывая индивидуальные потребности заказчика, до адаптации при необходимости имеющихся систем',
    points: ['Разработка с нуля мобильных и веб приложений',
      'Внедрение и поддержка',
      'Модернизация и усовершенствование',
      'Интеграция мобильных приложений']
  },
  {
    title: 'Аудит, анализ и внедрение бизнес-процессов',
    text: 'Проведем комплексные мероприятия по IT консалтингу. Определим спектр бизнес-задач, соберем данные, проанализируем конкурентов. Оценим возможности технической реализации, обеспечим внедрение и поддержку',
    points: ['Аудит IT инфраструктуры',
      'Формирование стратегии',
      'Разработка и развитие архитектуры',
      'Подбор оптимальных платформ',
      'Анализ бизнес процессов',
      'Тестирование',
      'Внедрение, поддержка и обеспечение бесперебойной работы продукта']
  }
];

/**
 * Данные для перечня контактов на странице контакты
 * @type {[{phone: string, title: string, email: string}, {phone: string, title: string, email: string}]}
 */
export const contactsArray = [
  {
    title: 'Отдел продаж',
    phone: '+7 903 307 94 23',
    email: 'info@smartapp.su'
  },
  {
    title: 'Техническая поддержка',
    phone: '+7 909 306 11 11',
    email: 'support@smartapp.su'
  }
];

/**
 * Параграфы справа от цветного блока с ценой и ссылками на инструкции на странице Диспетчеризация автобусов
 * @type {string[]}
 */
const sbmListOfText = [
  'Проект был задуман как решение для компаний занимающихся доставкой детей в школы США. Перед такими компаниями остро стоят вопросы оптимизации логистики автобусов.',
  'Менеджеры по логистике тратят огромное количество времени на разработку оптимальных маршрутов, поддержание актуальности, выдаче инструкций водителям, содержание отчетов по посещениям детей.',
  'Без помощи специализированного ПО такая работа занимает 80% времени менеджмента, а в крупных компаниях, обслуживающих по несколько тысяч детей ситуация еще более сложная',
];

/**
 * Параграфы справа от цветного блока с ценой и ссылками на инструкции на странице Erp для транспортной компании
 * @type {string[]}
 */
const erpListOfText = [
  'ERP система "УАТ" на базе "1С" поможет оптимизировать рабочее времени диспетчеров, логистов, менеджеров, бухгалтеров по реализациям, даcт возможность осуществлять умное планирование выручки с учетом данных статистики, а также затрат предприятия с учетом методов распределения затрат и фактических данных (БДР, БДДС, План по ТС), Вести проектный учет выручки и затрат, выставлять реестры на оплату нажатием нескольких кнопок, а также осуществлять их сверку, автоматически рассчитывать ЗП согласно KPI, отслеживать дебиторскую задолженность, видеть возможные кассовые разрывы.',
  'Включает специальное автоматизированное рабочее место для оплаты кредиторской задолженности с учетом условий договоров.'
];

/**
 * Параграфы справа от цветного блока с ценой и ссылками на инструкции на странице Мобильное приложение водителя
 * @type {string[]}
 */
const madListOfText = [
  'Мобильное приложение «Менеджер рейсов» — удобный инструмент для работы водителей, экспедиторов.',
  'Менеджеры по логистике тратят огромное количество времени на разработку оптимальных маршрутов, поддержание актуальности, выдаче инструкций водителям, содержание отчетов по посещениям детей.',
  'Без помощи специализированного ПО такая работа занимает 80% времени менеджмента, а в крупных компаниях, обслуживающих по несколько тысяч детей ситуация еще более сложная'
];

/**
 * Параграфы справа от цветного блока с ценой и ссылками на инструкции на странице Мобильное приложение "АРМ Механика"
 * @type {string[]}
 */
const armListOfText = [
  'Разработка мобильного приложения «АРМ Механика» позволит уйти от двойного труда и наладить контроль за выполнением ремонта, межсервисным интервалом, сроком истечения документов на Транспортное средство, повторными заездами, а также оперативно получать информацию о необходимых запасных частях из каталогов.',
];

/**
 * Параграфы справа от цветного блока с ценой и ссылками на инструкции на странице Безоператорные АЗС
 * @type {string[]}
 */
const azsListOfText = [
  'Топливный модуль — это компактная автозаправочная установка, защищенная от разливов и возгорания, адаптированная для оперативного перемещения с объекта на объект',
  'Конструкция модуля включает в себя резервуар для хранения топлива, топливораздаточную колонку, систему пожаротушения, насосную систему, очистную систему, процессинг и тд.'
];

/**
 * Перечень ссылок на загрузку инструкций на страницах продуктов
 * @type {[{sbm: [{text: string, href: string}, {text: string, href: string}]}, {erp: [{text: string, href: string}, {text: string, href: string}]}, {mad: [{text: string, href: string}, {text: string, href: string}]}, {azs: [{text: string, href: string}, {text: string, href: string}]}]}
 */
const downloadLinks = [
  {
    sbm: []
  },
  {
    erp: []
  },
  {
    mad: [
      /*{
        text: 'Инструкция по установке программного обеспечения',
        href: '/documents/install-mad.pdf'
      },
      {
        text: 'Инструкция по эксплуатации программного обеспечения',
        href: '/documents/description-mad.pdf'
      }*/
    ]
  },
  {
    azs: []
  },
  {
    arm: []
  }
];

/**
 * Данные для цветного блока с ценой и ссылками на инструкции на странице Диспетчеризация автобусов
 * @type {{price: string, listOfText: string[], title: string, listOfLinks: {sbm: [{text: string, href: string}, {text: string, href: string}]}}}
 */
export const sbmSectionColorText = {
  title: 'SaaS решение для транспортных компаний, занимающихся перевозкой пассажиров',
  listOfLinks: downloadLinks[0],
  // price: `100 000 ₽`,
  listOfText: sbmListOfText
}

/**
 * Данные для цветного блока с ценой и ссылками на инструкции на странице Erp для транспортной компании
 * @type {{price: string, listOfText: string[], title: string, listOfLinks: {sbm: [{text: string, href: string}, {text: string, href: string}]}}}
 */
export const erpSectionColorText = {
  title: 'Комплексная автоматизация процессов транспортной компании',
  listOfLinks: downloadLinks[1],
  // price: `100 000 ₽`,
  listOfText: erpListOfText
}

/**
 * Данные для цветного блока с ценой и ссылками на инструкции на странице Мобильное приложение водителя
 * @type {{price: string, listOfText: string[], title: string, listOfLinks: {sbm: [{text: string, href: string}, {text: string, href: string}]}}}
 */
export const madSectionColorText = {
  title: 'Мобильное приложение водителя для подключения к вашей системе',
  listOfLinks: downloadLinks[2],
  // price: `100 000 ₽`,
  listOfText: madListOfText
}

/**
 * Данные для цветного блока с ценой и ссылками на инструкции на странице Мобильное приложение "АРМ Механика"
 * @type {{price: string, listOfText: string[], title: string, listOfLinks: {sbm: [{text: string, href: string}, {text: string, href: string}]}}}
 */
export const armSectionColorText = {
  title: 'Мобильное приложение "АРМ Механика"',
  listOfLinks: downloadLinks[4],
  // price: `100 000 ₽`,
  listOfText: armListOfText
}

/**
 * Данные для цветного блока с ценой и ссылками на инструкции на странице Безоператорные АЗС
 * @type {{price: string, listOfText: string[], title: string, listOfLinks: {sbm: [{text: string, href: string}, {text: string, href: string}]}}}
 */
export const azsSectionColorText = {
  title: 'Компактная автозаправочная установка',
  listOfLinks: downloadLinks[3],
  // price: `100 000 ₽`,
  listOfText: azsListOfText
}

/**
 * Данные для блока со списком и шагами на цветном фоне на странице Диспетчеризация автобусов
 * @type {{arrayImg: *[], arrayText: string[], bgImg, title: string, arrayTextForSteps: string[]}}
 */
export const sbmSectionPictureBackground = {
  title: 'Продукт помогает решить следующие задачи',
  arrayText: [
    'Поддержание списка детей в актуальном состоянии',
    'Построение оптимальных маршрутов (ежедневных и единоразовых), контроль над протяженностью и длительностью маршрутов',
    'Менеджмент парка автобусов',
    'Менеджмент личного состава водителей',
    'Составление отчетов по посещаемости пассажиров на маршрутах',
    'Предоставление водителям подробной информации по маршруту, включая навигацию, информацию об остановках (расчетное/реальное время прибытия, адрес, время ожидания) и пассажирах на остановках',
    'Предоставление водителю способности отмечать наличие/отсутствие пассажиров на рейсе с последующим сохранение данных для отчетов',
    'Отслеживание перемещения автобуса по маршруту в реальном времени/просмотр исторических данных по перемещениям автобуса',
    'Предоставление информации о маршруте и наличию ассоциированного пассажира на нем родителям/опекунам'
  ],
  arrayTextForSteps: [
    'Списки пассажиров',
    'Работа с маршрутами',
    'GPS мониторинг'
  ],
  arrayImg: [sbmTask1, sbmTask2, sbmTask3],
  bgImg: sbmTaskBg
}

/**
 * Данные для блока со списком и шагами на цветном фоне на странице Безоператорные АЗС
 * @type {{arrayImg: *[], arrayText: string[], bgImg, title: string, arrayTextForSteps: string[]}}
 */
export const azsSectionPictureBackground = {
  title: 'Наличие собственного топливного модуля позволяет',
  arrayText: [
    'Организовать на предприятии стратегический запас топливных ресурсов для бесперебойного снабжения автопарка. При этом нет необходимости в получении специальных разрешений и согласований, покупке дополнительного оборудования',
    'Привязка заправки к удобно расположенным Топливным Модулям с целью снижения риска некачественной заправки или преступных сговоров (обналичивание Топливных Карт)',
    'Контролировать качество топлива, используемого техникой предприятия. Это дает возможность увеличить ресурс машин и снизить расходы на их ремонт',
    'Круглосуточная работа Топливного Модуля в автоматическом режиме',
    'Оперативно создавать мобильные пункты заправки, как на территории предприятия, так и за ее пределами. Особенно это актуально при проведении работ с использованием техники на удаленных объектах',
    'Эффективно контролировать расход топлива, предотвращая его растраты и хищения',
    'Раздавать топливо без использования операторов, дистанционно контролируя его отгрузку и приемку',
    'Экономить значительное время на заправке техники',
    'Экономить средства предприятия, приобретая топливо по оптовым ценам'
  ],
  arrayTextForSteps: [
    'Запас топлива Евро 5 24/7',
    'Пресечение хищения топлива',
    'Оптимизация производства',
    'Система распознавания транспорта по камерам',
    'Экономию на отсутствии операторов АЗС',
    'Установка, обслуживание модулей  за наш счет'
  ],
  bgImg: azsAdvantageskBg
}

/**
 * Данные для блока с вертикальными шагами и заголовком на цветном фоне на странице Диспетчеризация автобусов
 * @type {{arrayItems: [{text: string, title: string}, {text: string, title: string}, {text: string, title: string}, {text: string, title: string}], title: string}}
 */
export const sbmSectionListBackground = {
  title: 'Ресурсы для взаимодействия',
  arrayItems: [
    {
      title: 'Школы',
      text: 'Поддерживаем в актуальном состоянии списки обслуживаемых школ с адресами и внутренними кодами'
    },
    {
      title: 'Депо',
      text: 'У многих транспортных компаний существует более 1 депо. Упрощаем составление сложных маршрутов'
    },
    {
      title: 'Автобусы',
      text: 'Автопарк - важная часть CRM системы. Каждый автобус имеет свой тип, вместимость, может находится на обслуживании или в работе'
    },
    {
      title: 'Водители',
      text: 'В системе ведется реестр водителей. Также для водителей разработана смарт консоль, помогающая в пути'
    }
  ]
}

/**
 * Данные для блока с вертикальными шагами и заголовком на цветном фоне на странице Мобильное приложение водителя
 * @type {{arrayItems: [{text: string, title: string}, {text: string, title: string}, {text: string, title: string}, {text: string, title: string}], title: string}}
 */
export const madSectionListBackground = {
  title: 'Преимущества мобильного приложения',
  arrayItems: [
    {
      text: '<b>Понятный и удобный интерфейс</b> для пользователя'
    },
    {
      text: 'Использование на любом планшете или смартфоне <b>под управлением Android.</b> '
    },
    {
      text: 'Работает совместно с <b>конфигурациями 1С</b>'
    }
  ]
}

/**
 * Данные для блока с вертикальными шагами и заголовком на цветном фоне на странице Мобильное приложение "АРМ Механика"
 * @type {{arrayItems: [{text: string, title: string}, {text: string, title: string}, {text: string, title: string}, {text: string, title: string}], title: string}}
 */
export const armSectionListBackground = {
  title: 'Преимущества мобильного приложения',
  arrayItems: [
    {
      text: '<b>Увеличение эффективности</b> контроля сроков проведения ТО и ремонтов'
    },
    {
      text: '<b>Автоматизация процесса</b> обработки заявок на ремонт и формирования ремонтных листов'
    },
    {
      text: 'Контроль выдачи запасных частей и агрегатов <b>со склада</b>'
    },
    {
      text: 'Дефектовка ТС, резервирование запчастей и <b>оперативное сообщение информации</b> на склад '
    }
  ]
}

/**
 * Данные для блока с вертикальными шагами и заголовком на цветном фоне на странице Безоператорные АЗС
 * @type {{arrayItems: [{text: string, title: string}, {text: string, title: string}, {text: string, title: string}, {text: string, title: string}], title: string}}
 */
export const azsSectionListBackground = {
  title: 'Дополнительные преимущества',
  arrayItems: [
    {
      title: 'Текущий остаток топлива',
      text: 'Быть всегда в курсе актуальных цифр'
    },
    {
      title: 'Фото и видео фиксация',
      text: 'в реальном времени о заправляющемся транспорте'
    },
    {
      title: 'Отчетность',
      text: 'за интересующий период о количестве заправок'
    },
    {
      title: 'Личный кабинет',
      text: 'и систему SMS информирования'
    }
  ]
}

/**
 * Данные для карточек с иконкой на цветном фоне и текстом на странице Диспетчеризация автобусов
 * @type {{arrayItems: [{bg, icon, text: string}, {bg, icon, text: string}, {bg, icon, text: string}, {bg, icon, text: string}], title: string}}
 */
export const sbmSectionCardsWithIcons = {
  title: 'Приложение для водителя автобуса и родительский портал',
  arrayItems: [
    {
      icon: sbmCardIconBus,
      text: `Приложение для водителя автобуса устанавливается на планшет, подключается к серверу и предоставляет водителю информацию по маршрутам, на которые он зарегистрирован`,
      bg: sbmCardIconBgOrange
    },
    {
      icon: sbmCardIconRoad,
      text: `Водитель выбирает маршрут из расписания и начинает поездку. При этом ему доступны навигация по маршруту следования, информация по остановкам и пассажирам на остановках`,
      bg: sbmCardIconBgBlue
    },
    {
      icon: sbmCardIconLight,
      text: `Водитель также может связаться с экстренными службами и составить отчет о происшествиях`,
      bg: sbmCardIconBgOrange
    },
    {
      icon: sbmCardIconKid,
      text: `На портале для родителей можно получать уведомления о прибытии автобуса, отслеживать его путь и расписание, быть в курсе, что ребенок попал на автобус и достиг школы`,
      bg: sbmCardIconBgBlue
    }
  ]
}

/**
 * Данные для карточек с иконкой на цветном фоне и текстом на странице Мобильное приложение водителя
 * @type {{arrayItems: [{bg, icon, text: string}, {bg, icon, text: string}, {bg, icon, text: string}, {bg, icon, text: string}], title: string}}
 */
export const madSectionCardsWithIcons = {
  title: 'Преимущества мобильного приложения',
  arrayItems: [
    {
      icon: madCardIconTelegram,
      text: `В МП <b>отслеживается время прибытия на базисы</b> загрузки и выгрузки. В случае превышения нормативного времени приложение уведомляет водителя и ответственное лицо`,
      bg: madCardIconBgDarkgreen
    },
    {
      icon: madCardIconPath,
      text: `<b>Построение маршрута.</b> СРМ по каждой заявке строит маршрут, который учитывает наличие специального разрешения на перевозку опасного груза и дополнительных разрешений`,
      bg: madCardIconBgLightgreen
    },
    {
      icon: madCardIconSupport,
      text: `<b>Логист в АРМ</b> проверяет построенный системой маршрут. В случае необходимости проезда по иному маршруту, логист в ручном режиме исправляет маршрут`,
      bg: madCardIconBgDarkgreen
    },
    {
      icon: madCardIconArrow,
      text: `Водителю доступен <b>маршрут движения по заявке</b> , в которой содержится информация о точки загрузки/выгрузки, остановки на отдых, АЗС и пункты весового контроля`,
      bg: madCardIconBgLightgreen
    }
  ]
}

/**
 * Данные для блока с двумя списками и заголовком на странице Erp для транспортной компании
 * @type {{secondList: [{text: string}, {text: string}, {text: string}, {text: string}, {text: string}], firstList: [{text: string}, {text: string}, {text: string}, {text: string}, {text: string}, null], title: string}}
 */
export const erpSectionDoubleList = {
  title: 'Продукт помогает решить следующие задачи',
  firstList: [
    {
      text: 'Позволяет контролировать сроки плановых ТО и действия документов (ДОПОГ, ТС), а также оснащение ТС (огнетушители, налив, ареометр)'
    },
    {
      text: 'Содержит информацию о водителе и характеристиках ТС (марка, расход ГСМ, плановый пробег между ТО, закрепленный логист, принадлежность к колонне, сведения об экипаже, телефон водителя, состав ТС)'
    },
    {
      text: 'Весь бизнес-процесс перевозки в нашей учетной программе упрощен и устроен на базе одного документа «заказ на ТС». В нем, есть возможность прокладки маршрута логистом, контроль за которым возможен в режиме реального времени с помощью МП'
    },
    {
      text: 'Наша учетная программа устроена таким образом, что сбор статистической информации по рейсам осуществляется автоматически без участия пользователей (информация о пробеге, потреблении топлива, времени рейса (загрузки, выгрузки и т.п.) и скорости движения)'
    },
    {
      text: 'Возможность учитывать дополнительные расходы, такие как штрафы и пропарки'
    },
    {
      text: 'Интеграция с программами телеграмм и системой спутникового мониторинга (Wialon, Автограф и т.д.)'
    },
  ],
  secondList: [
    {
      text: 'Контроль сроков погашения дебиторской задолженности (в соответствии с условиями договоров, видами оплат, особенностями документооборота)'
    },
    {
      text: 'Наша доработка обеспечивает особый контроль эксплуатационных расходов. К примеру, внедрена защита на уровне пользовательского взаимодействия с системой, которая предупреждает о превышении согласованной цены и нарушения сроков гарантийного обслуживания'
    },
    {
      text: 'Содержит «Планировщик ТС», который облегчает постановку транспортного средства на заказ, позволяет видеть общую картину состояния Заказов и парка ТС (на каком заказе, какая в ожидании работы или ремонте)'
    },
    {
      text: 'Возможность формирования финансового отчета по результатам месяца, а также формирование управленческой зарплаты нажатием пары кнопок'
    },
    {
      text: 'Интегрирована отчетность в Power bi. Удобный, интерактивный интерфейс позволяет легко знакомится с информацией в виде графиков и диаграмм'
    },
  ]
}

/**
 * Данные для блока с двумя списками и заголовком на странице Мобильное приложение водителя
 * @type {{secondList: [{text: string}, {text: string}, {text: string}, {text: string}, {text: string}], firstList: [{text: string}, {text: string}, {text: string}, {text: string}, {text: string}, null], title: string}}
 */
export const madSectionDoubleList = {
  title: 'Продукт помогает решить следующие задачи',
  firstList: [
    {
      title: 'Контроль движения по маршруту',
      text: 'МП в автоматизированном режиме контролирует движение ТС по заданному логистом маршруту. В случае фиксации отклонения от маршрута водитель получает звуковое и диалоговое уведомление об отклонении от маршрута, при этом логист получает информацию в АРМ об отклонении ТС с маршрута. Таким образом, минимизируется риски нарушения проезда и получения штрафных санкций'
    },
    {
      title: 'Информация о загрузке и выгрузке',
      text: 'После загрузки водитель в МП вводит данные по загрузке. Вводит тоннаж для дополнительной проверки данных по загрузке и прикрепляет фотографию ТТН. После выгрузки водитель прикрепляет ТТН с отметками о приеме груза. Данные в онлайн режиме передаются в заявку 1С и могут быть использованы службами перевозчика'
    },
    {
      title: 'Режим «Киоска»',
      text: 'Есть возможность заблокировать доступ ко всем приложениям на смартфоне, кроме МП для водителя. Таким образом, водитель не сможет использовать служебный смартфон в личных целях'
    }
  ],
  secondList: [
    {
      title: 'Табелирование',
      text: 'Система позволяет проводить автоматическое табелирование водителя, находящегося на линии. Производить проверку оснащения при пересменке. Возможность разделения заявки на 2 водителя для расчета пробега. Таким образом, автоматизируется процесс учета рабочего времени водителя, актуализация данных оснащения ТС при пересменке, тем самым минимизируя человеческий фактор при обработке информации'
    },
    {
      title: 'Оснащение ТС',
      text: 'Водитель при приеме и сдачи смены фиксирует наличие оснащения ТС (по перечню АДР, номера резины, комплектация доп. оборудования и т.д.). Для проверки фактического наличия и состояния оснащения требуется добавление фотографии. Таким образом, осуществляется постоянный контроль оснащения ТС'
    },
    {
      title: 'Офлайн режим',
      text: 'Все действия в МП водитель может выполнять при отсутствии интернета. При появлении доступа к сети интернет все данные отправляются на сервер'
    },
  ]
}

/**
 * Данные для блока с двумя списками и заголовком на странице Мобильное приложение "АРМ Механика"
 * @type {{firstList: [{text: string, title: string},{text: string, title: string}], title: string}}
 */
export const armSectionDoubleList = {
  title: 'АРМ механика позволит',
  firstList: [
    {
      title: 'Вести учет',
      text: 'Вести оперативный учет запасных частей, сократить время поиска необходимых позиций по заявке, упростить документооборот'
    },
    {
      title: 'Увеличить выручку',
      text: 'Снизить расходы на содержание автопарка на 10-20% благодаря контролю сроков проведения ТО, контролю гарантийного срока запасных частей и контролю за ценам  запасных частей. Так же благодаря сокращению заездов в сервисные центры увеличится время работы Транспортного средства, что приведет к увеличению выручки.'
    }
  ],
}

/**
 * Перечень картинок для блока со скриншотами на странице Мобильное приложение водителя
 * @type {*[]}
 */
export const madSectionScreens = [
  madScreen1,
  madScreen2,
  madScreen3,
  madScreen4,
  madScreen5,
  madScreen6
]

/**
 * Данные для блока с преимуществами автоматизации на странице Erp для транспортной компании (десктоп)
 * @type {([{number: number, icon, className: string, title: string}, {className: string}, {number: number, icon, className: string, title: string}, {className: string}, {number: number, icon, className: string, title: string}]|[{className: string}, {arrowIcon, className: string}, {arrowIcon, className: string}, {arrowIcon, className: string}, {className: string}]|[{number: number, icon, className: string, title: string}, {arrowIcon, className: string}, {number: number, className: string, title: string}, {arrowIcon, className: string}, {number: number, icon, className: string, title: string}]|[{className: string}, {arrowIcon, className: string}, {arrowIcon, className: string}, {arrowIcon, className: string}, {className: string}]|[{number: number, icon, className: string, title: string}, {className: string}, {number: number, icon, className: string, title: string}, {className: string}, {number: number, icon, className: string, title: string}])[]}
 */
export const erpSectionAutomation = [
  [
    {
      number: 1,
      title: 'Приложение водителя',
      icon: erpAutomationIconPhone,
      className: 'top-left-block',
    },
    {
      className: 'empty-block',
    },
    {
      number: 8,
      title: 'Мессенджеры',
      icon: erpAutomationIconTelegram,
      className: 'middle-left-block',
    },
    {
      className: 'empty-block',
    },
    {
      number: 7,
      title: '1С:ЗУП',
      icon: erpAutomationIconPeople,
      className: 'bottom-left-block',
    },
  ],
  [
    {
      className: 'empty-block',
    },
    {
      arrowIcon: erpArrowDiagonal,
      className: 'top-left-arrow arrow-block'
    },
    {
      arrowIcon: erpArrowVertical,
      className: 'middle-left-arrow arrow-block'
    },
    {
      arrowIcon: erpArrowDiagonal,
      className: 'bottom-left-arrow arrow-block'
    },
    {
      className: 'empty-block',
    },
  ],
  [
    {
      number: 2,
      title: 'Электронный документооборот',
      icon: erpAutomationIconDoc,
      className: 'top-center-block',
    },
    {
      arrowIcon: erpArrowHorizontal,
      className: 'top-center-arrow arrow-block'
    },
    {
      number: 0,
      title: 'Автоматизация транспортной компании',
      className: 'middle-center-block'
    },
    {
      arrowIcon: erpArrowHorizontal,
      className: 'bottom-center-arrow arrow-block'
    },
    {
      number: 6,
      title: '1С:Бухгалтерия',
      icon: erpAutomationIconMoney,
      className: 'bottom-center-block',
    },
  ],
  [
    {
      className: 'empty-block',
    },
    {
      arrowIcon: erpArrowDiagonal,
      className: 'top-right-arrow arrow-block'
    },
    {
      arrowIcon: erpArrowVertical,
      className: 'middle-right-arrow arrow-block'
    },
    {
      arrowIcon: erpArrowDiagonal,
      className: 'bottom-right-arrow arrow-block'
    },
    {
      className: 'empty-block',
    },
  ],
  [
    {
      number: 3,
      title: 'Процессинговые центры',
      icon: erpAutomationIconProccess,
      className: 'top-right-block',
    },
    {
      className: 'empty-block',
    },
    {
      number: 4,
      title: 'Курьерские службы',
      icon: erpAutomationIconTruck,
      className: 'middle-right-block',
    },
    {
      className: 'empty-block',
    },
    {
      number: 5,
      title: 'GPS мониторинг',
      icon: erpAutomationIconSatellite,
      className: 'bottom-right-block',
    }
  ]
]

/**
 * Данные для блока с преимуществами автоматизации на странице Erp для транспортной компании (мобилка)
 * @type {[{number: number, className: string, title: string}, {number: number, icon, className: string, title: string}, {number: number, icon, className: string, title: string}, {number: number, icon, className: string, title: string}, {number: number, icon, className: string, title: string}, null, null, null, null][]}
 */
export const erpSectionAutomationMobile = [
  [
    {
      number: 0,
      title: 'Автоматизация транспортной компании',
      className: 'middle-center-block'
    },
    {
      number: 1,
      title: 'Приложение водителя',
      className: 'top-left-block',
      icon: erpAutomationIconPhone,
    },
    {
      number: 2,
      title: 'Электронный документооборот',
      className: 'top-center-block',
      icon: erpAutomationIconDoc,
    },
    {
      number: 3,
      title: 'Процессинговые центры',
      className: 'top-right-block',
      icon: erpAutomationIconProccess,
    },
    {
      number: 4,
      title: 'Курьерские службы',
      className: 'middle-right-block',
      icon: erpAutomationIconTruck,
    },
    {
      number: 5,
      title: 'GPS мониторинг',
      className: 'bottom-right-block',
      icon: erpAutomationIconSatellite,
    },
    {
      number: 6,
      title: '1С:Бухгалтерия',
      className: 'bottom-center-block',
      icon: erpAutomationIconMoney,
    },
    {
      number: 7,
      title: '1С:ЗУП',
      className: 'bottom-left-block',
      icon: erpAutomationIconPeople,
    },
    {
      number: 8,
      title: 'Мессенджеры',
      className: 'middle-left-block',
      icon: erpAutomationIconTelegram,
    },
  ],
]

export const FormInputsArray = [
  {
    id: 'company',
    label: 'Наименование организации',
    isRequired: true,
    size: 'm'
  },
  {
    id: 'satellite-navigation',
    label: 'Спутниковая навигация',
    isRequired: true,
    placeholder: 'Поставщик услуг',
    size: 'm'
  },
  {
    id: 'base-accounting',
    label: 'База учета',
    isRequired: true,
    size: 'm'
  },
  {
    id: 'type-of-services',
    label: 'Вид услуг',
    isRequired: true,
    placeholder: 'Перевозка товаров народного потребления, перевозка нефтепродуктов и т.п.',
    size: 'm'
  },
  {
    id: 'the-number-of-employees',
    label: 'Количество сотрудников',
    placeholder: 'Офис и водители',
    type: 'number',
    min: 0,
    size: 's'
  },
  {
    id: 'own-repair-area',
    label: 'Собственная ремонтная зона',
    type: 'select',
    options: ['Да', 'Нет'],
    size: 's'
  },
  {
    id: 'the-number-of-workers',
    label: 'Количество рабочих',
    placeholder: 'В собственной ремонтной зоне',
    type: 'number',
    min: 0,
    size: 's'
  },
  {
    id: 'car-park',
    label: 'Парк автомобилей',
    isRequired: true,
    placeholder: 'Количество используемых ТС',
    type: 'number',
    min: 0,
    size: 's'
  },
  {
    id: 'activity-of-the-company',
    label: window.innerWidth > 950 ? 'Опишите кратко деятельность своей компании' : 'Деятельность компании',
    isRequired: true,
    size: 'l'
  },
]


/**
 * Ссылка на политику конфедециальности
 * @type {string}
 */
export const policyLink = '/documents/policy.pdf'
