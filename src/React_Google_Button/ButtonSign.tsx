import { View } from "@gluestack-ui/themed";
import { GoogleSigninButton } from "@react-native-google-signin/google-signin";
import { Text } from "react-native";

export default function ButtonSign() {

  return (
    <View>
       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <GoogleSigninButton
        style={{
          backgroundColor: "white",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 5,
        }}
      >
          <Text style={{ color: "black", fontSize: 16, marginRight: 50, marginLeft: 10 }}>
            Masuk dengan Google
          </Text>
      </GoogleSigninButton>
    </View>
    </View>
  )
}
