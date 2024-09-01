import * as React from "react";
import { StyleSheet, View, Text, Pressable, SafeAreaView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  FontSize,
  FontFamily,
  Border,
  StyleVariable,
  Padding,
} from "../GlobalStyles";

const Cursos = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.cursos}>
        <View style={[styles.cursosChild, styles.cursosChildPosition]} />
        <View style={[styles.groupParent, styles.reaLayout]}>
          <View style={[styles.reaDeAprendizadoWrapper, styles.reaLayout]}>
            <Text style={[styles.reaDeAprendizado, styles.buttonFlexBox]}>
              ÁREA DE APRENDIZADO
            </Text>
          </View>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/group-3.png")}
          />
        </View>
        <Pressable
          style={[styles.rectangleParent, styles.groupPosition]}
          onPress={() => navigation.navigate("Programacao")}
        >
          <View style={styles.rectangle} />
          <Text style={[styles.newCategoryCourse, styles.newPosition]}>
            Lógica de programação
          </Text>
          <Text style={[styles.newThe3d, styles.newPosition]}>
            criação de algoritmo e programas
          </Text>
          <Image
            style={[styles.boxCodeIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/boxcode.png")}
          />
        </Pressable>
        <View style={[styles.rectangleGroup, styles.groupPosition]}>
          <View style={styles.rectangle} />
          <Image
            style={[styles.bracesAltIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/bracesalt.png")}
          />
          <Text style={[styles.newCategoryCourse, styles.newPosition]}>
            Desenvolvimento Web
          </Text>
          <Text style={[styles.newThe3d, styles.newPosition]}>
            criação de algoritmo e programas
          </Text>
        </View>
        <View style={[styles.rectangleContainer, styles.groupPosition]}>
          <View style={styles.rectangle} />
          <Text style={[styles.newCategoryCourse, styles.newPosition]}>
            Orientação a Objetos
          </Text>
          <Text style={[styles.newThe3d, styles.newPosition]}>
            criação de algoritmo e programas
          </Text>
          <Image
            style={[styles.treeIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/tree.png")}
          />
        </View>
        <View style={[styles.groupView, styles.groupPosition]}>
          <View style={styles.rectangle} />
          <Text style={[styles.newCategoryCourse, styles.newPosition]}>
            Inteligência Artificial
          </Text>
          <Text style={[styles.newThe3d, styles.newPosition]}>
            criação de algoritmo e programas
          </Text>
          <Image
            style={[styles.personfillviewfinderIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/personfillviewfinder.png")}
          />
        </View>
        <Pressable
          style={[styles.buttonParent, styles.buttonLayout]}
          onPress={() => navigation.navigate("PaginaInicial")}
        >
          <View style={[styles.button, styles.buttonLayout]}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon.png")}
            />
          </View>
          <Image
            style={[styles.chevronbackwardIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/chevronbackward.png")}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Color.colorMediumblue, // Sets the background color to match the blue box
  },
  cursosChildPosition: {
    top: 0,
    left: 0,
  },
  reaLayout: {
    height: 62,
    width: 365,
    position: "absolute",
    alignSelf: "center", // Center the area horizontally
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    top: 0,
  },
  groupPosition: {
    left: "4.77%",
    right: "4.77%",
    width: "90.45%",
    height: "12.39%",
    position: "absolute",
  },
  newPosition: {
    textAlign: "left",
    left: "21.67%",
    top: "50%",
    position: "absolute",
  },
  iconLayout1: {
    overflow: "hidden",
    height: 60,
    width: 60,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  buttonLayout: {
    height: 52,
    width: 52,
    position: "absolute",
  },
  cursosChild: {
    backgroundColor: Color.colorMediumblue,
    width: "100%",
    height: 110,
    left: 0,
    position: "absolute",
  },
  reaDeAprendizado: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.notoLoopedThaiUI,
    color: Color.colorWhite,
    textAlign: "center",
    display: "flex",
    fontWeight: "600",
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  reaDeAprendizadoWrapper: {
    left: 0,
    top: 0,
  },
  groupChild: {
    width: 32,
    height: 32,
    left: 0,
    position: "absolute",
  },
  groupParent: {
    top: 27,
    alignSelf: "center", // Center the group horizontally
  },
  rectangle: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorAliceblue,
    borderStyle: "solid",
    borderColor: Color.colorSilver,
    borderWidth: 2,
    position: "absolute",
    width: "100%",
  },
  newCategoryCourse: {
    marginTop: -27,
    fontSize: FontSize.size_lgi,
    fontFamily: FontFamily.jostSemiBold,
    color: Color.colorGray,
    fontWeight: "600",
  },
  newThe3d: {
    marginTop: 5,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.mulishBold,
    color: Color.colorDimgray,
  },
  boxCodeIcon: {
    left: 6,
    height: 60,
    width: 60,
    top: 20,
  },
  rectangleParent: {
    top: "19.21%",
    bottom: "68.4%",
  },
  bracesAltIcon: {
    top: 25,
    left: 6,
    height: 60,
    width: 60,
  },
  rectangleGroup: {
    top: "34.94%",
    bottom: "52.66%",
  },
  treeIcon: {
    left: 13,
    top: 20,
  },
  rectangleContainer: {
    top: "64.81%",
    bottom: "22.8%",
  },
  personfillviewfinderIcon: {
    height: "65%",
    width: "18.06%",
    top: "18%",
    right: "80.83%",
    bottom: "17%",
    left: "1.11%",
  },
  groupView: {
    top: "49.94%",
    bottom: "37.67%",
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
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    top: 0,
  },
  chevronbackwardIcon: {
    height: "77.69%",
    width: "69.23%",
    top: "13.46%",
    right: "12.23%",
    bottom: "8.85%",
    left: "18.54%",
  },
  buttonParent: {
    top: 735,
    left: 39,
  },
  cursos: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Cursos;
