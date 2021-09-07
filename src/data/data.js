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
  arrayTextForSteps: [
    'Списки пассажиров',
    'Работа с маршрутами',
    'GPS мониторинг'
  ],
  arrayImg: [sbmTask1, sbmTask2, sbmTask3],
  bgImg: sbmTaskBg
}

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

export const madSectionListBackground = {
  title: 'Преимущества мобильного приложения',
  arrayItems: [
    {
      title: 'Увеличение оборачиваемости',
      text: 'подвижного состава'
    },
    {
      title: 'Оптимизация',
      text: 'процесса перевозки'
    },
    {
      title: 'Оповещение водителя,',
      text: 'что позволяет минимизировать простои между заявками, тем самым, повысив оборачиваемость ТС'
    },
    {
      title: 'Остановки',
      text: 'в пути. Водитель фиксирует все остановки в МП, что позволяет производить оперативный контроль за движением ТС'
    }
  ]
}

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


