import React, { createContext, useContext, useState } from 'react';
import { incidents } from '../data/incidentsAndCrews';

// Create the context
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [filters, setFilters] = useState({ status: [], type: [] });
  const [filteredIncidents, setFilteredIncidents] = useState(incidents);

  const applyFilters = (newFilters) => {
    let updatedIncidents = incidents;

    if (newFilters.status.length) {
      updatedIncidents = updatedIncidents.filter((incident) =>
        newFilters.status.includes(incident.status.toLowerCase())
      );
    }
    if (newFilters.type.length) {
      updatedIncidents = updatedIncidents.filter((incident) =>
        newFilters.type.includes(incident.type.toLowerCase())
      );
    }

    setFilteredIncidents(updatedIncidents);
  };

  const updateFilters = (newFilters) => {
    setFilters(newFilters); // Update the filters state
    applyFilters(newFilters); // Apply filters immediately
  };

  const clearFilters = () => {
    setFilters({ status: [], type: [] });
    setFilteredIncidents(incidents); // Reset to all incidents
  };

  return (
    <DataContext.Provider
      value={{
        incidents: filteredIncidents,
        filters,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use the DataContext
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
