import React from 'react';

const ShoppingCart = ({ cart, suma }) => {
  return (
    <>
      <span>{cart.length > 0 ? cart.length : 'No hay productos seleccionados'}</span>
      <span>Total: ${suma} </span>
    </>
  );
};

export default ShoppingCart;
