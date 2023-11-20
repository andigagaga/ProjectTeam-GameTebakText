// Misalnya, dalam file App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./src/AppNavigation/index";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { StatusBar } from "react-native";

import { AvatarProvider } from "./src/State_Global/Avatar_Context";

const App = () => {
  return (
    <GluestackUIProvider config={config}>
      <StatusBar hidden={true} />
      <AvatarProvider>
        <NavigationContainer>
          <NavigationStack />
        </NavigationContainer>
      </AvatarProvider>
    </GluestackUIProvider>
  );
};

export default App;
