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
    price: 20
  },
  {
    id: 2,
    title: 'کوکی گردویی',
    price: 65
  },
  {
    id: 3,
    title: 'چیز کیک',
    price: 98
  },
]
