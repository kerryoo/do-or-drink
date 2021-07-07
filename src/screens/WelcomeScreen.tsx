import React, { useState, useEffect } from "react";
import { Image, View, StyleSheet, } from "react-native";
import colors from "../constants/colors";
import { imageStyles } from "../constants/constantStyles";
import RoundButton from "../components/RoundButton";

const WelcomeScreen = ({ navigation }) => {
  

  
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/or-drink-logo.png")}
        style={imageStyles.logoContainer}
      />
      <RoundButton
        title="Play"
        onPress={() => navigation.navigate("MyModal")}
      />
      <RoundButton
        title="How To Play"
        onPress={() => navigation.navigate("Instructions")}
      />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  buttonsContainer: {
    marginTop: "20%",
  },
});
