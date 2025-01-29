import React, { useEffect } from "react";
import { Button, View, Text, Alert } from "react-native";
import NfcManager, { NfcTech } from "react-native-nfc-manager";

export default function NFCScreen() {
  useEffect(() => {
    // Inicjalizacja NFC
    NfcManager.start();

    // Zatrzymaj NFC po zamknięciu komponentu
    return () => {
      NfcManager.cancelTechnologyRequest();
    };
  }, []);

  const scanNFC = async () => {
    try {
      // Sprawdź, czy urządzenie obsługuje NFC
      const isSupported = await NfcManager.isSupported();
      if (!isSupported) {
        throw new Error("NFC nie jest obsługiwane na tym urządzeniu.");
      }

      // Poproś o uprawnienia do NFC
      await NfcManager.requestTechnology(NfcTech.Ndef);

      // Skanuj tag NFC
      const tag = await NfcManager.getTag();
      console.log("NFC Tag:", tag);

      // Wyświetl wynik
      Alert.alert("NFC zeskanowany", JSON.stringify(tag));
    } catch (error) {
      console.error("Błąd skanowania NFC:", error);
      //Alert.alert("Błąd skanowania NFC", error.message);
    } finally {
      // Zatrzymaj skanowanie
      NfcManager.cancelTechnologyRequest();
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>NFC Scanner</Text>
      <Button title="Skanuj NFC" onPress={scanNFC} />
    </View>
  );
}
