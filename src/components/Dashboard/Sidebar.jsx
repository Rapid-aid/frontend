import React, { useState } from "react";
import { ExpandMore, ExpandLess, Search, Tune } from "@mui/icons-material";
import Incident from "./Incident";
import FiltersPopup from "./FiltersPopup";
import { useData } from "../../contexts/DataContext";

function Sidebar() {
  const { incidents } = useData();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false); // Track focus state

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchFocus = () => {
    setIsSearchActive(true);
  };

  const handleSearchBlur = (event) => {
    // Check if the blur event is triggered by focus moving to the results box
    if (!event.relatedTarget || !event.relatedTarget.closest(".search-results")) {
      setIsSearchActive(false);
    }
  };

  // Filter incidents based on the search query
  const filteredIncidents = incidents.filter(
    (incident) =>
      incident.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      incident.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [visibility, setVisibility] = useState({
    filtersPopup: false,
    incidentList: true,
  });

  const toggleVisibility = (section) => {
    setVisibility((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <>
      <div className="z-20">
        <div className="absolute flex gap-2 mx-4 my-4 w-[calc(100%-2rem)] md:w-[400px]">
          <div
            className="inline-flex items-center gap-2 bg-white hover:bg-neutral-100 shadow-md px-4 py-2 border rounded-full font-medium duration-200 cursor-pointer"
            onClick={() => toggleVisibility("filtersPopup")}
          >
            <Tune />
            Filtry
            {visibility.filtersPopup ? <ExpandLess /> : <ExpandMore />}
          </div>
          <div
            className="inline-flex relative items-center gap-2 bg-white shadow-md border rounded-full max-w-[320px] font-medium transition-all duration-200"
          >
            <input
              type="text"
              className="bg-transparent px-4 py-2 pr-9 rounded-full w-full"
              placeholder="Wyszukaj"
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
            />
            <label htmlFor="search" className="right-3 absolute">
              <Search />
            </label>
          </div>
          {visibility.filtersPopup && <FiltersPopup />}
          {isSearchActive && searchQuery && (
              <div tabIndex={-1} className="top-10 z-40 absolute bg-white shadow-md mt-2 rounded-lg w-full max-w-[390px] search-results max-h-[300px] overflow-y-auto">
                {filteredIncidents.length === 0 ? (
                  <div className="p-4 text-gray-500 text-sm">
                    Nie znaleziono wyników.
                  </div>
                ) : (
                  <ul className="divide-y">
                    {filteredIncidents.map((incident) => (
                      <Incident
                        key={incident.id}
                        type={incident.type}
                        name={incident.description}
                        time={new Date(incident.timestamp).toLocaleString()}
                        location={incident.location}
                        status={incident.status}
                        statusBackground="bg-blue-100"
                        statusColor="text-blue-700"
                      />
                    ))}
                  </ul>
                )}
              </div>
            )}
        </div>
        <div className="bottom-20 sm:bottom-4 absolute bg-white shadow-md mx-4 rounded-lg divide-y w-[calc(100%-2rem)] sm:w-[400px]">
          <div className="flex justify-between p-2">
            <h2 className="p-2 font-semibold text-xl">Ostatnie zgłoszenia</h2>
            <div
              className="hover:bg-neutral-200 my-auto p-2 rounded-lg duration-200 cursor-pointer"
              onClick={() => toggleVisibility("incidentList")}
            >
              {visibility.incidentList ? <ExpandMore /> : <ExpandLess />}
            </div>
          </div>
          {visibility.incidentList && (
            <div>
              {incidents.length === 0 ? (
                <div className="p-4 text-gray-600 text-sm">
                  Brak zgłoszeń pasujących do wybranych filtrów. Spróbuj
                  wyczyścić lub zmienić filtry.
                </div>
              ) : (
                <ul className="divide-y max-h-[300px] overflow-y-auto">
                  {incidents.map((incident) => (
                    <Incident
                      key={incident.id}
                      type={incident.type}
                      name={incident.description}
                      time={new Date(incident.timestamp).toLocaleString()}
                      location={incident.location}
                      status={incident.status}
                      statusBackground="bg-blue-100"
                      statusColor="text-blue-700"
                    />
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
