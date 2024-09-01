import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const ContactsGroup = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.rectanglePosition}>
        <View style={[styles.rectangle, styles.rectanglePosition]} />
        <Text style={[styles.newCategoryCourse, styles.newPosition]}>
          Gabrielly Vitelli
        </Text>
        <Text
          style={[styles.newThe3d, styles.newPosition]}
        >{`Programadora e cantora `}</Text>
        <View style={[styles.boxCode, styles.boxCodePosition]} />
      </View>
      <Image
        style={[styles.maskGroupIcon, styles.boxCodePosition]}
        contentFit="cover"
        source={require("../assets/mask-group2.png")}
      />
      <View style={styles.instagram} />
      <Image
        style={[styles.githubIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/github1.png")}
      />
      <Image
        style={[styles.instagramIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/instagram.png")}
      />
      <Image
        style={[styles.linkedinIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/linkedin.png")}
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
    textAlign: "left",
    top: "50%",
    left: "36.94%",
    position: "absolute",
  },
  boxCodePosition: {
    overflow: "hidden",
    position: "absolute",
  },
  iconLayout: {
    height: 31,
    width: 31,
    top: 80,
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
  newCategoryCourse: {
    marginTop: -43,
    fontSize: FontSize.size_lgi,
    fontWeight: "600",
    fontFamily: FontFamily.jostSemiBold,
    color: Color.colorGray,
  },
  newThe3d: {
    marginTop: -11,
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
    top: "18.38%",
    right: "69.72%",
    bottom: "18.38%",
    left: "6.39%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  instagram: {
    height: "23.53%",
    width: "8.89%",
    top: "58.82%",
    right: "54.17%",
    bottom: "17.65%",
    left: "36.94%",
    position: "absolute",
  },
  githubIcon: {
    left: 133,
  },
  instagramIcon: {
    left: 174,
  },
  linkedinIcon: {
    left: 215,
  },
  groupParent: {
    height: "16.85%",
    width: "90.45%",
    top: "17.84%",
    right: "4.77%",
    bottom: "65.3%",
    left: "4.77%",
    position: "absolute",
  },
});

export default ContactsGroup;
