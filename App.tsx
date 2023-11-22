// Misalnya, dalam file App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./src/AppNavigation/index";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { StatusBar } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ClerkProvider } from "@clerk/clerk-expo";

import * as SecureStore from "expo-secure-store";

import { AvatarProvider } from "./src/State_Global/Avatar_Context";

const CLERK_KEY ="pk_test_aGVscGluZy1sYWR5YnVnLTMzLmNsZXJrLmFjY291bnRzLmRldiQ";




const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (error) {
      return null;
    }
  },
  async saveToken(key : string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (error) {
      return;
    }
  }
};

const App = () => {
  return (
    <ClerkProvider publishableKey={CLERK_KEY!} tokenCache={tokenCache}>
      <QueryClientProvider client={client}>
        <GluestackUIProvider config={config}>
          <StatusBar hidden={true} />
          <AvatarProvider>
            <NavigationContainer>
              <NavigationStack />
            </NavigationContainer>
          </AvatarProvider>
        </GluestackUIProvider>
      </QueryClientProvider>
    </ClerkProvider>
  );
};

export default App;
