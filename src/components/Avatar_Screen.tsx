import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Button,
  ButtonIcon,
  ButtonText,
  EditIcon,
  HStack,
  Heading,
  Input,
  InputField,
  VStack,
} from "@gluestack-ui/themed";
import React from "react";
import { FlatList, Image, ImageBackground, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import dummyAvatar from "../dataDummy/dummyAvatar.json";
import LoottieView from "lottie-react-native";

export default function Avatar_Screen() {
  return (
    <ImageBackground
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      source={require("../../assets/baclgound.jpg")}
    >
      <View style={{ marginTop: 300 }}>
        <View style={{ marginBottom: 30, alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>
            Choose Your Avatar
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <View>
            <FlatList
              data={dummyAvatar.avatars}
              numColumns={4}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <Image
                    source={{ uri: item.image_src }}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 150,
                      margin: 5,
                    }}
                  />
                </TouchableOpacity>
              )}
            />
          </View>

          <View style={{ marginTop: 50 }}>
            <Input variant="outline" size="md" bg="$amber50">
              <Button
                borderRadius="$full"
                size="lg"
                p="$3.5"
                bg="$indigo600"
                borderColor="$indigo600"
                bgColor="$amber50"
              >
                {/* EditIcon is imported from 'lucide-react-native' */}
                <ButtonIcon color="$indigo600" as={EditIcon} />
              </Button>

              <InputField placeholder="Enter Your Name" />
            </Input>
            <Button size="sm" mt={15}>
              <ButtonText>Submit</ButtonText>
            </Button>
          </View>
          <LoottieView
            source={require("../../assets/LootieAnimation/Animation - 1700290723089 (1).json")}
            loop={true}
            autoPlay={true}
            resizeMode="cover"
            style={{ width: 180, height: 180, marginBottom: 20 }}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
