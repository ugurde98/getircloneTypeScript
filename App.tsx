import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RouteNavigator from "./src/navigators/RouteNavigator";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <RouteNavigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
