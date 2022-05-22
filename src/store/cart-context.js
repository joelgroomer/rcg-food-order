import React, { useState, useEffect } from 'react';

const CartContext = React.createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});

const CartContextProvider = props => {
  const [items, setItems] = useState();

  useEffect(() => {
    const storedCart = localStorage.getItem('storedCart');

    if (storedCart) {
      setItems(storedCart);
    }
  }, []);

  const addItem = (item, qty) => {
    setItems(prevItems => {
      let found = false;
      for (const existingItem of prevItems) {
        if (existingItem.id === item.id) {
          found = true;
          existingItem.qty += qty;
          break;
        }
      }

      if (!found) {
        prevItems.append({
          id: item.id,
          name: item.name,
          price: item.price,
          qty: item.qty,
        });
      }

      return prevItems;
    });
  };

  const removeItem = (item, qty) => {
    setItems(prevItems => {
      for (const existingItem of prevItems) {
        if (existingItem.id === item.id) {
          existingItem.qty -= qty;
          if (existingItem.qty < 0) existingItem.qty = 0;
        }
      }
      return prevItems;
    });
  };

  return (
    <CartContext.Provider
      value={{
        items: [],
        addItem: addItem,
        removeItem: removeItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
