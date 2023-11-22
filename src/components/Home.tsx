import React from "react";
import { Image, ImageBackground, Pressable, View } from "react-native";
import Login from "../(modals)/Login";
import { useAuth } from "@clerk/clerk-expo";
import { Text } from "@gluestack-ui/themed";

export default function Home({ navigation }: any) {
  const { signOut, isSignedIn } = useAuth();

  return (
    <ImageBackground
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      source={require("../../assets/baclgound.jpg")}
    >
      <View style={{ marginTop: 100 }}>
        <Image
          style={{
            width: 400,
            height: 300,
            resizeMode: "contain",
          }}
          source={require("../../assets/WelcomeLogin.png")}
        />
        <View
          style={{
            marginTop: 20,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Login />
          {isSignedIn && (
            <View style={{ padding: 10 , backgroundColor: "white"}}>
              <Pressable onPress={() => signOut()}>
                <Text>Log out</Text>
              </Pressable>
            </View>
          )}
        </View>
      </View>
    </ImageBackground>
  );
}
