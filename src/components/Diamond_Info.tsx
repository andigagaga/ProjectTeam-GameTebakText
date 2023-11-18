import React from "react";
import { FlatList, Image, ImageBackground, Text, View } from "react-native";
import dummyDiamond from "../dataDummy/dummyDiamond.json";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Entypo } from "@expo/vector-icons";

export default function Diamond_Info() {
  return (
    <ImageBackground
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      source={require("../../assets/baclgound.jpg")}
    >
      <View
        style={{
          backgroundColor: "#B4BDFF",
          borderRadius: 10,
          width: 350,
          height: 380,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            margin: 5,
          }}
        >
          <FlatList
            data={dummyDiamond.avatars}
            numColumns={3} // Menggunakan 3 kolom untuk 3 item pada baris pertama
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={{
                  backgroundColor: "#80B3FF",
                  padding: 5,
                  margin: 5,
                  marginLeft: index % 3 !== 0 ? 10 : 0, // Memberikan margin kiri jika bukan item pertama dalam baris
                  borderRadius: 5,
                  borderColor: "black",
                  borderWidth: 2,
                }}
              >
                <Image
                  source={{ uri: item.image_src }}
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    borderColor: "black",
                    borderWidth: 2,
                  }}
                />
                <View>
                  <Text style={{ textAlign: "center" }}>FREE</Text>
                  <Text
                    style={{
                      color: "blue",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {item.jumlahDiamond}{" "}
                    <Image
                      source={require("../../assets/image_diamond.png")}
                      style={{ width: 20, height: 20 }}
                    />
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <Entypo name="warning" size={24} color="red" />
            <Text style={{ color: "red", marginTop: 6 }}>You have 0 diamond</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#BE3144",
                padding: 5,
                margin: 5,
                borderRadius: 5,
                borderColor: "black",
                borderWidth: 2,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  marginHorizontal: 20,
                }}
              >
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#40F8FF",
                padding: 5,
                margin: 5,
                borderRadius: 5,
                borderColor: "black",
                borderWidth: 2,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  marginHorizontal: 20,
                }}
              >
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
