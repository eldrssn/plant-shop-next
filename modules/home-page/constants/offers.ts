import { PRODUCTS_SLUG } from '@/common/constants';
import { OfferPositions } from '@/common/types';

export const firstAds = [
  {
    title: 'Outdoor plants',
    description:
      'Spring is here. Choose from our easy outdoor range and turn that sun spot into a leafy paradise.',
    buttonText: 'Shop outdoor',
    buttonHref: `/${PRODUCTS_SLUG}/type/plants/enviroment/outdoor`,
    image: '/pictures/Outdoor_23-min.jpg',
    position: OfferPositions.LEFT,
    id: 1,
  },
  {
    title: 'Plants for your business',
    description:
      'From creating an office jungle to sending an unusual gift, there’s plenty of ways to turn your workplace green.',
    buttonText: 'Get in touch',
    buttonHref: '/#join-us',
    image: '/pictures/Jan_23_B2B-min.jpg',
    position: OfferPositions.RIGHT,
    id: 2,
  },
];

export const secondAds = [
  {
    title: '(Almost) unkillable houseplants',
    description:
      "We know what it’s like to be guilty of plant murder, we've pulled together a collection of plants who are low maintenance enough to forgive you for the odd missed watering.",
    buttonText: 'Shop the collection',
    buttonHref: `${PRODUCTS_SLUG}/type/plants/enviroment/indoor/careLevel/unkillable`,
    image: '/pictures/Jan_23_Unkillable-min.jpg',
    position: OfferPositions.RIGHT,
    id: 5,
  },
];
