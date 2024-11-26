import React from "react";
import {
  MapContainer as LeafletMapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { STATUS_LABELS, CREW_TYPES, crews } from "../../../data/incidentsAndCrews";
import { useData } from '../../../contexts/DataContext';
import { CREW_ICONS, EMERGENCY_ICONS } from "../../../data/mapIcons";
import MapControls from "./MapControls";



function MapContainer() {
  const mapTilerKey = "w0AQ29klq1OfzFrCAhma"; // MapTiler API key

  const { incidents } = useData();

  return (
    <LeafletMapContainer
      center={[52.23, 21.03]}
      zoom={13}
      className="z-[1] h-[calc(100vh-125px)] sm:h-[calc(100vh-65px)]"
      style={{ width: "100vw" }}
      zoomControl={false}
    >
      <MapControls />
      <TileLayer
        url={`https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=${mapTilerKey}`}
        attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> contributors &copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>'
      />

      {/* Incident Markers */}
      {incidents.map((incident) => (
        <Marker
          key={incident.id}
          position={incident.position}
          icon={EMERGENCY_ICONS[incident.type] || EMERGENCY_ICONS.OTHER} // Fallback for unknown types
        >
          <Popup>
            <div><strong>{incident.description}</strong></div>
            <div>{incident.location}</div>
            <div>{STATUS_LABELS[incident.status] || incident.status}</div>
          </Popup>
        </Marker>
      ))}

      {/* Crew Markers */}
      
      {crews.map((crew) => (
        <Marker
          key={crew.id}
          position={crew.position}
          icon={CREW_ICONS[CREW_TYPES[crew.type]?.id] || CREW_ICONS.OTHER} // Fallback for unknown crew types
        >
          <Popup>
            <strong>{crew.name}</strong>
            <br />
            Typ: {CREW_TYPES[crew.type]?.label || 'Nieznany'}
            <br />
            <span
              className={
                crew.status === "Dostępne" ? "text-green-600" : "text-red-600"
              }
            >
              {crew.status}
            </span>
          </Popup>
        </Marker>
      ))}
    </LeafletMapContainer>
  );
}

export default MapContainer;
