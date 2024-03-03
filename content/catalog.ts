import { TMenuItem } from '@/components/main/header/types';

export const catalog: TMenuItem[] = [
  {
    title: 'Plants',
    type: 'main',
    picture: '/pictures/qr1iimuwgzf0lr8ljckj.jpg',
    href: '/products/type/plants',
    children: [
      { title: 'All plants', href: '/products/type/plants' },
      {
        title: 'Indoor plants',
        href: '/products/type/plants/enviroment/indoor',
        children: [
          {
            title: 'Height',
            children: [
              {
                title: 'Tiny',
                href: '/products/type/plants/enviroment/indoor/height/xs',
              },
              {
                title: 'Small',
                href: '/products/type/plants/enviroment/indoor/height/sm',
              },
              {
                title: 'Medium',
                href: '/products/type/plants/enviroment/indoor/height/md',
              },
              {
                title: 'Tall',
                href: '/products/type/plants/enviroment/indoor/height/lg',
              },
            ],
          },
          {
            title: 'Plant type',
            children: [
              {
                title: 'Hanging',
                href: '/products/type/plants/enviroment/indoor/plantType/climbing',
              },
              {
                title: 'Succulents / cacti',
                href: '/products/type/plants/plantType/succulents',
              },
              {
                title: 'Fern',
                href: '/products/type/plants/enviroment/indoor/plantType/ferns',
              },
              {
                title: 'Palms',
                href: '/products/type/plants/enviroment/indoor/plantType/palms-trees',
              },
              {
                title: 'Flowering',
                href: '/products/type/plants/enviroment/indoor/plantType/flowering',
              },
            ],
          },
          {
            title: 'Unkillables',
            href: '/products/type/plants/enviroment/indoor/careLevel/unkillable',
          },
          {
            title: 'Shade lovers',
            href: '/products/type/plants/enviroment/indoor/light/shade',
          },
        ],
      },
      {
        title: 'Outdoor plants',
        href: '/products/type/plants/enviroment/outdoor',
        children: [
          {
            title: 'Conditions',
            children: [
              {
                title: 'Sunny spot',
                href: '/products/type/plants/enviroment/outdoor/light/direct-sunlight',
              },
              {
                title: 'Shady spot',
                href: '/products/type/plants/enviroment/outdoor/light/shade',
              },
              {
                title: 'Windy spot',
                href: '/products/type/plants/enviroment/outdoor/wind/is-wind',
              },
            ],
          },
          {
            title: 'Plant type',
            children: [
              {
                title: 'Palms / trees',
                href: '/products/type/plants/enviroment/outdoor/plantType/palms-trees',
              },
              {
                title: 'Ferns',
                href: '/products/type/plants/enviroment/outdoor/plantType/ferns',
              },
              {
                title: 'Climbing',
                href: '/products/type/plants/enviroment/outdoor/plantType/climbing',
              },
              {
                title: 'Bamboo / grasses',
                href: '/products/type/plants/enviroment/outdoor/plantType/bamboo-grasses',
              },
              {
                title: 'Flowering',
                href: '/products/type/plants/enviroment/outdoor/plantType/flowering',
              },
              {
                title: 'Edibles',
                href: '/products/type/plants/enviroment/outdoor/plantType/edibles',
              },
            ],
          },
        ],
      },
      { title: 'New in', href: '/products/type/plants/new/new-in' },
    ],
  },
  {
    title: 'Pots',
    type: 'main',
    picture: '/pictures/noovqiilppwn6v3iyfbt.webp',
    href: '/products/type/pots',
    children: [
      { title: 'All pots', href: '/products/type/pots' },
      { title: 'Indoor pots', href: '/products/type/pots/enviroment/indoor' },
      { title: 'Outdoor pots', href: '/products/type/pots/enviroment/outdoor' },
    ],
  },
  {
    title: 'Plant care',
    type: 'main',
    picture: '/pictures/xpfb2inkgcuscuoq8fia.jpg',
    children: [
      { title: 'All plant care' },
      { title: 'Tools / accessories' },
      {
        title: 'Indoor plant care',
        children: [
          { title: 'Plant care articles' },
          { title: 'Plants care video courses' },
        ],
      },
      {
        title: 'Outdoor plant care',
        children: [
          { title: 'Plant care articles' },
          { title: 'Plants care video courses' },
        ],
      },
      { title: 'Ask the plant doctor' },
    ],
  },
  {
    title: 'Businesses',
    type: 'main',
    picture: '/pictures/Jan_23_B2B-min.jpg',
    children: [
      { title: 'All businesses' },
      { title: 'Commercial offices' },
      { title: 'Corporate gifting' },
      { title: 'Home office' },
    ],
  },
  {
    title: 'Gifts',
    type: 'main',
    picture: '/pictures/ox3cn4sjtfxnnn2jgpek.webp',
    children: [
      { title: 'All gifts' },
      { title: 'Most popular gifts' },
      { title: 'Take the gifting quiz' },
      { title: 'Gift vouchers' },
      {
        title: 'Occasion',
        children: [
          { title: 'Birthday' },
          { title: 'New home' },
          { title: 'Congratulations' },
          { title: 'Just because' },
        ],
      },
      {
        title: 'Price',
        children: [
          { title: 'Gifts up to £40' },
          { title: 'Gifts up to £60' },
          { title: 'Gifts up to £100' },
        ],
      },
      {
        title: 'Gift ideas',
        children: [
          { title: 'Unkillable gifts' },
          { title: 'Colourful gifts' },
          { title: 'Pet and child safe gifts' },
        ],
      },
    ],
  },
];
