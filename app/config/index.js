// we will be using this dummy data,
// don't worry, you can find this data in the git repo 
// you can find the git repo link in the description ;)

export const categories = [
  {
    id: 1,
    title: "Cappuccino",
  },
  {
    id: 2,
    title: "Latte",
  },
  {
    id: 3,
    title: "Espresso",
  },
  {
    id: 4,
    title: "Mocha",
  },
  {
    id: 5,
    title: "Americano",
  },
]

export const coffeeItems = [
  {
    id: 1,
    name: 'Black Coffee',
    price: '25.50',
    volume: '116 ml',
    stars: '4.6',
    categoryId:5,
    image: require('../../assets/images/coffee1.png'),
    desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.'
  },
  
  {
    id: 2,
    name: 'Cappuccino',
    price: '15.50',
    categoryId:1,
    volume: '110 ml',
    stars: '4.3',
    image: require('../../assets/images/coffee2.png'),
    desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.'
  },
  
  {
    id: 3,
    name: 'Espresso',
    price: '30.00',
    volume: '100 ml',
    categoryId:3,
    stars: '4.0',
    image: require('../../assets/images/coffee3.png'),
    desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.'  },
  
  {
    id: 4,
    name: 'Latte',
    categoryId:2,
    price: '10.30',
    volume: '80 ml',
    stars: '3.5',
    image: require('../../assets/images/coffee4.png'),
    desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.'  },
  
  {
    id: 5,
    name: 'Mocha',
    price: '23.10',
    volume: '120 ml',
    categoryId:4,
    stars: '4.7',
    image: require('../../assets/images/coffee5.png'),
    desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.'  },
  

]


export const tableItems = [
  {
    id: 1,
    name: 'Table 2',
    price: '25.50',
    volume: '5 Person max',
    stars: '4.6',
    image: require('../../assets/images/table.png'),
    desc: 'Table representing Nepal\'s mountain'
  },
  {
    id: 2,
    name: 'Table 1',
    price: '25.50',
    volume: '5 Person max',
    stars: '4.6',
    image: require('../../assets/images/table.png'),
    desc: 'Table representing Nepal\'s national Animal'
  },
  
]