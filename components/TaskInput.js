import React from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

const TaskInput = (props) => {
  const [task, setTask] = React.useState("");
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        placeholder="Enter the Task"
        onChangeText={(text) => setTask(text)}
        style={styles.inputArea}
      />
      <Button
        onPress={() => props.addTask(task)}
        color="#00ADB5"
        style={styles.inputButton}
        title="Add Task"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    height: 60,
    width: "100%",
  },
  inputButton: {},
  removeButton: {},
  inputArea: {
    borderColor: "#222831",
    paddingHorizontal: 20,
    borderWidth: 1,
    height: 35,
    borderRadius: 20,
    width: "70%",
  },
});
export default TaskInput;
