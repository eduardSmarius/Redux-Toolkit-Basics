import { cartActions } from './cart-slice';
import { uiActions } from './ui-slice';

///////  Action Creator Functions for asynchronous tasks ///////
export const sendCardData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending',
        message: 'Sending request to DB',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        `https://react-test-6b77b-default-rtdb.europe-west1.firebasedatabase.app/cart.json`,
        {
          method: 'PUT',
          body: JSON.stringify({
            items: cart.items,
            itemsQuantity: cart.itemsQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('something went wrong');
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success',
          message: 'Data sent to DB',
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: 'Something went wrong...',
        })
      );
    }
  };
};

////// For the first reload, get the cart from the DB ///////////
export const getPreviousCart = () => {
  return async (dispatch) => {
    const fetchCart = async () => {
      const response = await fetch(
        'https://react-test-6b77b-default-rtdb.europe-west1.firebasedatabase.app/cart.json'
      );

      if (!response.ok) {
        throw new Error('something went wrong with the cart fetching');
      }

      return response;
    };

    try {
      const response = await fetchCart();
      const data = await response.json();
      dispatch(cartActions.showPreviousCart(data));
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error',
          message: 'Something went wrong bitch...',
        })
      );
    }
  };
};
