import React from "react";
import { StyleSheet, Image, View } from "react-native";

export const HeaderLogo = () => {
    return (
      <Image source={require("../../assets/or-drink-logo-header.png")} style={{width: 50, height: 50 }} />
    )
  }
  
 export const BackButton = () => {
    return (
        <Image source={require("../../assets/back-button.png")} style={{width: 15, height: 25, marginHorizontal: 20}} />
      )
 }