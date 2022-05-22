import React from 'react';
import styles from './Header.module.css';

const Header = props => {
  return (
    <div className={styles.header}>
      <h1>ReactMeals</h1>
      <h2>Cart button here</h2>
    </div>
  );
};

export default Header;
