import React from 'react';
import Card from './Card';
import styles from './Jumbotron.module.css';

const Jumbotron = props => {
  return (
    <div
      className={
        styles.jumbotron + (props.className ? ` ${props.className}` : '')
      }
    >
      <div className={styles['jumbotron-img-container']}>
        <img
          src={props.image}
          className={styles['jumbotron-img']}
          alt={props.imageAlt || ''}
        />
      </div>
      <Card className={styles['jumbotron-card']}>{props.children}</Card>
    </div>
  );
};

export default Jumbotron;
