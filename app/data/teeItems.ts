export const teeItems: {
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
      title: 'چای',
      price: 50
    },
    {
      id: 2,
      title: 'گل گاوزبان',
      price: 69
    },
    {
      id: 3,
      title: 'به لیمو',
      price: 69
    },
    {
      id: 4,
      title: 'آویشن',
      price: 69
    },
    {
      id: 5,
      title: 'دمنوش دلخواه',
      price: 69
    },
  ]
