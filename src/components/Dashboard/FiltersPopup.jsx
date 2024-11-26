import React, { useState } from "react";
import FiltersItem from "./FiltersItem";
import { useData } from "../../contexts/DataContext";

function FiltersPopup() {
  const { updateFilters } = useData();
  const [selectedFilters, setSelectedFilters] = useState({
    status: [],
    type: [],
  });

  const handleFilterChange = (category, value) => {
    setSelectedFilters((prev) => {
      const updatedCategory = prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value];

      return {
        ...prev,
        [category]: updatedCategory,
      };
    });
  };

  const handleApplyFilters = () => {
    updateFilters(selectedFilters);
  };

  const handleClearFilters = () => {
    setSelectedFilters({ status: [], type: [] });
    updateFilters({ status: [], type: [] });
  };

  return (
    <div className="top-12 z-30 absolute bg-white shadow-md px-4 py-3 rounded-xl filtersPopup">
      <div className="flex justify-between items-center gap-x-10 py-1">
        <div className="font-semibold text-lg">Filtry</div>
        <div
          className="hover:bg-neutral-100 px-2 py-1 rounded-md text-neutral-600 text-sm hover:text-black duration-200 cursor-pointer"
          onClick={handleClearFilters}
        >
          Wyczyść filtry
        </div>
      </div>
      <div className="py-2 font-semibold">Status</div>
      <div className="flex flex-col">
        <FiltersItem
          type="new"
          name="Nowe"
          checked={selectedFilters.status.includes("new")}
          onChange={() => handleFilterChange("status", "new")}
        />
        <FiltersItem
          type="assigned"
          name="Przydzielone"
          checked={selectedFilters.status.includes("assigned")}
          onChange={() => handleFilterChange("status", "assigned")}
        />
        <FiltersItem
          type="completed"
          name="Zakończone"
          checked={selectedFilters.status.includes("completed")}
          onChange={() => handleFilterChange("status", "completed")}
        />
        <FiltersItem
          type="canceled"
          name="Anulowane"
          checked={selectedFilters.status.includes("canceled")}
          onChange={() => handleFilterChange("status", "canceled")}
        />
      </div>
      <div className="py-2 font-semibold">Rodzaj zdarzenia</div>
      <div className="flex flex-col">
        <FiltersItem
          type="fire"
          name="Pożar"
          checked={selectedFilters.type.includes("fire")}
          onChange={() => handleFilterChange("type", "fire")}
        />
        <FiltersItem
          type="flood"
          name="Powódź"
          checked={selectedFilters.type.includes("flood")}
          onChange={() => handleFilterChange("type", "flood")}
        />
        <FiltersItem
          type="earthquake"
          name="Trzęsienie ziemi"
          checked={selectedFilters.type.includes("earthquake")}
          onChange={() => handleFilterChange("type", "earthquake")}
        />
        <FiltersItem
          type="accident"
          name="Wypadek"
          checked={selectedFilters.type.includes("accident")}
          onChange={() => handleFilterChange("type", "accident")}
        />
        <FiltersItem
          type="other"
          name="Inne"
          checked={selectedFilters.type.includes("other")}
          onChange={() => handleFilterChange("type", "other")}
        />
      </div>
      <div className="flex justify-center">
        <div
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl font-semibold text-center text-white duration-200 cursor-pointer"
          onClick={handleApplyFilters}
        >
          Zastosuj
        </div>
      </div>
    </div>
  );
}

export default FiltersPopup;
