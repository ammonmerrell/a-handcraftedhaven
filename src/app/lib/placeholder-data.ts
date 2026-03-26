// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const sellers = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Seller',
    email: 'seller@nextmail.com',
    password: '456789',
  },
];

const products = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Yellow Flower',
    description: 'a yarn flower',
    image_url: '/products/single-handmade-pot.avif',
    price: '2000',
    tags: 'decoration',
  }
];

const creatorInfo = [
  {
    customer_id: products[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  }
];

const buyers = [
    {
    id: '412222a1-4001-4271-9855-fec4b6a6442a',
    name: 'fred',
    email: 'fred@nextmail.com',
    password: '123456',
    }
];

export { sellers, products, creatorInfo, buyers };