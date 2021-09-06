import cardMap from "../components/Pages/Home/-ProductCard/img/card-map.png";
import cardChart from "../components/Pages/Home/-ProductCard/img/card-chart.png";
import cardPhone from "../components/Pages/Home/-ProductCard/img/card-phone.png";
import cardArrow from "../components/Pages/Home/-ProductCard/img/card-arrow.svg";

import productsImg from "../components/Pages/Home/-CompetenceCard/img/competence-products.svg";
import servicesImg from "../components/Pages/Home/-CompetenceCard/img/competence-services.svg";

import garavto from "../components/Pages/Home/img/garavto.png";
import tateco from "../components/Pages/Home/img/tateco.png";
import gazprom from "../components/Pages/Home/img/gazprom.png";

import sbmTask1 from "../components/Pages/Products/-SectionPictureBackground/img/sbm-task1.jpg";
import sbmTask2 from "../components/Pages/Products/-SectionPictureBackground/img/sbm-task2.jpg";
import sbmTaskBg from "../components/Pages/Products/-SectionPictureBackground/img/bg/orange-wave-bg.png";

import sbmTask3 from "../components/Pages/Products/-SectionPictureBackground/img/sbm-task3.jpg";

export const menuItems = [
  {title: 'Услуги', href: '/services'},
  {title: 'Продукты', href: '/products'},
  {title: 'Контакты', href: '/contacts'}
];

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
    title: 'Система планирование ресурсов предприятия',
    text: 'Комплексная автоматизация процессов транспортной компании',
    alternativeText: 'Узнать больше о система планирование ресурсов предприятия',
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
    alternativeText: 'Узнать больше о мобильном приложении водителя',
    href: '/products',
    className: 'empty',
    textPosition: 'none',
    img: cardArrow
  }
];

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

export const brandsArray = [
  {img: garavto, tooltip: 'Garavto'},
  {img: tateco, tooltip: 'TatEco'},
  {img: gazprom, tooltip: 'Gazprom'}
];

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

const sbmListOfText = [
  'Проект был задуман как решение для компаний занимающихся доставкой детей в школы США. Перед такими компаниями остро стоят вопросы оптимизации логистики автобусов.',
  'Менеджеры по логистике тратят огромное количество времени на разработку оптимальных маршрутов, поддержание актуальности, выдаче инструкций водителям, содержание отчетов по посещениям детей.',
  'Без помощи специализированного ПО такая работа занимает 80% времени менеджмента, а в крупных компаниях, обслуживающих по несколько тысяч детей ситуация еще более сложная',
];

const erpListOfText = [
  'Тут должен быть совсем небольшой текст о том, что это за продукт. У нас только преимущества, нужно небольшое описание',
  'Менеджеры по логистике тратят огромное количество времени на разработку оптимальных маршрутов, поддержание актуальности, выдаче инструкций водителям, содержание отчетов по посещениям детей.',
  'Без помощи специализированного ПО такая работа занимает 80% времени менеджмента, а в крупных компаниях, обслуживающих по несколько тысяч детей ситуация еще более сложная'
];

const madListOfText = [
  'Тут должен быть совсем небольшой текст о том, что это за продукт. У нас только преимущества, нужно небольшое описание',
  'Менеджеры по логистике тратят огромное количество времени на разработку оптимальных маршрутов, поддержание актуальности, выдаче инструкций водителям, содержание отчетов по посещениям детей.',
  'Без помощи специализированного ПО такая работа занимает 80% времени менеджмента, а в крупных компаниях, обслуживающих по несколько тысяч детей ситуация еще более сложная'
];

const azsListOfText = [
  'Топливный модуль — это компактная автозаправочная установка, защищенная от разливов и возгорания, адаптированная для оперативного перемещения с объекта на объект',
  'Конструкция модуля включает в себя резервуар для хранения топлива, топливораздаточную колонку, систему пожаротушения, насосную систему, очистную систему, процессинг и тд.'
];

const downloadLinks = [
  {
    sbm: [
      {
        text: 'Инструкция по установке программного обеспечения',
        href: '/1'
      },
      {
        text: 'Инструкция по эксплуатации программного обеспечения',
        href: '/2'
      }
    ]
  },
  {
    erp: [
      {
        text: 'Инструкция по установке программного обеспечения',
        href: '/3'
      },
      {
        text: 'Инструкция по эксплуатации программного обеспечения',
        href: '/4'
      }
    ]
  },
  {
    mad: [
      {
        text: 'Инструкция по установке программного обеспечения',
        href: '/5'
      },
      {
        text: 'Инструкция по эксплуатации программного обеспечения',
        href: '/6'
      }
    ]
  },
  {
    azs: [
      {
        text: 'Инструкция по установке программного обеспечения',
        href: '/7'
      },
      {
        text: 'Инструкция по эксплуатации программного обеспечения',
        href: '/8'
      }
    ]
  }
];

export const sbmSectionColorText = {
  title: 'SaaS решение для транспортных компаний, занимающихся перевозкой пассажиров',
  listOfLinks: downloadLinks[0],
  price: `100 000 ₽`,
  listOfText: sbmListOfText
}

export const erpSectionColorText = {
  title: 'Комплексная автоматизация процессов транспортной компании',
  listOfLinks: downloadLinks[1],
  price: `100 000 ₽`,
  listOfText: erpListOfText
}

export const madSectionColorText = {
  title: 'Мобильное приложение водителя для подключения к вашей системе',
  listOfLinks: downloadLinks[2],
  price: `100 000 ₽`,
  listOfText: madListOfText
}

export const azsSectionColorText = {
  title: 'Компактная автозаправочная установка',
  listOfLinks: downloadLinks[3],
  price: `100 000 ₽`,
  listOfText: azsListOfText
}

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
  arrayTextForImg: [
    'Списки пассажиров',
    'Работа с маршрутами',
    'GPS мониторинг'
  ],
  arrayImg: [sbmTask1, sbmTask2, sbmTask3],
  bgImg: sbmTaskBg
}










