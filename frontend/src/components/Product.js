import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import axios from 'axios';
import { Store } from '../Store';

function Product(props) {
  const { product } = props;
  const { state, dispatch: chgDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert(`Prouduct is out of stock`);
      return;
    }

    chgDispatch({
      type: 'ADD_ITEM_IN_CART',
      payload: { ...item, quantity },
    });
  };
  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>RS {product.price}</Card.Text>
        {product.countInStock === 0 ? (
          <Button variant="light" disabled>
            out of stock
          </Button>
        ) : (
          <Button onClick={() => addToCartHandler(product)}>ADD TO CART</Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default Product;
