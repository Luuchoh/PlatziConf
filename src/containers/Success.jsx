import React, { useContext, useEffect, useState } from 'react';

import Map from '../components/Map';

import { AppContext } from '../context/AppProvider';

import useLocation from '../hooks/useLocation';

import '../styles/components/Success.css';

const Success = () => {
  const {
    state: { buyer },
  } = useContext(AppContext);

  const dataLocation = useLocation(buyer[0].address);

  return (
    <div className="Success">
      <div className="Success-content">
        <h2> Gracias por tu compra</h2>
        <span>Tu pedido llegará en 3 dias a tu direccion</span>
        <div className="Success-map">
          <Map data={dataLocation} />
        </div>
      </div>
    </div>
  );
};

export default Success;
