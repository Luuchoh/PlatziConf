import React, { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AppContext } from '../context/AppProvider';

import '../styles/components/Information.css';

const Information = () => {
  const {
    state: { cart },
    addToBuyer,
  } = useContext(AppContext);
  const form = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };

    addToBuyer(buyer);
    navigate('/checkout/payment');
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto: </h2>
        </div>
        <div className="Information-form">
          <form ref={form} onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre Completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Dirección" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="País" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Código Postal" name="cp" />
            <input type="text" placeholder="Télefono" name="phone" />
            <div className="Information-buttons">
              <div className="Information-back">
                <Link to="/checkout">Regresar</Link>
              </div>
              <div className="Information-next">
                <button type="submit">Pagar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido</h3>
        {cart.map((item, i) => (
          <div className="Information-item" key={i}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
