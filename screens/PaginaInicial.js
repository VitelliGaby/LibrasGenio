import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const PaginaInicial = () => {
  // Hook para acessar a navegação
  const navigation = useNavigation();

  return (
    // Container principal da tela PaginaInicial
    <View style={styles.paginaInicial}>
      
      {/* Gradiente linear que faz a transição de cor de cima para baixo responsavel pelo background */}
      <LinearGradient
        style={styles.paginaInicialChild}
        locations={[0.28, 1]}
        colors={["#fffefe", "#0b349c"]}
      />
      
      {/* Container para os botões de navegação */}
      <View style={styles.button3Parent}>
        
        {/* Botão para navegar para a tela "Cursos" */}
        <Pressable
          style={[styles.button3, styles.buttonLayout]}
          onPress={() => navigation.navigate("Cursos")}
        >
          <View style={styles.reaDeEstudosWrapper}>
            <Text style={[styles.reaDeEstudos, styles.sobreNsTypo]}>
              Área de estudos
            </Text>
          </View>
        </Pressable>
        
        {/* Botão para navegar para a tela "SobreNos" */}
        <Pressable
          style={[styles.button4, styles.buttonLayout]}
          onPress={() => navigation.navigate("SobreNos")}
        >
          <View style={styles.reaDeEstudosWrapper}>
            <Text style={[styles.sobreNs, styles.sobreNsTypo]}>Sobre nós</Text>
          </View>
        </Pressable>
      </View>
      
      {/* Imagem que é exibida na tela principal */}
      <Image
        style={styles.image3Icon}
        contentFit="cover"
        source={require("../assets/image-3.png")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  buttonLayout: {
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_13xl,
    height: 46,
    borderRadius: Border.br_11xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 226,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  sobreNsTypo: {
    display: "flex",
    textAlign: "left",
    color: Color.colorMidnightblue,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_lg,
    alignItems: "center",
  },
  paginaInicialChild: {
    width: "100%",
    backgroundColor: "transparent",
    left: 0,
    top: 0,
    position: "absolute",
    height: "100%",
  },
  reaDeEstudos: {
    width: 155,
    height: 20,
  },
  reaDeEstudosWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  button3: {
    top: 0,
    paddingVertical: Padding.p_lg,
    paddingHorizontal: Padding.p_13xl,
    height: 46,
    borderRadius: Border.br_11xl,
  },
  sobreNs: {
    width: 96,
    height: 20,
  },
  button4: {
    top: 63,
  },
  button3Parent: {
    top: 349,
    left: 86,
    height: 109,
    width: 226,
    position: "absolute",
  },
  image3Icon: {
    marginTop: -290.5,
    top: "50%",
    right: 126,
    borderRadius: 1007,
    width: 146,
    height: 146,
    position: "absolute",
  },
  paginaInicial: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 807,
    backgroundColor: Color.colorWhite,
  },
});

export default PaginaInicial;
