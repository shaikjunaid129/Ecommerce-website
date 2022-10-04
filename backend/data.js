import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Junaid',
      email: 'shaikjunaid129@gmail.com',
      password: bcrypt.hashSync('junaid'),
    },
    {
      name: 'Junaid',
      email: 'shaikjunaid12@gmail.com',
      password: bcrypt.hashSync('junaid123'),
    },
  ],
  products: [
    {
      name: 'Shirt1',
      slug: 'shirt1',
      category: 'Shirts',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      price: 200,
      brand: 'Nike',
      rating: 4,
      numReviews: 23,
      countInStock: 15,
      description: ' Good shirt',
    },
    {
      name: 'Shirt2',
      slug: 'shirt2',
      category: 'Shirts',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      price: 100,
      brand: 'Nike',
      rating: 3.5,
      numReviews: 130,
      countInStock: 15,
      description: ' Good shirt',
    },
    {
      name: 'Shirt3',
      slug: 'shirt3',
      category: 'Shirts',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      price: 100,
      brand: 'Nike',
      rating: 5,
      countInStock: 15,
      numReviews: 234,
      description: ' Good shirt',
    },
    {
      name: 'Shirt4',
      slug: 'shirt4',
      category: 'Shirts',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      price: 100,
      brand: 'Nike',
      rating: 4,
      numReviews: 120,
      countInStock: 1,
      description: ' Good shirt',
    },
    {
      name: 'Shirt5',
      slug: 'shirt5',
      category: 'Shirts',
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      price: 1000,
      brand: 'Nike',
      rating: 2.5,
      numReviews: 120,
      countInStock: 10,
      description: ' bad shirt',
    },
  ],
};

export default data;
