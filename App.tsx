// Misalnya, dalam file App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./src/AppNavigation/index";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { StatusBar } from "react-native";

const App = () => {
  return (
    <GluestackUIProvider config={config}>
      <StatusBar hidden={true} />
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </GluestackUIProvider>
  );
};

export default App;
