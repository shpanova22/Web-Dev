import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 17 Pro 256Gb оранжевый',
      description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
      price: 755106,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium', 
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
    },
    {
      id: 2,
      name: 'Coca-Cola газированный напиток кола 1 л',
      description: 'Coca-Cola – один из самых популярных безалкогольных напитков в истории, а также один из наиболее узнаваемых брендов в мире.Сегодня неповторимый вкус Coca-Cola знаком миллионам людей по всему миру. ',
      price: 665,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pbb/pee/97763098.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/coca-cola-classic-gazirovannyi-napitok-1-l-100208096/?c=750000000'
    },
    {
      id: 3,
      name: 'Yves Saint Laurent LIBRE парфюмерная вода EDP 50 мл, для женщин',
      description: 'LIBRE Eau de Parfum - культовый женский парфюм, который теперь можно использовать повторно от Yves Saint Laurent. Свобода проживать все с избытком. ',
      price: 20000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd6/p36/67239461.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/yves-saint-laurent-libre-parfjumernaja-voda-edp-50-ml-dlja-zhenschin-100013874/?c=750000000'
    },
    {
      id: 4,
      name: 'Ноутбук Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS / MGN63RU/A',
      description: 'Первый чип, разработанный специально для Mac. Поразительно, но система на чипе Apple M1 вмещает 16 миллиардов транзис­торов и объединяет центральный и графи­ческий процессоры, систему Neural Engine, контроллеры ввода-вывода и множество других компонентов. ',
      price: 419900,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000'
    },
     {
      id: 5,
      name: 'Книга Кристи А.: Десять негритят',
      description: 'Десять никак не связанных между собой людей в особняке на уединенном острове. . . Кто вызвал их сюда таинственным приглашением? Зачем кто-то убивает их, одного за другим, самыми невероятными способами?',
      price: 2000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pfd/p7e/35665412.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/kristi-a-desjat-negritjat-100329448/?c=750000000'
    },
     {
      id: 6,
      name: 'Коврик Коврик для йоги и фитнеса нескользящий 183х61 фиолетовый',
      description: 'Представляем коврик для йоги и фитнеса - удобный и практичный аксессуар для занятий йогой и фитнесом дома, в спортзале или на открытом воздухе. Коврик для йоги с чехлом станет полезным помощником в достижении лучших результатов в тренировках.',
      price: 2107,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p29/pb8/23040234.jpeg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/kovrik-dlja-iogi-i-fitnesa-neskol-zjaschii-183h61-fioletovyi-134193498/?c=750000000'
    },
    {
      id: 7,
      name: 'Кеды adidas Handball Spezial коричневый',
      description: 'Кеды adidas Handball Spezial — стильное и удобное решение для повседневного использования, которое сочетает в себе классический дизайн и высокое качество материалов.',
      price: 84990,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc0/pe6/16804579.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/kedy-adidas-handball-spezial-if6490-korichnevyi-40-5-132455286/?c=750000000'
    },
    {
      id: 8,
      name: 'Dr. Althea сыворотка Vitamin C Boosting Serum 63% для лица 30 мл',
      description: 'Осветляющая сыворотка для лица Vitamin C Boosting Serum 63% от Dr.Althea — это интенсивная осветляющая сыворотка с высокой концентрацией витамина C (63%), разработанная для борьбы с пигментацией, улучшения тона кожи и придания ей здорового сияния.',
      price: 4989,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p21/p55/46324127.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/dr-althea-syvorotka-vitamin-c-boosting-serum-63-dlja-litsa-30-ml-128786853/?c=750000000'
    },
    {
      id: 9,
      name: 'Сумка шоппер искусственная замша коричневый',
      description: 'Сумка шоппер 7954 dirty brown — стильный и практичный аксессуар для повседневного использования, выполненный из искусственной замши. Эта сумка сочетает в себе удобство и современный городской стиль.',
      price: 9000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p98/p1e/32245458.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/sumka-shopper-7954-dirty-brown-iskusstvennaja-zamsha-korichnevyi-136911129/?c=750000000'
    },
     {
      id: 10,
      name: 'Кварцевые SOKOLOV розовое золото',
      description: 'Форма-часовкруг, Материал корпуса-розовое золото, Материал браслета- кожа,Стекло-сапфировое',
      price: 559000,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p65/p44/7088374.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/kvartsevye-sokolov-211-01-00-000-02-03-3-rozovoe-zoloto-129675867/?c=750000000'
     }
     
  ];
  share(link: string, name: string) {
  const message = encodeURIComponent(`Посмотри, что я нашел на Kaspi: ${name} - ${link}`);
  window.open(`https://wa.me/?text=${message}`, '_blank'); 
}
}