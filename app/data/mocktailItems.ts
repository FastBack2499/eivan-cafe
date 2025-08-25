export const mocktailItems: {
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
    title: 'لیموناد',
    price: 61
  },
  {
    id: 2,
    title: 'اورنج پانچ',
    price: 62
  },
  {
    id: 3,
    title: 'اوشن کرش',
    price: 62
  },
]
