export const hotCafeItems: {
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
      title: 'سینگل عربیکا',
      prices: [
          {
          id: 1,
          priceTitle: '100%',
          priceNum: 80
          },
          {
          id: 2,
          priceTitle: '70/30%',
          priceNum: 45
          },
      ]
    },
    {
      id: 2,
      title: 'سینگل روبوستا',
      prices: [
          {
          id: 1,
          priceTitle: '50/50%',
          priceNum: 55
          },
          {
          id: 2,
          priceTitle: '100%',
          priceNum: 40
          },
      ]
    },
    {
      id: 3,
      title: 'دبل عربیکا',
      prices: [
          {
          id: 1,
          priceTitle: '100%',
          priceNum: 90
          },
          {
          id: 2,
          priceTitle: '70/30%',
          priceNum: 55
          },
      ]
    },
    {
      id: 4,
      title: 'دبل روبوستا',
      prices: [
          {
          id: 1,
          priceTitle: '50/50%',
          priceNum: 65
          },
          {
          id: 2,
          priceTitle: '100%',
          priceNum: 50
          },
      ]
    },
    {
      id: 5,
      title: 'آمیرکانو',
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
    },
    
    {
      id: 6,
      title: 'لاته',
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
      id: 7,
      title: 'موکا',
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
      id: 8,
      title: 'کاپوچینو',
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
      id: 9,
      title: 'فلت وایت',
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
      id: 10,
      title: 'کورتادو',
      description: 'کافئین بالا روبوستا<br/>کافئین پایین عربیکا',
      prices: [
          {
          id: 1,
          priceTitle: 'کافئین بالا',
          priceNum: 70
          },
          {
          id: 2,
          priceTitle: 'کافئین پایین',
          priceNum: 95
          },
      ]
    },{
      id: 11,
      title: 'سیروپ',
      description: 'کارامل، فندق، وانیل، آیریش',
      price: 15
    },
  ]