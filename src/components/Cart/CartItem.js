import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const CartItem = ({ meal }) => {
  const { title, total, quantity, price, id } = meal;

  const dispatch = useDispatch();

  const onAddToCart = () => dispatch(cartActions.addToCart({ id }));

  const onRemoveFromCart = () => dispatch(cartActions.removeFromCart({ id }));

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => onAddToCart()}>+</button>
          <button onClick={() => onRemoveFromCart()}>-</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
