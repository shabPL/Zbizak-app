import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AppContext } from "../context/AppContext";
import { Place } from "../types";

interface PlaceDetailScreenProps {
  route: { params: { place: Place } };
  navigation: any;
}

export default function PlaceDetailScreen({
  route,
  navigation,
}: PlaceDetailScreenProps) {
  const context = useContext(AppContext);

  // Sprawdź, czy kontekst jest dostępny
  if (!context) {
    throw new Error("AppContext must be used within an AppProvider");
  }

  const { place } = route.params;
  const { addStamp } = context;

  const handleAddStamp = () => {
    addStamp(place.id);
    navigation.navigate("NFC", { place });
  };

  return (
    <View>
      <Text>{place.name}</Text>
      <Text>
        {place.type} - {place.location}
      </Text>
      <Text>Pieczątki: {place.stamps}</Text>
      <Button title="Dodaj pieczątkę" onPress={handleAddStamp} />
    </View>
  );
}
