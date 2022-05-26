import React, { useContext } from 'react';
import styles from './Menu.module.css';
import Card from '../UI/Card';
import MenuItem from './MenuItem';
import { DUMMY_MEALS } from './dummy-meals';
import CartContext from '../../store/cart-context';

const Menu = props => {
  const cartCtx = useContext(CartContext);

  return (
    <Card className={styles.menu}>
      {DUMMY_MEALS.map(item => {
        return <MenuItem key={item.id} item={item} addItem={cartCtx.addItem} />;
      })}
    </Card>
  );
};

export default Menu;
