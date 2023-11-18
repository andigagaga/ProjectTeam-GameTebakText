import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ImageBackground, View, TouchableOpacity } from "react-native";
import { Text, Button } from "@gluestack-ui/themed";
// import ButtonSign from "../React_Google_Button/ButtonSign";

export default function Home({ navigation }: any) {
  // const navigation = useNavigation();

  const goToQuizGame = () => {
    navigation.navigate("Quiz_Game");
  };
  return (
    <ImageBackground
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      source={require("../../assets/baclgound.jpg")}
    >
        <View style={{marginTop: 100}}>
      <Image
        style={{
          width: 400,
          height: 300,
          resizeMode: "contain",
        }}
       source={require("../../assets/WelcomeLogin.png")}
      />
      {/* <ButtonSign /> */}
      <View style={{ marginTop: 20 , flex: 1, justifyContent: "center", alignItems: "center"}}>

      <TouchableOpacity style={{ marginTop: 20 }} onPress={goToQuizGame}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          test
        </Text>
      </TouchableOpacity>
      </View>

        </View>
    </ImageBackground>
  );
}
