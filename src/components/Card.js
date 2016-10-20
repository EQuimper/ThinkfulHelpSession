import React from 'react';

const Card = ({ children }) => (
  <div style={styles.card}>
    {children}
  </div>
);

const styles = {
  card: {
    backgroundColor: 'blue',
    borderColor: '#ddd',
    boxShadow: '1px 1px #ddd',
    width: '50%',
  }
}

export default Card;
