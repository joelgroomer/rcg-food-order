import React, { useState } from 'react';
import styles from './MenuItem.module.css';
import Button from '../UI/Button';

const MenuItem = props => {
  const [qty, setQty] = useState(1);

  const onQtyChange = event => {
    setQty(event.target.value);
  };

  return (
    <div className={styles['menu-item']}>
      <div className={styles.details}>
        <h3 className={styles['item-name']}>{props.item.name}</h3>
        <p>{props.item.description}</p>
        <h3 className={styles.price}>{props.item.price}</h3>
      </div>
      <div className={styles.controls}>
        <label htmlFor="qty"></label>
        <input id="qty" type="number" onChange={onQtyChange} value={qty} />
        <Button onClick={props.addItem.bind(this, props.item, qty)}>
          + Add
        </Button>
      </div>
    </div>
  );
};

export default MenuItem;
