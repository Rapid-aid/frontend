export const INCIDENT_TYPES = {
  FIRE: 'FIRE',
  FLOOD: 'FLOOD',
  EARTHQUAKE: 'EARTHQUAKE',
  ACCIDENT: 'ACCIDENT',
  OTHER: 'OTHER',
};

export const CREW_TYPES = {
  AMBULANCE: {
    id: 'AMBULANCE',
    label: 'Ambulans',
  },
  FIRE_STATION: {
    id: 'FIRE_STATION',
    label: 'Straż Pożarna',
  },
  POLICE: {
    id: 'POLICE',
    label: 'Policja',
  },
};

export const STATUS_LABELS = {
  new: 'Nowe',
  assigned: 'Przypisane',
  completed: 'Zakończone',
  canceled: 'Anulowane',
};


export const incidents = [
  {
    id: 'incident-1',
    type: INCIDENT_TYPES.EARTHQUAKE,
    position: [52.244914, 21.001],
    description: 'Trzęsienie ziemi',
    timestamp: new Date('2024-11-22T15:00:00'),
    location: 'Obozowa 22, 00-462 Warszawa',
    severity: 'high',
    status: 'new',
  },
  {
    id: 'incident-2',
    type: INCIDENT_TYPES.FIRE,
    position: [52.230914, 20.993],
    description: 'Pożar budynku mieszkalnego',
    timestamp: new Date('2024-11-23T09:15:00'),
    location: 'Downtown, Warsaw',
    severity: 'medium',
    status: 'assigned',
  },
  {
    id: 'incident-3',
    type: INCIDENT_TYPES.ACCIDENT,
    position: [52.240914, 20.993],
    description: 'Wypadek drogowy',
    timestamp: new Date('2024-11-25T09:15:00'),
    location: 'Downtown, Warsaw',
    severity: 'medium',
    status: 'new',
  },
];

export const crews = [
  {
    id: 'crew-1',
    type: 'AMBULANCE',
    position: [52.245236, 21.021875],
    name: 'Ambulans Miejski',
    status: 'Dostępne',
  },
  {
    id: 'crew-2',
    type: 'FIRE_STATION',
    position: [52.247914, 20.995],
    name: 'Jednostka Straży Pożarnej',
    status: 'Niedostępne',
  },
  {
    id: 'crew-3',
    type: 'POLICE',
    position: [52.248914, 21.005],
    name: 'Komenda Stołeczna Policji',
    status: 'Dostępne',
  },
];