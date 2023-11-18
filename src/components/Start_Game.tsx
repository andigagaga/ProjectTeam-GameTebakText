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
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// animation lootie
import LottieView from "lottie-react-native";

import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Start_Game({ navigation }: any) {
  const goToDiamondInfo = () => {
    navigation.navigate("Diamond_Info");
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
          </View>
          <View style={{ margin: 30 }}>
            <Button
              size="sm"
              variant="solid"
              action="primary"
              isDisabled={false}
              isFocusVisible={false}
              bgColor="white"
            >
              <Image
                source={require("../../assets/image_diamond.png")}
                style={{ width: 50, height: 50 }}
              />
              <ButtonText style={{ color: "black" }}>Add </ButtonText>
              <ButtonIcon style={{ color: "black" }} as={AddIcon} />
            </Button>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 135,
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
        <Button style={{ margin: 0 }}>
          <ButtonText>Start Game</ButtonText>
        </Button>
      </View>
    </ImageBackground>
  );
}
