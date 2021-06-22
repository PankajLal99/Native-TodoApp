import React from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import TaskItem from "./components/TaskItem";
import StatusBar from "./components/StatusBar";
import TaskInput from "./components/TaskInput";

export default function App() {
  const [myTaskList, setMyTaskList] = React.useState([]);
  const [visible , setVisible] = React.useState(false);
  const addTask = (task) => {
    setMyTaskList((oldData) => {
      return [...oldData, { key: Math.random().toString(), task: task }];
    });
    setVisible(false);
  };
  const removeTask = (key) => {
    const newTaskList = myTaskList.filter((curTask) => {
      return curTask.key !== key;
    });
    setMyTaskList(newTaskList);
  };

  return (
    <>
    <View style={styles.container}>
      <StatusBar />
      <Button color="#00ADB5" title="Add New Task" onPress={()=>setVisible(true)} />
      <TaskInput visible={visible} addTask={addTask} />
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
    <View style={styles.bottomBar}>
      <Text>
        Designed and Developed by Pankaj Lal
      </Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "9%",
    backgroundColor: "#EEEEEE",
  },
  bottomBar: {
    padding:10,
    flexDirection:'row',
    justifyContent:'center',
    alignContent:'center',
    backgroundColor: "#EEEEEE",
  },
});
