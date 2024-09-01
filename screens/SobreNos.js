import * as React from "react";
import { StyleSheet, View, Text, Pressable, SafeAreaView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import ContactsGroup2 from "../components/ContactsGroup2";
import ContactsGroup1 from "../components/ContactsGroup1";
import ContactsGroup from "../components/ContactsGroup";
import {
  Color,
  FontSize,
  FontFamily,
  Border,
  StyleVariable,
  Padding,
} from "../GlobalStyles";

const SobreNos = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.sobreNos}>
        <View style={styles.sobreNosChild} />
        <View style={[styles.sobreNosInner, styles.sobreLayout]}>
          <View style={[styles.sobreNsWrapper, styles.sobreLayout]}>
            <Text style={[styles.sobreNs, styles.buttonFlexBox]}>
              SOBRE NÓS
            </Text>
          </View>
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
            style={styles.chevronbackwardIcon}
            contentFit="cover"
            source={require("../assets/chevronbackward.png")}
          />
        </Pressable>
        <ContactsGroup2 />
        <ContactsGroup1 />
        <ContactsGroup />
        <Image
          style={[styles.githubIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/github2.png")}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Color.colorMediumblue, // Ensures the background matches the top bar color
  },
  sobreLayout: {
    height: 60,
    width: "100%", // Updated to use full width
    position: "absolute",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    top: 0,
  },
  buttonLayout: {
    height: 52,
    width: 52,
    position: "absolute",
  },
  iconLayout: {
    height: 31,
    width: 31,
    top: 390,
    overflow: "hidden",
    position: "absolute",
  },
  sobreNosChild: {
    backgroundColor: Color.colorMediumblue,
    height: 110,
    width: "100%", // Makes the blue box span the full width of the screen
    position: "absolute",
    left: 0,
    top: 0,
  },
  sobreNs: {
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.notoLoopedThaiUI,
    color: Color.colorWhite,
    textAlign: "center",
    display: "flex",
    height: 60,
    width: "100%", // Updated to use full width
    position: "absolute",
  },
  sobreNsWrapper: {
    left: 0,
    height: 60,
    top: 0,
    width: "100%", // Ensures wrapper spans the full width
    alignItems: "center", // Centers the text horizontally
  },
  sobreNosInner: {
    top: 24,
    left: 0,
    height: 60,
    width: "100%", // Ensures the inner view spans the full width
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
    width: "77.69%",
    top: "11.15%",
    right: "11.15%",
    bottom: "11.15%",
    left: "11.15%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  buttonParent: {
    top: 728,
    left: 25,
  },
  githubIcon: {
    left: 127,
  },
  instagramIcon: {
    left: 168,
  },
  linkedinIcon: {
    left: 209,
  },
  sobreNos: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default SobreNos;
