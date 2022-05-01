import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Home from "./screens/Home";
import { ThemeProvider } from "styled-components/native";
import Theme from "./screens/Theme";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={Theme}>
        <Home />
      </ThemeProvider>
      <StatusBar />
    </SafeAreaProvider>
  );
}
