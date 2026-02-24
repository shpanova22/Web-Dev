import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  categories:Category[]=[
    {id:1, name:'Книги'},
    {id:2, name:'Игры для компаний'},
    {id:3, name:'Музыкальные инструменты'},
    {id:4, name:'Музыкальные диски и пластинки'}
];

products: Product[]=[
  {
    id:10,
    categoryId:1,
    name:'Книга Фурудатэ Х.: Волейбол! Кн. 1. Хината и Кагэяма. Вид с высоты',
    price:9383,
    description: 'Маленький рост не помеха большим мечтам! Невысокий юноша Сёё Хината одержим волейболом и грезит о том, чтобы играть на крупных соревнованиях.',
    rating: 0,
    likes:0,
    image:'https://resources.cdn-kaspi.kz/img/m/p/p00/pdc/68357704.jpg?format=gallery-medium',
    link:'https://kaspi.kz/shop/p/furudate-h-voleibol-kn-1-hinata-i-kagejama-vid-s-vysoty-146732291/?c=750000000'
  },
   {
    id:11,
    categoryId:1,
    name:'Книга Готогэ К.: Истребитель демонов. Том 2. Ты',
    price:7500,
    description: 'Начало XX века, эпоха Тайсё. На семью Тандзиро, доброго торговца углём, нападает демон.',
    rating: 5,
    likes:0,
    image:'https://resources.cdn-kaspi.kz/img/m/p/hb9/h33/65755568111646.jpg?format=gallery-medium',
    link:'https://kaspi.kz/shop/p/gotoge-k-istrebitel-demonov-tom-2-ty-107580147/?c=750000000'
  },
   {
    id:12,
    categoryId:1,
    name:'Исаяма Х.: Атака на Титанов. Часть 4',
    price:4920,
    description:'Атака на титанов - один из самых успешных и популярных манга-сериалов последних нескольких лет, к которому было сделано даже несколько ответвлений от основной серии.',
    rating: 5,
    likes:0,
    image:'https://resources.cdn-kaspi.kz/img/m/p/h82/h29/63814174277662.jpg?format=gallery-medium',
    link:'https://kaspi.kz/shop/p/isajama-h-ataka-na-titanov-chast-4-26013813/?c=750000000'
  },
 {
    id:13,
    categoryId:1,
    name:'Книга Кисимото М.: Наруто. Часть 1. Наруто Удзумаки',
    price:10110,
    description: 'Наруто Удзумаки - самый проблемный ученик академии ниндзя в деревне Коноха. День за днем он выдумывает всяческие проказы и выводит из себя окружающих!',
    rating:5,
    likes:0,
    image:'https://resources.cdn-kaspi.kz/img/m/p/pb7/p5e/36474211.jpg?format=gallery-medium',
    link:'https://kaspi.kz/shop/p/kisimoto-m-naruto-chast-1-naruto-udzumaki-101204758/?c=750000000'
  },
  {
    id:14,
    categoryId:1,
    name:'Акутами Г.: Магическая битва. Часть 1. Двуликий Сукуна.',
    price:8357,
    description: 'Юдзи Итадори - обычный старшеклассник. И хотя мальчик от рождения обладает выдающимися физическими данными, спорт его совсем не интересует.',
    rating:5,
    likes:0,
    image:'https://resources.cdn-kaspi.kz/img/m/p/pec/p9b/37032685.jpg?format=gallery-medium',
    link:'https://kaspi.kz/shop/p/akutami-g-magicheskaja-bitva-chast-1-dvulikii-sukuna-prokljatyi-plod-105137134/?c=750000000'
  },
  {
    id:15,
    categoryId:2,
    name:'Настольная игра UNO УНО.',
    price:293,
    description: 'Карточная игра UNO - это увлекательное развлечение для всей семьи, которое сочетает в себе простоту правил и стратегическую глубину.',
    rating:5,
    likes:0,
    image:'https://resources.cdn-kaspi.kz/img/m/p/hd8/h8e/85824892403742.jpg?format=gallery-medium',
    link:'https://kaspi.kz/shop/p/uno-uno-118700240/?c=750000000'
  },
  {
    id:16,
    categoryId:2,
    name:'Настольная игра Экономикус Бункер 3.0',
    price:2464,
    description: 'Бункер – это атмосферная дискуссионная игра о выживании после масштабного апокалипсиса.',
    rating:5,
    likes:0,
    image:'https://resources.cdn-kaspi.kz/img/m/p/hda/hd3/80612282499102.jpg?format=gallery-medium',
    link:'https://kaspi.kz/shop/p/ekonomikus-bunker-3-0-110198532/?c=750000000'
  },
   {
    id:17,
    categoryId:2,
    name:'Нарды и шашки 3 в 1, шахматы Chess дерево 30x30 см',
    price:2238,
    description: 'Шахматный набор 3 в 1 Chess 3029 — отличный выбор для любителей настольных игр, который объединяет в себе шахматы, нарды и шашки в одном комплекте.',
    rating:5,
    likes:0,
    image:'https://resources.cdn-kaspi.kz/img/m/p/hf1/h34/86375633059870.jpg?format=gallery-medium',
    link:'https://kaspi.kz/shop/p/nardy-i-shashki-3-v-1-shahmaty-chess-derevo-30x30-sm-120783368/?c=750000000'
  },
   {
    id:18,
    categoryId:2,
    name:'Настольная игра Монополия',
    price:2205,
    description: '«Монополия» — экономическая и стратегическая настольная игра для двух и более человек. ',
    rating:5,
    likes:0,
    image:'https://resources.cdn-kaspi.kz/img/m/p/h94/hd7/64375064920094.jpg?format=gallery-medium',
    link:'https://kaspi.kz/shop/p/monopolija-102739472/?c=750000000'
  },
  {
    id:19,
    categoryId:2,
    name:'Настольная игра Тогызкумалак',
    price:2700,
    description: 'Тогызкумалак — развивающая настольная игра, которая способствует развитию логического мышления и стратегического планирования.',
    rating:5,
    likes:0,
    image:'https://resources.cdn-kaspi.kz/img/m/p/h80/hd3/85734990512158.jpg?format=gallery-medium',
    link:'https://kaspi.kz/shop/p/togyzkumalak-118384691/?c=750000000'
  },
  {
    id:20,
    categoryId:3,
    name:'Синтезатор Yongmei YM-3800',
    price:44890,
    description: 'Синтезатор Music Yongmei YM-3800 - является одним из наиболее совершенных продвинутых инструментов начального уровня подобного класса и призван стать настоящим проводником для молодого исполнителя в мир музыки, а также обеспечить удовольствие от каждой сыгранной ноты',
    rating:5,
    likes:0,
    image:'https://resources.cdn-kaspi.kz/img/m/p/hbd/h6c/64170426695710.jpg?format=gallery-medium',
    link:'https://kaspi.kz/shop/p/sintezator-yongmei-ym-3800-103307125/?c=750000000'
  },
   {
    id:21,
    categoryId:3,
    name:'Гитара акустическая Levinson LA-R38B-BK Pack 1',
    price:18990,
    description: 'Акустическая гитара Levinson LA-R38B-BK Pack 1 — отличный выбор для музыкантов любого уровня, предлагающая высокое качество звука и удобство в использовании.',
    rating:5,
    likes:0,
    image:'https://resources.cdn-kaspi.kz/img/m/p/pb2/p5c/99693286.png?format=gallery-medium',
    link:'https://kaspi.kz/shop/p/gitara-akusticheskaja-levinson-la-r38b-bk-pack-1-112338990/?c=750000000'
  },
   {
    id:22,
    categoryId:3,
    name:'Комбоусилитель Marshall MG15GR-e черный',
    price:104600,
    description: 'Комбоусилитель Marshall MG15GR-e — мощный и универсальный выбор для электрогитаристов, желающих получить классический звук Marshall в компактном формате.',
    rating:5,
    likes:0,
    image:'https://resources.cdn-kaspi.kz/img/m/p/h6a/hd5/64443182710814.jpg?format=gallery-medium',
    link:'https://kaspi.kz/shop/p/kombousilitel-marshall-mg15gr-e-chernyi-105886141/?c=750000000'
  },
   {
    id:23,
    categoryId:3,
    name:'Электронная ударная установка Alesis Debut Kit',
    price:139890,
    description: 'Alesis Debut Kit – это электронная ударная установка, в которой сочетаются эргономичный дизайн, высокое качество сборки и широкий набор функциональных возможностей для гармоничного музыкального творчества.',
    rating:4.5,
    likes:0,
    image:'https://resources.cdn-kaspi.kz/img/m/p/hf7/h6d/63852311773214.jpg?format=gallery-medium',
    link:'https://kaspi.kz/shop/p/elektronnaja-udarnaja-ustanovka-alesis-debut-kit-101082452/?c=750000000'
  },
  {
    id:24,
    categoryId:3,
    name:'Скрипка R.Empire 4/4 4/4 коричневый',
    price:46989,
    description: 'Скрипка — смычковый музыкальный инструмент с четырьмя струнами, настроенными по квинтам: Gм D1 A1 E2. ',
    rating:4.7,
    likes:0,
    image:'https://resources.cdn-kaspi.kz/img/m/p/h2e/h48/63827643367454.jpg?format=gallery-medium',
    link:'https://kaspi.kz/shop/p/skripka-r-empire-4-4-4-4-korichnevyi-100010207/?c=750000000'
  },
  {
    id:25,
    categoryId:4,
    name:'Пластинка Arctic Monkeys - AM',
    price:28999,
    description: 'Arctic Monkeys - AM — культовый альбом английской рок-группы, выпущенный в 2013 году на 180-граммовом виниле в формате Gatefold.',
    rating:5,
    likes:0,
    image:'https://resources.cdn-kaspi.kz/img/m/p/h0e/h16/64395659345950.jpg?format=gallery-medium',
    link:'https://kaspi.kz/shop/p/arctic-monkeys---am-106709569/?c=750000000'
  },
  {
    id:26,
    categoryId:4,
    name:'Пластинка Adele 0634904052010',
    price:29200,
    description: 'Альбом Adele 21 — это неповторимое музыкальное путешествие в мир поп, джаз и блюз, которое оставляет глубокий след в сердце каждого слушателя.',
    rating:4.8,
    likes:0,
    image:'https://resources.cdn-kaspi.kz/img/m/p/h09/he2/67506672992286.jpg?format=gallery-medium',
    link:'https://kaspi.kz/shop/p/adele-0634904052010-108301113/?c=750000000'
  },
  {
    id:27,
    categoryId:4,
    name:'Пластинка Eilish Billie Hit Me Hard And Soft',
    price:88900,
    description: 'Альбом "Hit Me Hard And Soft" от Billie Eilish — это лимитированное издание на цветном виниле, которое станет настоящей находкой для поклонников её творчества.',
    rating:5,
    likes:0,
    image:'https://resources.cdn-kaspi.kz/img/m/p/h5e/h7c/86281576710174.png?format=gallery-medium',
    link:'https://kaspi.kz/shop/p/eilish-billie-hit-me-hard-and-soft-120420709/?c=750000000'
  },
   {
    id:28,
    categoryId:4,
    name:'Пластинка Tyler, The Creator Igor',
    price:30600,
    description: 'Igor - пятый студийный альбом американского рэп-исполнителя Tyler, the Creator. Альбом был выпущен 17 мая 2019 года на лейбле A Boy is a Gun.',
    rating:5,
    likes:0,
    image:'https://resources.cdn-kaspi.kz/img/m/p/h9d/h1e/69273714753566.jpg?format=gallery-medium',
    link:'https://kaspi.kz/shop/p/tyler-the-creator-igor-109004856/?c=750000000'
  },
   {
    id:29,
    categoryId:4,
    name:'Пластинка Mac DeMarco Salad Days',
    price:30000,
    description: 'Список композиций: 1. Salad Days 2. Blue Boy 3. Brother 4. Let Her Go 5. Goodbye Weekend 6. Let My Baby Stay 7. Passing Out Pieces 8. Treat Her Better 9. Chamber of Reflection ',
    rating:5,
    likes:0,
    image:'https://resources.cdn-kaspi.kz/img/m/p/p83/pce/14784210.png?format=gallery-medium',
    link:'https://kaspi.kz/shop/p/mac-demarco-salad-days-131891538/?c=750000000'
   }
];
constructor(){ }

getCategories(): Category[]{
  return this.categories;
}
getProductsByCategory(categoryId: number): Product[]{
  return this.products.filter(p=>p.categoryId===categoryId)
}  
}
