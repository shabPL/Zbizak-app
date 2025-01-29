import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Place } from "../app/types";

interface PlaceCardProps {
  place: Place;
  onPress: () => void;
}

export default function PlaceCard({ place, onPress }: PlaceCardProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text style={styles.name}>{place.name}</Text>
      <Text>
        {place.type} - {place.location}
      </Text>
      <Text>Pieczątki: {place.stamps}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
