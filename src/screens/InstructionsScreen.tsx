import React from "react";
import { Image, View, StyleSheet } from "react-native";
import colors from "../constants/colors";
import DefaultText from "../components/DefaultText";
import PagerView from "react-native-pager-view";

const InstructionsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <PagerView style={styles.viewPager} initialPage={0}>
        <View style={styles.page} key="1">
          <DefaultText typography="cardText">
            Gather a group of friends you'd like to get drunk with and sit in a
            circle.
          </DefaultText>
          <DefaultText typography="cardText">#_orDRINK</DefaultText>
        </View>
        <View style={styles.page} key="2">
          <DefaultText typography="cardText">
            Take a card from the pile, read it aloud, then either do it or
            drink!
          </DefaultText>
          <DefaultText typography="cardText">#_orDRINK</DefaultText>
        </View>
        <View style={styles.page} key="3">
          <DefaultText typography="cardText">
            Pass the phone to the person on the right. Easy right?
          </DefaultText>
          <DefaultText typography="cardText">#_orDRINK</DefaultText>
        </View>
        <View style={styles.page} key="4">
          <DefaultText typography="cardText">
            MOST IMPORTANTLY! Drink responsibly! I made this app so you could
            have a good time, so let's keep it that way! Have fun! 🎉
          </DefaultText>
          <DefaultText typography="cardText">#_orDRINK</DefaultText>
        </View>
      </PagerView>
    </View>
  );
};

export default InstructionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  viewPager: {
    flex: 1,
  },
  page: {
    backgroundColor: colors.background,
    paddingHorizontal: "8%",
    paddingTop: "30%",
    paddingBottom: "10%",
    justifyContent: "space-between",
  },
  graphic: {
    width: "100%",
    height: "60%",
    resizeMode: "contain",
  },
});
