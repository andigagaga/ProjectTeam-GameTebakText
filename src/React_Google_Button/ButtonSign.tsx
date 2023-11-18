// import { View } from "@gluestack-ui/themed";
// import { GoogleSignin, GoogleSigninButton, statusCodes } from "@react-native-google-signin/google-signin";
// import { useEffect, useState } from "react";
// import { Image, Text, TouchableOpacity } from "react-native";

// export default function ButtonSign() {

//   const [loggeedIn, setLoggetIn] = useState(false);
//   const [userInfo, setUserInfo] = useState([]);

//   const signIn = async () => {
//     try {
//       await GoogleSignin.hasPlayServices();
//       const { accessToken, idToken } = await GoogleSignin.signIn();
//       setLoggetIn(true);
//     } catch (error: any) {
//       if (error.code === statusCodes.SIGN_IN_CANCELLED) {
//         alert('Pengguna Membatalkan')
//       } else if (error.code === statusCodes.IN_PROGRESS) {
//         alert('Masuk Sedang Berlangsung')
//       } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
//         alert('Layanan Google Play Tidak Tersedia')
//       } else {
//         alert(error.message)
//       }
//     }
//   }

//   useEffect(() => {
//     GoogleSignin.configure({
//       scopes: ['https://www.googleapis.com/auth/drive.readonly'],
//       webClientId: '1:1027751690229:web:27768aba32de6eadd0eabc',
//       offlineAccess: true,
//       hostedDomain: 'my-game-f3276.firebaseapp.com',
//       forceCodeForRefreshToken: true,
//       accountName: 'my-game-f3276',
//   });
// }, []);


//   return (
//     <View>
//        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <GoogleSigninButton
//         onPress={signIn}
//         style={{
//           backgroundColor: "white",
//           flexDirection: "row",
//           alignItems: "center",
//           paddingHorizontal: 20,
//           paddingVertical: 10,
//           borderRadius: 5,
//         }}
//       >
//           <Text style={{ color: "black", fontSize: 16, marginRight: 50, marginLeft: 10 }}>
//             Masuk dengan Google
//           </Text>
//       </GoogleSigninButton>
//     </View>
//     </View>
//   )
// }
