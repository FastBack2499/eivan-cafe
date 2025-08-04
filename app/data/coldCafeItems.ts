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
      title: 'آیس کافه',
      description: 'کافئین بالا روبوستا<br/>کافئین پایین عربیکا',
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
      title: 'آیس موکا کافه',
      description: 'کافئین بالا روبوستا<br/>کافئین پایین عربیکا',
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
      title: 'آیس آمریکانو کافه',
      description: 'کافئین بالا روبوستا<br/>کافئین پایین عربیکا',
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