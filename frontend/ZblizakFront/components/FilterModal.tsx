import React, { useContext, useState } from "react";
import { View, Text, Modal, TextInput, Button, StyleSheet } from "react-native";
import { AppContext } from "../app/context/AppContext";
//import {Filters} from '../types';

interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function FilterModal({ visible, onClose }: FilterModalProps) {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("AppContext must be used within an AppProvider");
  }

  const { filters, setFilters } = context;
  const [location, setLocation] = useState(filters.location);
  const [type, setType] = useState(filters.type);

  const applyFilters = () => {
    setFilters({ location, type });
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modal}>
        <Text>Lokalizacja:</Text>
        <TextInput
          value={location}
          onChangeText={setLocation}
          placeholder="Wpisz lokalizację"
        />
        <Text>Typ:</Text>
        <TextInput
          value={type}
          onChangeText={setType}
          placeholder="Wpisz typ"
        />
        <Button title="Zastosuj filtry" onPress={applyFilters} />
        <Button title="Anuluj" onPress={onClose} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
});
