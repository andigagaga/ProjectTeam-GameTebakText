import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useWarmUpBrowser } from "../hooks/useLogin";
import { useOAuth } from "@clerk/clerk-expo";
import {useRouter} from "expo-router";


enum Strategy {
  Google = "oauth_google",
}


export default function Login() {
  useWarmUpBrowser();

  const router = useRouter();
  const { startOAuthFlow: googleAuth } = useOAuth({ strategy: "oauth_google" });

  const onSelectAuth = async (strategy : Strategy) => {
    const selectedAuth = {
      [Strategy.Google]: googleAuth,
    }[strategy];

    try {
      const {createdSessionId, setActive} = await selectedAuth();
      console.log("createdSessionId", createdSessionId);
      
      if(createdSessionId) {
        setActive!({session: createdSessionId});
        router.back();
      }
      
    } catch (error) {
      console.error("OAuth error:", error);
    }
  }

  return (
    <TouchableOpacity
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "black",
        borderWidth: 1,
      }}
      onPress={() => onSelectAuth(Strategy.Google)}
    >
      <Ionicons name="md-logo-google" size={24} />
      <Text
        style={{
          color: "black",
          fontWeight: "bold",
          fontSize: 16,
          paddingHorizontal: 50,
        }}
      >
        Login With Google
      </Text>
    </TouchableOpacity>
  );
}
