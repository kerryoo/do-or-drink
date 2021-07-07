import React from "react";
import { Image, View, StyleSheet, Pressable } from "react-native";
import colors from "../constants/colors";
import { imageStyles } from "../constants/constantStyles";
import  DefaultText  from "../components/DefaultText";
import RoundButton from "../components/RoundButton";

const GameScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      
    </View>
  );
};

export default GameScreen;

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
  deck: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  wrapper: {
      height: "60%",
      width: "90%",
      marginTop: "30%",
  }
  
});
