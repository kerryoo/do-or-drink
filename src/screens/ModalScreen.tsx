"use strict";

import React, { useState } from "react";
import { Image, View, StyleSheet, Button } from "react-native";
import colors from "../constants/colors";
import DefaultText from "../components/DefaultText";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";

const ModalScreen = ({ navigation }) => {
  const [swipe, setSwipe] = useState("ready to be swiped");
  const [text, setText] = useState(
    "I hope you guys have a great time! Swipe ☝️ to draw a card."
  );
  const [gesture, setGesture] = useState("None");
  const cardLibrary = require("../../assets/cardTexts.json");
  const [defaultLibrary, setDefaultLibrary] = useState(
    JSON.parse(JSON.stringify(cardLibrary["classic"]))
  );

  const getRandomCard = () => {
    let keys = Object.keys(defaultLibrary);
    let card, key;
    if (keys.length <= 0) {
      card = "You've drawn 100 cards 🥳! The deck will now reset.";
      refillDeck();
    } else {
      key = keys[(keys.length * Math.random()) << 0];
      card = defaultLibrary[key];
      delete defaultLibrary[key];
    }

    console.log(keys.length);
    return card;
  };

  const refillDeck = () => {
    setDefaultLibrary(JSON.parse(JSON.stringify(cardLibrary["classic"])));
  };

  const onSwipeUp = (gestureState) => {
    setText(getRandomCard());
  };

  const onSwipe = (gestureName, gestureState) => {
    const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
    setGesture(gestureName);
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  return (
    <GestureRecognizer
      onSwipe={(direction, state) => onSwipe(direction, state)}
      onSwipeUp={(state) => onSwipeUp(state)}
      config={config}
      style={styles.container}
    >
      <View style={styles.modal}>
        <DefaultText typography="cardText">{text}</DefaultText>
        <DefaultText typography="cardText">#_orDRINK</DefaultText>
      </View>
    </GestureRecognizer>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    flex: 1,
    backgroundColor: colors.transparent,
  },
  modal: {
    height: "85%",
    backgroundColor: "black",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: "5%",
    paddingBottom: "10%",
    justifyContent: "space-between",
  },
});
