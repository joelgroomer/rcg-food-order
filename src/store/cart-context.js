import React, { useReducer } from 'react';

const CartContext = React.createContext({
  items: [],
  itemCount: 0,
  addItem: (item, qty) => {},
  removeItem: (itemId, qty) => {},
});
export default CartContext;

export const CartContextProvider = props => {
  const [cartState, dispatchCart] = useReducer(cartReducer, {
    items: [],
    itemCount: 0,
  });

  const addItem = (item, qty) => {
    dispatchCart({ type: 'ADD_TO_CART', item: item, qty: qty });
  };

  const removeItem = (itemId, qty) => {
    dispatchCart({ type: 'REM_FROM_CART', itemId: itemId, qty: qty });
  };

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        itemCount: cartState.itemCount,
        addItem: addItem,
        removeItem: removeItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    let found = false;
    let newItems = [];
    for (const existingItem of state.items) {
      if (existingItem.id === action.item.id) {
        found = true;
        newItems.push({
          id: existingItem.id,
          name: existingItem.name,
          price: existingItem.price,
          qty: existingItem.qty + action.qty,
        });
      } else {
        newItems.push(existingItem);
      }
    }

    if (!found) {
      newItems.push({
        id: action.item.id,
        name: action.item.name,
        price: action.item.price,
        qty: action.qty,
      });
    }

    return { items: newItems, itemCount: itemCountFor(newItems) };
  } else if (action.type === 'REM_FROM_CART') {
    let newItems = [];
    for (const existingItem of state.items) {
      if (existingItem.id === action.itemId) {
        existingItem.qty -= action.qty;
        if (existingItem.qty <= 0) continue;
      }
      newItems.push(existingItem);
    }
    return { items: newItems, itemCount: itemCountFor(newItems) };
  }

  return { items: [], itemCount: 0 };
};

const itemCountFor = obj => {
  let count = 0;
  for (const o of obj) {
    count += o.qty;
  }
  return count;
};
