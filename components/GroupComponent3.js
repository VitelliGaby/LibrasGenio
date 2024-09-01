import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const GroupComponent3 = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.rectangle} />
      <Text style={[styles.newCategoryCourse, styles.newPosition]}>
        Bruna Vitoria
      </Text>
      <Text
        style={[styles.newThe3d, styles.newPosition]}
      >{`Programadora mobile `}</Text>
      <View style={styles.instagram} />
      <View style={[styles.boxCode, styles.boxCodePosition]} />
      <Image
        style={[styles.maskGroupIcon, styles.boxCodePosition]}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  newPosition: {
    textAlign: "left",
    left: "38.06%",
    position: "absolute",
  },
  boxCodePosition: {
    overflow: "hidden",
    position: "absolute",
  },
  rectangle: {
    height: "100%",
    width: "100%",
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
  },
  newCategoryCourse: {
    height: "36.76%",
    width: "55.56%",
    top: "16.91%",
    fontSize: FontSize.size_lgi,
    fontWeight: "600",
    fontFamily: FontFamily.jostSemiBold,
    color: Color.colorGray,
  },
  newThe3d: {
    top: "38.24%",
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.mulishBold,
    color: Color.colorDimgray,
  },
  instagram: {
    height: "23.53%",
    width: "8.89%",
    top: "56.62%",
    right: "53.06%",
    bottom: "19.85%",
    left: "38.06%",
    position: "absolute",
  },
  boxCode: {
    height: "44.12%",
    width: "16.67%",
    top: "14.71%",
    right: "81.67%",
    bottom: "41.18%",
    left: "1.67%",
  },
  maskGroupIcon: {
    height: "63.24%",
    width: "23.89%",
    top: "18.38%",
    right: "66.11%",
    bottom: "18.38%",
    left: "10%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  rectangleParent: {
    top: 0,
    left: 0,
    width: 360,
    height: 136,
    position: "absolute",
  },
});

export default GroupComponent3;
