import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import TaskItem from "./components/TaskItem";
import StatusBar from "./components/StatusBar";
import TaskInput from "./components/TaskInput";

export default function App() {
  const [myTaskList, setMyTaskList] = React.useState([]);

  const addTask = (task) => {
    setMyTaskList((oldData) => {
      return [...oldData, { key: Math.random().toString(), task: task }];
    });
  };
  const removeTask = (key) => {
    const newTaskList = myTaskList.filter((curTask) => {
      return curTask.key !== key;
    });
    setMyTaskList(newTaskList);
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <TaskInput addTask={addTask} />
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={myTaskList}
        renderItem={(itemData) => (
          <TaskItem
            task={itemData.item.task}
            _id={itemData.item.key}
            removeTask={removeTask}
          />
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: "9%",
    backgroundColor: "#EEEEEE",
  },
});
