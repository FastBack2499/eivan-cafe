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
      title: 'وانیل',
      price: 90
    },
    {
      id: 2,
      title: 'شکلات',
      price: 110
    },
    {
      id: 3,
      title: 'کره بادوم زمینی',
      price: 150
    },
    {
      id: 4,
      title: 'لوتوس',
      price: 160
    },
    {
      id: 5,
      title: 'نوتلا',
      price: 160
    },
  ]