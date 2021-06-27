import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const CartButton = () => {
  const dispatch = useDispatch();
  const itemsQuantity = useSelector((state) => state.cart.itemsQuantity);

  const onToggleCart = () => dispatch(uiActions.toggleCart());

  return (
    <button onClick={onToggleCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsQuantity}</span>
    </button>
  );
};

export default CartButton;
