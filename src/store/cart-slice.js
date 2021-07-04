import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], itemsQuantity: 0, isChanged: false },
  reducers: {
    addToCart(state, action) {
      const meal = action.payload.meal;
      const id = action.payload.id;
      const foundItem = state.items.find((item) => item.id === id);
      state.itemsQuantity++;
      state.isChanged = true;

      if (!foundItem) {
        state.items.push({ ...meal, quantity: 1, total: meal.price });
      } else {
        foundItem.quantity++;
        foundItem.total = foundItem.total + foundItem.price;
      }
    },

    removeFromCart(state, action) {
      const id = action.payload.id;
      const foundItem = state.items.find((item) => item.id === id);
      state.isChanged = true;

      if (foundItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== foundItem.id);
      }

      foundItem.quantity--;
      foundItem.total = foundItem.total - foundItem.price;
      state.itemsQuantity--;
    },

    showPreviousCart(state, action) {
      if (action.payload.items) {
        state.items = action.payload.items;
        action.payload.items.map(
          (obj) => (state.itemsQuantity += obj.quantity)
        );
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
