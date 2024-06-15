import { StyleSheet, Text, View } from "react-native";
import { Card } from "./src/components/Card";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
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
