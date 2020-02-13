import React from 'react';

const Product = ({ info }) => (
  <>
    <ul>
      <li>Producto: {info.name}</li>
      <li>Precio: ${info.price}.00</li>
      <li>Descripción: {info.description}</li>
      <li>
        <img src={info.imgUrl} alt="No encontrado" />
      </li>
    </ul>
  </>
);

export default Product;
