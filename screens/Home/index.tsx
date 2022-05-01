/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { Text, View } from "react-native";
import styled from "styled-components/native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import { StyledView, StyledBackground, StyledText } from "./styles";
import retroGif from "../assets/retrogear.gif";
import driverRetro from "../assets/Outdrive-horizon.jpg";

export default function Home() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <StyledView style={{}}>
      <StyledBackground source={retroGif}>
        <StyledText>Hello World</StyledText>
      </StyledBackground>
    </StyledView>
  );
}
