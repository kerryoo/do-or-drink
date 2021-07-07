import React from "react";
import { Text, TextProps, StyleSheet } from "react-native";
import { textStyles } from "../constants/constantStyles";

type Props = {
  typography:
    | "title"
    | "display"
    | "header"
    | "smallBody"
    | "label"
    | "largeBody"
    | "guides"
    | "link"
    | "cardText";
  children: React.ReactNode;
} & TextProps;

const getStyle = {
  title: textStyles.title,
  display: textStyles.display,
  header: textStyles.header,
  smallBody: textStyles.smallBody,
  label: textStyles.label,
  largeBody: textStyles.largeBody,
  guides: textStyles.guides,
  link: textStyles.link,
  cardText: textStyles.cardText,
};

const DefaultText: React.FC<Props> = ({
  typography,
  children,
  ...props
}) => {
  const { style, ...other } = props;
  if (!style) {
    //default styles
    return (
      <Text style={[getStyle[typography], { paddingBottom: "5%" }]} {...other}>
        {children}
      </Text>
    );
  } else {
    return (
      <Text style={[getStyle[typography], style]} {...other}>
        {children}
      </Text>
    );
  }
};
export default DefaultText;