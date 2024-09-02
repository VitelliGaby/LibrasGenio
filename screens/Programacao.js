import * as React from "react";
import { StyleSheet, View, Pressable, Text, SafeAreaView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  Border,
  StyleVariable,
  Padding,
  FontSize,
  FontFamily,
} from "../GlobalStyles";


const Programacao = () => {
  // Hook para acessar a navegação
  const navigation = useNavigation();

  return (
    // SafeAreaView para garantir que o conteúdo não sobreponha áreas seguras do dispositivo
    <SafeAreaView style={styles.safeArea}>
      
      {/* Container principal da tela Programacao */}
      <View style={styles.programacao}>
        
        {/* Componente de fundo ou decorativo */}
        <View style={styles.programacaoChild} />
        
        {/* Botão para navegar para a tela "Cursos" */}
        <Pressable
          style={[styles.buttonParent, styles.buttonLayout]}
          onPress={() => navigation.navigate("Cursos")}
        >
          
          {/* Container para o ícone dentro do botão */}
          <View style={[styles.button, styles.buttonFlexBox]}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon.png")}
            />
          </View>
          
          {/* Ícone de seta para trás */}
          <Image
            style={[styles.chevronbackwardIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/chevronbackward.png")}
          />
        </Pressable>
        
        {/* Imagem principal da tela */}
        <Image
          style={styles.vlibrasImg41Icon}
          contentFit="cover"
          source={require("../assets/vlibrasimg4-1.png")}
        />
        
        {/* Container para a seção de código */}
        <View style={styles.boxCodeParent}>
          
          
          {/* Ícone relacionado ao código */}
          <Image
            style={[styles.boxCodeIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/boxcode1.png")}
          />
          
          {/* Container para o texto dentro da seção de código */}
          <View style={[styles.groupWrapper, styles.wrapperLayout]}>
            <View
              style={[styles.lgicaDeProgramaoWrapper, styles.wrapperLayout]}
            >
              <Text style={[styles.lgicaDeProgramao, styles.wrapperLayout]}>
                Lógica de Programação
              </Text>
            </View>
          </View>
        </View>
        
        
        {/* Outra imagem na tela */}
        <Image
          style={styles.programmingInicial1Icon}
          contentFit="cover"
          source={require("../assets/programminginicial-1.png")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Color.colorMediumblue, 
  },
  buttonLayout: {
    height: 52,
    width: 52,
    position: "absolute",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    left: 0,
  },
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  wrapperLayout: {
    height: 62,
    width: 365,
    position: "absolute",
    alignSelf: "center", 
  },
  programacaoChild: {
    backgroundColor: Color.colorMediumblue,
    width: "100%", 
    height: 110,
    left: 0,
    position: "absolute",
  },
  icon: {
    borderRadius: Border.br_141xl,
    width: 24,
    height: 24,
    display: "none",
  },
  button: {
    borderRadius: StyleVariable.radiusS,
    backgroundColor: Color.buttonsPrimaryBg,
    flexDirection: "row",
    padding: Padding.p_7xs,
    height: 52,
    width: 52,
    position: "absolute",
    top: 0,
  },
  chevronbackwardIcon: {
    height: "77.69%",
    width: "77.69%",
    top: "11.15%",
    right: "11.15%",
    bottom: "11.15%",
    left: "11.15%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  buttonParent: {
    top: 735,
    left: 39,
  },
  vlibrasImg41Icon: {
    top: 357,
    left: 67,
    width: 263,
    height: 322,
    position: "absolute",
  },
  boxCodeIcon: {
    top: 5,
    width: 60,
    height: 60,
    left: 0,
  },
  lgicaDeProgramao: {
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.notoLoopedThaiUI,
    color: Color.colorWhite,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
  },
  lgicaDeProgramaoWrapper: {
    left: 0,
  },
  groupWrapper: {
    left: 29,
  },
  boxCodeParent: {
    top: 24,
    left: 15,
    width: 394,
    height: 65,
    position: "absolute",
  },
  programmingInicial1Icon: {
    top: 147,
    left: 24,
    borderRadius: 20,
    width: 350,
    height: 177,
    position: "absolute",
  },
  programacao: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default Programacao;
