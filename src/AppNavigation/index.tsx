import { createStackNavigator } from "@react-navigation/stack";
import Home from "../components/Home";
import Avatar_Screen from "../components/Avatar_Screen";
import Start_Game from "../components/Start_Game";
import Leader_Board from "../components/Leader_Board";
import Quiz_Game from "../components/QuizGame";
import Login from "../(modals)/Login";

import { useAuth, useUser } from "@clerk/clerk-expo";

import Diamond_Info from "../components/Avatar_Shops";
import Shops_Diamonds from "../components/Shops_Diamonds";
const Stack = createStackNavigator();

const NavigationStack = () => {
  const { user } = useUser();
  const { isLoaded, isSignedIn } = useAuth();
  console.log(
    "log from AppNavigation",
    isLoaded,
    isSignedIn,
    user?.emailAddresses
  );

  return (
    <Stack.Navigator>
      {isLoaded && !isSignedIn ? (
        <Stack.Group>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,

              title: "My home",
            }}
          />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen
            name="Start_Game"
            component={Start_Game}
            options={{
              headerShown: false,

              title: "Start_Game",
            }}
          />
          <Stack.Screen
            name="Diamond_Info"
            component={Diamond_Info}
            options={{
              headerShown: false,

              title: "Diamond_Info",
            }}
          />
          <Stack.Screen
            name="Shops_Diamonds"
            component={Shops_Diamonds}
            options={{
              headerShown: false,

              title: "Shops_Diamonds",
            }}
          />
          <Stack.Screen
            name="Avatar_Screen"
            component={Avatar_Screen}
            options={{
              headerShown: false,

              title: "Avatar_Screen",
            }}
          />
          <Stack.Screen
            name="Quiz_Game"
            component={Quiz_Game}
            options={{
              headerShown: false,

              title: "Quiz_Game",
            }}
          />
          <Stack.Screen name="Leader_Board" component={Leader_Board} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};
export default NavigationStack;
