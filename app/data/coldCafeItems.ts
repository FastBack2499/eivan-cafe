export const coldCafeItems: {
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
      title: 'آیس لاته',
      description: 'کافئین بالا (100 ربوستا، 70/30)<br/>کافئین پایین (100 عربیکا، 50/50)',
      prices: [
          {
          id: 1,
          priceTitle: 'کافئین بالا',
          priceNum: 85
          },
          {
          id: 2,
          priceTitle: 'کافئین پایین',
          priceNum: 108
          },
      ]
    },
    {
      id: 2,
      title: 'آیس موکا',
      description: 'کافئین بالا (100 ربوستا، 70/30)<br/>کافئین پایین (100 عربیکا، 50/50)',
      prices: [
          {
          id: 1,
          priceTitle: 'کافئین بالا',
          priceNum: 105
          },
          {
          id: 2,
          priceTitle: 'کافئین پایین',
          priceNum: 128
          },
      ]
    },
    {
      id: 3,
      title: 'آیس آمریکانو',
      description: 'کافئین بالا (100 ربوستا، 70/30)<br/>کافئین پایین (100 عربیکا، 50/50)',
      prices: [
          {
          id: 1,
          priceTitle: 'کافئین بالا',
          priceNum: 60
          },
          {
          id: 2,
          priceTitle: 'کافئین پایین',
          priceNum: 95
          },
      ]
    }
  ]
