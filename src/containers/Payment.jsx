import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { useNavigate } from 'react-router-dom';

import { AppContext } from '../context/AppProvider';

import '../styles/components/Payment.css';

const Payment = () => {
  const {
    state: { cart, buyer },
    addNewOrder,
    handleSumTotal,
  } = useContext(AppContext);

  const navigate = useNavigate();

  const paypalOptions = {
    clientId: 'sb',
    intent: 'capture',
    currency: 'USD',
  };

  const btnStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      navigate('/checkout/success');
    }
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido : </h3>
        {cart.map((item) => (
          <div className="Paymnet-item" key={item.title}>
            <div className="Payment- element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            options={paypalOptions}
            style={btnStyles}
            amount={handleSumTotal()}
            onClick={() => console.log('first')}
            onSuccess={(data) => handlePaymentSuccess(data)}
            onError={(err) => console.log('first', err)}
            onCancel={(data) => console.log('data', data)}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Payment;
