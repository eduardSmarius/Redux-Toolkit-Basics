import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, Fragment } from 'react';
import { sendCardData, getPreviousCart } from './store/ui-actions';

let firstReload = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.showCart);
  const notification = useSelector((state) => state.ui.notification);
  const isChanged = useSelector((state) => state.cart.isChanged);

  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (firstReload) {
      dispatch(getPreviousCart());
      firstReload = false;
      return;
    }

    if (!isChanged) return;
    dispatch(sendCardData(cart));
  }, [cart, dispatch, isChanged]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
