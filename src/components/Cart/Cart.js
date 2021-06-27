import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = () => {
  const meals = useSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {meals.map((meal) => {
          return <CartItem key={meal.id} meal={meal} />;
        })}
      </ul>
    </Card>
  );
};

export default Cart;
