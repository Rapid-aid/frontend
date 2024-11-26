import L from 'leaflet';

export const createMapIcon = (url, size = 34) => new L.Icon({
  iconUrl: url,
  iconSize: [size, size],
  iconAnchor: [size/2, size * 0.6],
  popupAnchor: [1, -size * 0.65],
  className: "drop-shadow-[1px_3px_3px_#0005]",
});

export const CREW_ICONS = {
  POLICE: createMapIcon('./markers/Crew/Police.svg'),
  AMBULANCE: createMapIcon('./markers/Crew/Ambulance.svg'),
  FIRE_STATION: createMapIcon('./markers/Crew/FireStation.svg'),
  OTHER: createMapIcon('./markers/Crew/OtherCrew.svg'),
};

export const EMERGENCY_ICONS = {
  FIRE: createMapIcon('./markers/Emergency/Fire.svg', 36),
  FLOOD: createMapIcon('./markers/Emergency/Flood.svg', 36),
  ACCIDENT: createMapIcon('./markers/Emergency/Accident.svg', 36),
  EARTHQUAKE: createMapIcon('./markers/Emergency/Earthquake.svg', 36),
  OTHER: createMapIcon('./markers/Emergency/Other.svg', 36),
};