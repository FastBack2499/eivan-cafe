export const coldDrinkItems: {
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
      title: 'شیک وانیل',
      price: 90
    },
    {
      id: 2,
      title: 'شیک شکلات',
      price: 110
    },
    {
      id: 3,
      title: 'شیک پینات',
      price: 150
    },
    {
      id: 4,
      title: 'شیک لوتوس',
      price: 160
    },
    {
      id: 5,
      title: 'شیک نوتلا',
      price: 160
    },
  ]
