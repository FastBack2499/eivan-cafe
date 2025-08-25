export const cakeItems: {
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
    title: 'کوکی کوچک',
    price: 15
  },
  {
    id: 2,
    title: 'چیز کیک',
    price: 98
  },
]
