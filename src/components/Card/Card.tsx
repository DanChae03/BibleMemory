import { ReactElement } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Theme } from "../../constants/theme";

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: Theme.primary,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 16,
    shadowColor: Theme.dark,
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  text: {
    color: Theme.background.paper,
  },
});

export function Card(): ReactElement {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>
        Open up App.tsx to start working on your app!
      </Text>
    </View>
  );
}
