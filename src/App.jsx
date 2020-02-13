import React, { Component } from 'react';
import Product from './components/Product';
import ShoppingCart from './components/ShoppingCart';
import products from './data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: products
    };
  }

  render() {
    const productItems = products.map(product => <Product key={product.id} info={product} />);
    const carrito = [this.state.datos[1]];
    const suma = carrito.reduce((total, productos) => {
      return total + productos.price;
    }, 0);
    return (
      <>
        <div>
          Cart: <ShoppingCart cart={carrito} suma={suma} />
        </div>
        <div>{productItems}</div>;}
      </>
    );
  }
}

// const App = () => {
//   const productItems = products.map(product => <Product key={product.id} info={product} />);
//   const carrito = [products[0], products[1], products[2], products[3]];
//   const suma = carrito.reduce((total, productos) => (total += productos.price));
//   return (
//     <>
//       <div>
//         Cart: <ShoppingCart cart={carrito} total={suma} />
//       </div>
//       <div>{productItems}</div>;{console.log(suma)}
//     </>
//   );
// };

export default App;
