export const hotDrinkItems: {
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
      title: 'هات چاکلت',
      price: 78
    },
    {
      id: 2,
      title: 'پینک چاکلت',
      price: 82
    },
    {
      id: 3,
      title: 'وایت چاکلت',
      price: 90
    },
    {
      id: 4,
      title: 'ماسالا',
      price: 85
    },
  ]