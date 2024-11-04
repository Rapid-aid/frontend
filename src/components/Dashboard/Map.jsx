import React, { useRef } from "react";
import { MapContainer, TileLayer, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map() {

  const mapRef = useRef(null);
  const latitude = 52.22919466143799;
  const longitude = 21.00840366926861;

  return (
    <MapContainer center={[latitude, longitude]} zoom={13} ref={mapRef} style={{height: "calc(100vh - 65px)", width: "100vw", zIndex: "0" }} zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Additional map layers or components can be added here */}
        <ZoomControl position="topright" />
      </MapContainer>
  );
}

export default Map;
