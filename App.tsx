import { StyleSheet, Text, View } from "react-native";
import { Card } from "./src/components/Card";
import { Theme } from "./src/constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.background.default,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Card />
    </View>
  );
}
