import { TMenuItem } from '@/components/main/header/types';

export const catalog: TMenuItem[] = [
  {
    title: 'Plants',
    type: 'main',
    picture: '/pictures/uyqprhxwdxligxwedzlo.webp',
    children: [
      { title: 'All plants' },
      {
        title: 'Indoor plants',
        children: [
          {
            title: 'Height',
            children: [
              { title: 'Tiny' },
              { title: 'Small' },
              { title: 'Medium' },
              { title: 'Tall' },
            ],
          },
          {
            title: 'Plant type',
            children: [
              { title: 'Hanging' },
              { title: 'Patterned or colourful' },
              { title: 'Succulents & cacti' },
              { title: 'Fern' },
              { title: 'Palms' },
              { title: 'Flowering' },
            ],
          },
          {
            title: 'Room',
            children: [
              { title: 'Bedroom' },
              { title: 'Bathroom' },
              { title: 'Living room' },
              { title: 'Kitchen' },
              { title: 'Study' },
              { title: 'Corridor' },
            ],
          },
          { title: 'Most popular' },
          { title: 'Unkillables' },
          { title: 'Shade lovers' },
        ],
      },
      {
        title: 'Outdoor plants',
        children: [
          {
            title: 'Conditions',
            children: [
              { title: 'Sunny spot' },
              { title: 'Shady spot' },
              { title: 'Windy spot' },
            ],
          },
          {
            title: 'Outdoor space',
            children: [
              { title: 'Balcony' },
              { title: 'Windowsill' },
              { title: 'Patio & deck' },
              { title: 'Garden' },
              { title: 'Doorstep' },
            ],
          },
          {
            title: 'Plant type',
            children: [
              { title: 'Palms & trees' },
              { title: 'Ferns' },
              { title: 'Climbing' },
              { title: 'Bamboo & grasses' },
              { title: 'Flowering' },
            ],
          },
          { title: 'What to plant now' },
        ],
      },
      { title: 'New in' },
      { title: 'Plant bundles' },
      { title: 'Seed & bulbs' },
    ],
  },
  {
    title: 'Pots',
    type: 'main',
    picture: '/pictures/noovqiilppwn6v3iyfbt.webp',
    children: [
      { title: 'All pots' },
      { title: 'Indoor pots' },
      { title: 'Outdoor pots' },
    ],
  },
  {
    title: 'Plant care',
    type: 'main',
    picture: '/pictures/xpfb2inkgcuscuoq8fia.jpg',
    children: [
      { title: 'All plant care' },
      { title: 'Tools & accessories' },
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
