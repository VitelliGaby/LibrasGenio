const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Cursos from "./screens/Cursos";
import PaginaInicial from "./screens/PaginaInicial";
import SobreNos from "./screens/SobreNos";
import Programacao from "./screens/Programacao";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Jost-SemiBold": require("./assets/fonts/Jost-SemiBold.ttf"),
    "Mulish-Bold": require("./assets/fonts/Mulish-Bold.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="PaginaInicial"
              component={PaginaInicial}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cursos"
              component={Cursos}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SobreNos"
              component={SobreNos}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Programacao"
              component={Programacao}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
