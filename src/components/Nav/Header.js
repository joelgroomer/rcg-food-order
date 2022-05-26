import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import styles from './Header.module.css';

const Header = props => {
  const cartCtx = useContext(CartContext);

  return (
    <div className={styles.header}>
      <h1>ReactMeals</h1>
      <h2>Cart button here ({cartCtx.itemCount})</h2>
    </div>
  );
};

export default Header;
