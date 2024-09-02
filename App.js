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
  
  // Estado para controlar a exibição da tela de splash (carregamento)
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  // Hook para carregar fontes personalizadas
  const [fontsLoaded, error] = useFonts({
    "Jost-SemiBold": require("./assets/fonts/Jost-SemiBold.ttf"),
    "Mulish-Bold": require("./assets/fonts/Mulish-Bold.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
  });

  // Se as fontes não foram carregadas e não há erro, retorna null (não renderiza nada)
  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        
        {/* Condicional para exibir o Stack Navigator se a tela de splash não estiver oculta */}
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            
            {/* Tela inicial do aplicativo */}
            <Stack.Screen
              name="PaginaInicial"
              component={PaginaInicial}
              options={{ headerShown: false }}
            />
            
            {/* Tela de cursos */}
            <Stack.Screen
              name="Cursos"
              component={Cursos}
              options={{ headerShown: false }}
            />
            
            {/* Tela sobre nós */}
            <Stack.Screen
              name="SobreNos"
              component={SobreNos}
              options={{ headerShown: false }}
            />
            
            {/* Tela de programação */}
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