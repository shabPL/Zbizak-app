import React, { useContext, useState } from "react";
import { View, FlatList, Button } from "react-native";
import PlaceCard from "../../components/PlaceCard";
import FilterModal from "../../components/FilterModal";
import { AppContext } from "../context/AppContext";
import { Place } from "../types";

export default function HomeScreen({ navigation }: { navigation: any }) {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("AppContext must be used within an AppProvider");
  }

  const { places, filters } = context;
  const [isFilterVisible, setFilterVisible] = useState(false);

  const filteredPlaces = places.filter((place) => {
    return (
      (!filters.location || place.location === filters.location) &&
      (!filters.type || place.type === filters.type)
    );
  });

  return (
    <View>
      <Button title="Filtruj" onPress={() => setFilterVisible(true)} />
      <FlatList
        data={filteredPlaces}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PlaceCard
            place={item}
            onPress={() => navigation.navigate("PlaceDetail", { place: item })}
          />
        )}
      />
      <FilterModal
        visible={isFilterVisible}
        onClose={() => setFilterVisible(false)}
      />
    </View>
  );
}
