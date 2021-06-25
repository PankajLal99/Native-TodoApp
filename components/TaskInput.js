import React from "react";
import { StyleSheet, Modal, TextInput, View, Button } from "react-native";

const TaskInput = (props) => {
  const [task, setTask] = React.useState("");
  return (
    <Modal visible={props.visible} animationType="slide ">
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Enter the Task"
          onChangeText={(text) => setTask(text)}
          value={task}
          style={styles.inputArea}
        />
        <Button
          onPress={() => {
            props.addTask(task)
            setTask("")
          }}
          color="#00ADB5"
          style={styles.inputButton}
          title="Add Task"
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputButton: {},
  removeButton: {},
  inputArea: {
    borderColor: "#222831",
    paddingHorizontal: 20,
    borderWidth: 1,
    marginBottom:10,
    height: 35,
    borderRadius: 20,
    width: "70%",
  },
});
export default TaskInput;
