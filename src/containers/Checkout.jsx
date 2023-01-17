import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppContext } from '../context/AppProvider';

import '../styles/components/Checkout.css';

const Checkout = () => {
  const {
    state: { cart },
    removeFromCart,
    handleSumTotal,
  } = useContext(AppContext);

  const handleRemove = (index) => {
    removeFromCart(index);
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>{cart.length > 0 ? 'Lista de pedidos' : 'Sin pedidos...'}</h3>
        {cart.map((item, i) => (
          <div className="Checkout-item" key={i}>
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <button type="button" onClick={() => handleRemove(i)}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar Pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
