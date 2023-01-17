import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useLocation = (address) => {
  const [map, setMap] = useState([]);
  const API = `http://api.positionstack.com/v1/forward?access_key=${process.env.ACCESS_TOKEN}&query=${address}&country=CO`;

  useEffect(() => {
    const location = async () => {
      const response = await axios(API);
      setMap(response.data.data[0]);
    };
    location();
  }, []);

  return map;
};

export default useLocation;
