import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
const TaskItem = (props) => {
  return (
    <View style={styles.showTasks}>
      <Text style={styles.task}>{props.task}</Text>
      <Button
        color="#393E46"
        onPress={() => props.removeTask(props._id)}
        title="x"
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  showTasks: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  task: {
    color: "#222831",
  },
});

export default TaskItem;
