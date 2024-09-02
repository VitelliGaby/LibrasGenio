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
  
  // Hook para acessar a navegação entre telas
  const navigation = useNavigation();

  return (
    // SafeAreaView para garantir que o conteúdo não sobreponha áreas seguras do dispositivo
    <SafeAreaView style={styles.safeArea}>
      
      {/* Container principal da tela SobreNos */}
      <View style={styles.sobreNos}>
        
        {/* Componente decorativo ou de fundo */}
        <View style={styles.sobreNosChild} />
        
        {/* Container para o título "SOBRE NÓS" */}
        <View style={[styles.sobreNosInner, styles.sobreLayout]}>
          <View style={[styles.sobreNsWrapper, styles.sobreLayout]}>
            <Text style={[styles.sobreNs, styles.buttonFlexBox]}>
              SOBRE NÓS
            </Text>
          </View>
        </View>
        
        {/* Botão para navegar de volta para a tela "PaginaInicial" */}
        <Pressable
          style={[styles.buttonParent, styles.buttonLayout]}
          onPress={() => navigation.navigate("PaginaInicial")}
        >
          
          {/* Contêiner para o ícone dentro do botão */}
          <View style={[styles.button, styles.buttonLayout]}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/icon.png")}
            />
          </View>
          
          {/* Ícone de seta para voltar */}
          <Image
            style={styles.chevronbackwardIcon}
            contentFit="cover"
            source={require("../assets/chevronbackward.png")}
          />
        </Pressable>
        
        {/* Componentes personalizados que representam grupos de contatos */}
        <ContactsGroup2 />
        <ContactsGroup1 />
        <ContactsGroup />
        
        {/* Ícones de redes sociais */}
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
    backgroundColor: Color.colorMediumblue, 
  },
  sobreLayout: {
    height: 60,
    width: "100%", 
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
    width: "100%", 
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
    width: "100%", 
    position: "absolute",
  },
  sobreNsWrapper: {
    left: 0,
    height: 60,
    top: 0,
    width: "100%", 
    alignItems: "center",
  },
  sobreNosInner: {
    top: 24,
    left: 0,
    height: 60,
    width: "100%",
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
