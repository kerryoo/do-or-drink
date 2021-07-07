import React from "react";
import { Image, View, StyleSheet, } from "react-native";
import colors from "../constants/colors";
import { imageStyles } from "../constants/constantStyles";
import RoundButton from "../components/RoundButton";
import DefaultText from "../components/DefaultText";

const WarningScreen = ({ navigation }) => {
  

  
  return (
    <View style={styles.container}>
        <DefaultText typography="title">WARNING</DefaultText>
      <DefaultText typography="display">
          Please drink responsibly. By continuing, you acknowledge that you are responsible for the consequences of playing this game.
      </DefaultText>
      <RoundButton title="Continue" onPress={()=>navigation.navigate("Welcome")}/>
    </View>
  );
};

export default WarningScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: colors.background,
    paddingHorizontal: "8%",
    paddingVertical: "50%",
    justifyContent: "space-between",
  },
});