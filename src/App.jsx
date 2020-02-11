import React from 'react';
import Product from './components/Product';
import products from './data';

const App = () => {
  const productItems = products.map((product, index) => <Product key={index} info={product} />);
  return <div>{productItems}</div>;
};

export default App;
