import { View } from '@gluestack-ui/themed'
import React from 'react'
import { FlatList, Image, Text, TouchableOpacity } from 'react-native'
import { ImageBackground } from 'react-native'

import dummyListDiamond from '../dataDummy/dummyListDiamond.json'

import { useNavigation } from '@react-navigation/native'

export default function Shops_Diamonds() {

  const navigation = useNavigation();
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
            data={dummyListDiamond.diamonds}
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
                  width: 100,
                }}
              >
                <View style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                  <Text
                    style={{
                      color: "#A6FF96",
                      fontWeight: "bold",
                    }}
                  >
                    {item.quantity}{" "}
                   
                  </Text>
                  <Image
                      source={require("../../assets/image_diamond.png")}
                      style={{ width: 50, height: 50 }}
                    />
                    <Text style={{ color: "#E55604", fontWeight: "bold" }}>
                      {item.price}
                    </Text>
                </View>
              </TouchableOpacity>
            )}
          />
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            {/* <Entypo name="warning" size={24} color="red" /> */}
            <Text style={{ color: "red" }}>You have 0 diamond</Text>
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
              onPress={() => navigation.goBack()}
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
                Purchase
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}
