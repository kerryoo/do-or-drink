import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { color } from "react-native-reanimated";
import colors from "../constants/colors";
import { textStyles, componentStyles } from "../constants/constantStyles";

interface Props {
  title: string;
  onPress: () => void;
  borderColor?: string;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
}

const RoundButton = ({
  title,
  onPress,
  borderColor = colors.default,
  backgroundColor = colors.transparent,
  textColor = colors.default,
  disabled = false,
}: Props) => {
  return (
    <TouchableOpacity
      style={[
        componentStyles.button,
        { backgroundColor: backgroundColor, borderColor: borderColor },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[textStyles.label, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RoundButton;