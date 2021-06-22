import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
const StatusBar = (props) => {
  return (
    <View style={styles.statusBar}>
      <Text style={styles.textStyle}>Welcome to TODO App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    padding: 15,
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#222831",
  },
  textStyle: {
    color: "#EEEEEE",
    textTransform: "uppercase",
    fontSize: 15,
    fontWeight: "700",
  },
});
export default StatusBar;
