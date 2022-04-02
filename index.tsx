import Navigation from "@navigation";
import store from "@store";
import React from "react";
import { AppRegistry } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import { name } from "./app.json";

const App = () => (
  <Provider store={store}>
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  </Provider>
);

AppRegistry.registerComponent(name, () => App);
