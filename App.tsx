import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import InstructionsScreen from "./src/screens/InstructionsScreen";
import GameScreen from "./src/screens/GameScreen";
import ModalScreen from "./src/screens/ModalScreen";
import WarningScreen from "./src/screens/WarningScreen";
import AppLoading from "expo-app-loading";
import { HeaderLogo, BackButton } from "./src/components/Header";

import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic,
} from "@expo-google-fonts/montserrat";
import colors from "./src/constants/colors";

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerTitle: () => <HeaderLogo />,
        headerBackImage: () => <BackButton />,
      }}
    >
      <MainStack.Screen
        name="Warning"
        component={WarningScreen}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name="Instructions"
        component={InstructionsScreen}
        options={{}}
      />
      <MainStack.Screen name="Game" component={GameScreen} />
    </MainStack.Navigator>
  );
};

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <RootStack.Navigator
          mode="modal"
          screenOptions={{ headerShown: false }}
        >
          <RootStack.Screen name="Main" component={MainStackScreen} />
          <RootStack.Screen
            name="MyModal"
            component={ModalScreen}
            options={{
              cardOverlayEnabled: true,
              gestureEnabled: true,
              gestureResponseDistance: {vertical: 1000},
              cardStyle: { backgroundColor: colors.transparent },
              gestureDirection: "vertical",
            }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
}
