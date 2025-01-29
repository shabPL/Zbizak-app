import React, { createContext, useState, ReactNode } from "react";
import { Place, Filters } from "../types";

interface AppContextType {
  places: Place[];
  filters: Filters;
  setFilters: (filters: Filters) => void;
  addStamp: (placeId: number) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [places, setPlaces] = useState<Place[]>([
    {
      id: 1,
      name: "Kawiarnia A",
      type: "Kawiarnia",
      location: "Warszawa",
      stamps: 0,
    },
    {
      id: 2,
      name: "Restauracja B",
      type: "Restauracja",
      location: "Kraków",
      stamps: 0,
    },
  ]);
  const [filters, setFilters] = useState<Filters>({ location: "", type: "" });

  const addStamp = (placeId: number) => {
    setPlaces((prevPlaces) =>
      prevPlaces.map((place) =>
        place.id === placeId ? { ...place, stamps: place.stamps + 1 } : place
      )
    );
  };

  return (
    <AppContext.Provider value={{ places, filters, setFilters, addStamp }}>
      {children}
    </AppContext.Provider>
  );
};
