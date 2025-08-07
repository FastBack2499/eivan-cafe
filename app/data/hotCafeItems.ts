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
      title: 'اسپرسو ربوستا',
      prices: [
          {
          id: 1,
          priceTitle: 'سینگل',
          priceNum: 40
          },
          {
          id: 2,
          priceTitle: 'دبل',
          priceNum: 55
          },
      ]
    },
    {
      id: 2,
      title: 'اسپرسو 70/30',
      prices: [
          {
          id: 1,
          priceTitle: 'سینگل',
          priceNum: 40
          },
          {
          id: 2,
          priceTitle: 'دبل',
          priceNum: 55
          },
      ]
    },
    {
      id: 3,
      title: 'اسپرسو 50/50',
      prices: [
          {
          id: 1,
          priceTitle: 'سینگل',
          priceNum: 50
          },
          {
          id: 2,
          priceTitle: 'دبل',
          priceNum: 65
          },
      ]
    },
    {
      id: 4,
      title: 'اسپرسو عربیکا',
      prices: [
          {
          id: 1,
          priceTitle: 'سینگل',
          priceNum: 75
          },
          {
          id: 2,
          priceTitle: 'دبل',
          priceNum: 90
          },
      ]
    },
    {
      id: 5,
      title: 'آمریکانو',
      description: 'کافئین بالا (100 ربوستا، 70/30)<br/>کافئین پایین (100 عربیکا، 50/50)',
      prices: [
          {
          id: 1,
          priceTitle: 'کافئین بالا',
          priceNum: 66
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
      description: 'کافئین بالا (100 ربوستا، 70/30)<br/>کافئین پایین (100 عربیکا، 50/50)',
      picture: '/ItemsPics/CafeLatte.webp',
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
      description: 'کافئین بالا (100 ربوستا، 70/30)<br/>کافئین پایین (100 عربیکا، 50/50)',
      picture: '/ItemsPics/CafeLatte.webp',
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
      id: 9,
      title: 'فلت وایت',
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
      id: 10,
      title: 'کورتادو',
      description: 'کافئین بالا (100 ربوستا، 70/30)<br/>کافئین پایین (100 عربیکا، 50/50)',
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
    },
    {
      id: 11,
      title: 'آفوگاتو',
      description: 'اسپرسو با بستنی<br/>کافئین بالا (100 ربوستا، 70/30)<br/>کافئین پایین (100 عربیکا، 50/50)',
      prices: [
          {
          id: 1,
          priceTitle: 'کافئین بالا',
          priceNum: 94
          },
          {
          id: 2,
          priceTitle: 'کافئین پایین',
          priceNum: 119
          },
      ]
    },
    {
      id: 12,
      title: 'سیروپ',
      description: 'کارامل، فندق، وانیل، آیریش',
      price: 15
    },
  ]

