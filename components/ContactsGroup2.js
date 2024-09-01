import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import GroupComponent3 from "./GroupComponent3";

const ContactsGroup2 = () => {
  return (
    <View style={styles.componentParent}>
      <GroupComponent3 />
      <Image
        style={[styles.githubIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/github.png")}
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
  iconLayout: {
    overflow: "hidden",
    height: 31,
    width: 31,
    top: 78,
    position: "absolute",
  },
  githubIcon: {
    left: 137,
  },
  instagramIcon: {
    left: 178,
  },
  linkedinIcon: {
    left: 219,
  },
  componentParent: {
    top: 477,
    left: 25,
    width: 360,
    height: 136,
    position: "absolute",
  },
});

export default ContactsGroup2;
