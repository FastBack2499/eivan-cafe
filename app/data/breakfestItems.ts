export const breakfestItems: {
    id: number,
    title: string;
    description?: string;
    picture?: string;
    price?: number;
    prices?: {
      id: number,
      priceTitle: string,
      priceNum: number,
    }[]
  }[] = [
  {
    id: 1,
    title: 'املت',
    price: 82
  },
  {
    id: 2,
    title: 'تست بوقلمون',
    description: 'به همراه سس پستو',
    picture: '/ItemsPics/turkeySandwich.webp',
    price: 116
  },
]
