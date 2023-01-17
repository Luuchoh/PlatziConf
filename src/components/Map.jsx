import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Map = ({ data }) => {
  const [position, setPosition] = useState([]);
  useEffect(() => {
    if (!!data.latitude) {
      setPosition([data.latitude, data.longitude]);
    }
  }, [data]);

  return (
    <>
      {position.length > 0 ? (
        <MapContainer center={position} zoom={8} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      ) : (
        <></>
      )}
    </>
  );
};

export default Map;
