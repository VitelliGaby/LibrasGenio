import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const ContactsGroup1 = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.rectanglePosition}>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <View style={styles.instagram} />
        <Text style={[styles.newCategoryCourse, styles.newPosition]}>
          Gabriel Fernandes
        </Text>
        <Text
          style={[styles.newThe3d, styles.newPosition]}
        >{`Programadora mobile `}</Text>
        <View style={[styles.boxCode, styles.boxCodePosition]} />
      </View>
      <Image
        style={[styles.maskGroupIcon, styles.boxCodePosition]}
        contentFit="cover"
        source={require("../assets/mask-group1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  newPosition: {
    textAlign: "right",
    left: "9.44%",
    top: "50%",
    width: "51.94%",
    position: "absolute",
  },
  boxCodePosition: {
    overflow: "hidden",
    position: "absolute",
  },
  rectangle: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorAliceblue,
    borderStyle: "solid",
    borderColor: Color.colorSilver,
    borderWidth: 2,
  },
  instagram: {
    height: "23.53%",
    width: "8.89%",
    top: "58.82%",
    right: "63.06%",
    bottom: "17.65%",
    left: "28.06%",
    position: "absolute",
  },
  newCategoryCourse: {
    marginTop: -40,
    fontSize: FontSize.size_lgi,
    fontWeight: "600",
    fontFamily: FontFamily.jostSemiBold,
    color: Color.colorGray,
    height: 50,
  },
  newThe3d: {
    marginTop: -12,
    fontSize: FontSize.size_sm,
    fontWeight: "700",
    fontFamily: FontFamily.mulishBold,
    color: Color.colorDimgray,
  },
  boxCode: {
    top: 20,
    left: 6,
    width: 60,
    height: 60,
  },
  maskGroupIcon: {
    height: "63.24%",
    width: "23.89%",
    top: "20.59%",
    right: "10.56%",
    bottom: "16.18%",
    left: "65.56%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  groupParent: {
    height: "16.85%",
    width: "90.45%",
    top: "38.04%",
    right: "4.77%",
    bottom: "45.11%",
    left: "4.77%",
    position: "absolute",
  },
});

export default ContactsGroup1;
