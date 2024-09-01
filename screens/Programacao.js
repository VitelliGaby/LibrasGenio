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
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.programacao}>
        <View style={styles.programacaoChild} />
        <Pressable
          style={[styles.buttonParent, styles.buttonLayout]}
          onPress={() => navigation.navigate("Cursos")}
        >
          <View style={[styles.button, styles.buttonFlexBox]}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon.png")}
            />
          </View>
          <Image
            style={[styles.chevronbackwardIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/chevronbackward.png")}
          />
        </Pressable>
        <Image
          style={styles.vlibrasImg41Icon}
          contentFit="cover"
          source={require("../assets/vlibrasimg4-1.png")}
        />
        <View style={styles.boxCodeParent}>
          <Image
            style={[styles.boxCodeIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/boxcode1.png")}
          />
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
    backgroundColor: Color.colorMediumblue, // Ensures the background matches the top bar color
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
    alignSelf: "center", // Centers the text horizontally
  },
  programacaoChild: {
    backgroundColor: Color.colorMediumblue,
    width: "100%", // Makes the blue box span the full width of the screen
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
