import React from "react";
import { StyleSheet } from "react-native";
import colors from "./colors";

export const imageStyles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  logoContainer: {
    width: "100%",
    height: "30%",
    resizeMode: "contain",
    marginVertical: "40%",
  }
});

export const textStyles = StyleSheet.create({
  title: {
    color: colors.default,
    fontFamily: "Montserrat_700Bold",
    fontSize: 56,
  },
  display: {
    color: colors.default,
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 24,
  },
  header: {
    color: colors.default,
    fontFamily: "Montserrat_700Bold",
    fontSize: 16,
  },
  smallBody: {
    color: colors.default,
    fontFamily: "Montserrat_400Regular",
    fontSize: 16,
  },
  label: {
    color: colors.default,
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 16,
  },
  largeBody: {
    color: colors.default,
    fontFamily: "Montserrat_400Regular",
    fontSize: 20,
  },
  guides: {
    color: colors.default,
    fontFamily: "Montserrat_400Regular",
    fontSize: 14,
  },
  link: {
    color: colors.interactive,
    fontSize: 16,
    fontFamily: "Montserrat_400Regular",
    textDecorationLine: "underline",
    textDecorationColor: colors.interactive,
  },
  cardText: {
    color: colors.default,
    fontFamily: "Montserrat_700Bold",
    fontSize: 32,
  }
});

export const componentStyles = StyleSheet.create({
  button: {
    borderRadius: 90,
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginBottom: "15%",
    width: "75%",
  },
});
