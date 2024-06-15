import { ReactElement } from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#F0F0F0", // Light gray background
    alignItems: "center",
    justifyContent: "center",
    padding: 16, // Increased padding for better spacing
    marginHorizontal: 20, // Horizontal margin to center the card
    borderRadius: 10, // Rounded corners
    shadowColor: "#000", // Shadow color (if needed)
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Elevation for Android shadow
  },
});

export function Card(): ReactElement {
  return (
    <View style={styles.card}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}
