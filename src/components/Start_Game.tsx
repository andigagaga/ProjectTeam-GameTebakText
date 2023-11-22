import {
  AddIcon,
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Button,
  ButtonGroup,
  ButtonIcon,
  ButtonText,
  EditIcon,
  InfoIcon,
} from "@gluestack-ui/themed";
import React, { useEffect } from "react";
import { Image, ImageBackground, Pressable, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// animation lootie
import LottieView from "lottie-react-native";

import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "@clerk/clerk-expo";

import { Entypo } from "@expo/vector-icons";

export default function Start_Game({ navigation, route }: any) {
  const { signOut, isSignedIn } = useAuth();
  const { score } = route.params || {};

  useEffect(() => {
    console.log("Skor Anda:", score);
  }, [score]);

  const goToQuizGame = () => {
    navigation.navigate("Quiz_Game");
  };
  const goToDiamondInfo = () => {
    navigation.navigate("Diamond_Info");
  };

  const goToShopsDiamond = () => {
    navigation.navigate("Shops_Diamonds");
  };

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../../assets/baclgound.jpg")}
    >
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flex: 1 }}>
            {/* <Image
              source={require("../../assets/games-icon.png")}
              style={{ width: 100, height: 100 }}
            ></Image> */}
            <LottieView
              source={require("../../assets/LootieAnimation/Animation - 1700290723089 (1).json")}
              loop={true}
              autoPlay={true}
              resizeMode="cover"
              style={{ width: 80, height: 80, marginLeft: 10, marginTop: 5 }}
            />
            <View
              style={{
                padding: 5,
                borderRadius: 5,
              }}
            >
              {isSignedIn && (
                <View
                  style={{
                    padding: 10,
                    backgroundColor: "red",
                    display: "flex",
                    flexDirection: "row",
                    width: "40%",
                    borderColor: "white",
                    borderWidth: 1,
                    marginLeft: 40,
                  }}
                >
                  <TouchableOpacity onPress={() => signOut()}>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                      <View>
                        <Entypo name="log-out" size={24} color="white" />
                      </View>
                      <View>
                        <Text style={{ color: "white" }}>Log out</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
          <View style={{ margin: 30 }}>
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                borderRadius: 5,
                padding: 8,
              }}
              onPress={goToShopsDiamond}
            >
              <Image
                source={require("../../assets/image_diamond.png")}
                style={{ width: 50, height: 20 }}
              />
              <ButtonText style={{ color: "black" }}>Add </ButtonText>
              <ButtonIcon style={{ color: "black" }} as={AddIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 80,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ButtonGroup>
          <Avatar size="md">
            <AvatarFallbackText>John Doe</AvatarFallbackText>
            <AvatarImage
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
              style={{
                padding: 50,
              }}
            />
          </Avatar>
        </ButtonGroup>

        <TouchableOpacity
          style={{
            width: 100,
            height: 30,
            marginTop: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "blue",
          }}
          onPress={goToDiamondInfo}
        >
          <Text style={{ color: "white" }}>
            <FontAwesome5 name="edit" size={20} color="white" />
            Edit
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
            marginTop: 20,
          }}
        >
          Molusca_Bertulang
        </Text>
        {route.params?.showScore && (
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 20,
              backgroundColor: "green",
              padding: 10,
              borderRadius: 10,
              width: 150,
            }}
          >
            Scorr Anda:{" "}
            <Text style={{ color: score > 50 ? "white" : "red" }}>{score}</Text>
          </Text>
        )}
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 60,
        }}
      >
        {/* <Image source={require("../../assets/WelcomeLogin.png")} style={{ width: 250, height: 200 }} /> */}
        <LottieView
          source={require("../../assets/LootieAnimation/Animation - 1700289440542.json")}
          loop={true}
          autoPlay={true}
          resizeMode="cover"
          style={{ width: 180, height: 180, marginBottom: 20 }}
        />
        <Button style={{ margin: 0 }} onPress={goToQuizGame}>
          <ButtonText>Start Game</ButtonText>
        </Button>
      </View>
    </ImageBackground>
  );
}
