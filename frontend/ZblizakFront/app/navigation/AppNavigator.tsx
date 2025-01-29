import React from "react";
import { createStackNavigator } from "@react-npm fundnavigation/stack";
import HomeScreen from "../screens/HomeScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import NFCScreen from "../../components/NFCScreen";

export type RootStackParamList = {
  Home: undefined;
  PlaceDetail: { place: Place };
  NFC: { place: Place };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PlaceDetail" component={PlaceDetailScreen} />
      <Stack.Screen name="NFC" component={NFCScreen} />
    </Stack.Navigator>
  );
}
