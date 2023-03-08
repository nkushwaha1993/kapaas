import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

const tiles = [
  {
    title: "Generate Token",
    page: "Page1",
    color: "red",
  },
  {
    title: "Quality Check",
    page: "Page2",
    color: "green",
  },
  {
    title: "Weighing",
    page: "Page3",
    color: "blue",
  },
  {
    title: "Payment and Billing",
    page: "Page4",
    color: "yellow",
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        {tiles.map((tile) => (
          <TouchableHighlight
            key={tile.title}
            underlayColor="lightgray"
            onPress={() => console.log(`Navigating to ${tile.page}`)}
            style={[styles.tile]}
          >
            <View style={styles.inner}>
              <Text style={styles.tileTitle}> {tile.title}</Text>
            </View>
          </TouchableHighlight>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    height: "85%",
    padding: 5,
  },
  tile: {
    width: "50%",
    height: "50%",
    padding: 5,
    aspectRatio: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 5,
    shadowColor: "#8ba3c8",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  tileTitle: {
    fontSize: 20,
    color: "#00008b",
    textAlign: "center",
  },
  inner: {
    flex: 1,
    backgroundColor: "#cdddf2",
    width: "98%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "column",
  },
});

export default HomeScreen;
