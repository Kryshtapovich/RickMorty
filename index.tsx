import React from "react";

import { AppRegistry } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { Navigation } from "@navigation";

import { name } from "./app.json";

const App = () => (
  <SafeAreaProvider>
    <Navigation />
  </SafeAreaProvider>
);

AppRegistry.registerComponent(name, () => App);
