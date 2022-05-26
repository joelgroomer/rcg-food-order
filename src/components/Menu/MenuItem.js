import React, { useState } from 'react';
import styles from './MenuItem.module.css';
import Button from '../UI/Button';

const MenuItem = props => {
  const [qty, setQty] = useState(1);

  const onQtyChange = event => {
    setQty(event.target.value);
  };

  const handleClick = event => {
    event.preventDefault();
    props.addItem(props.item, qty);
  };

  return (
    <div className={styles['menu-item']}>
      <div className={styles.details}>
        <h3 className={styles['item-name']}>{props.item.name}</h3>
        <h3 className={styles.description}>{props.item.description}</h3>
        <h3 className={styles.price}>{props.item.price}</h3>
      </div>
      <form className={styles.controls}>
        <label htmlFor="qty">Amount</label>
        <input id="qty" type="number" onChange={onQtyChange} value={qty} />
        <Button fill="true" onClick={handleClick}>
          + Add
        </Button>
      </form>
    </div>
  );
};

export default MenuItem;
