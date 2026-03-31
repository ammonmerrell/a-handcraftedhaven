// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const sellers = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'Seller',
    email: 'seller@nextmail.com',
    password: '123456',
    story: 'A seller of handmade goods.'
  }
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

const review = [
  {
    id: 'd6e14827-9fe1-4961-8c5b-ea44a9bd81bb',
    product_id: products[0].id,
    rating: '5',
    feedback: 'This flower is made of the highest quality and has that handmade charm, 5 of 5!',
    date: '2026-03-06',
  }
];



export { sellers, products, review };