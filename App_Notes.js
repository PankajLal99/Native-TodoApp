import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import TaskItem from "./components/TaskItem";
import StatusBar from "./components/StatusBar";
import TaskInput from "./components/TaskInput";

export default function App() {
  const [task, setTask] = React.useState("");
  const [myTaskList, setMyTaskList] = React.useState([]);

  const addTask = () => {
    setMyTaskList((oldData) => {
      return [...oldData, { key: Math.random().toString(), task: task }];
    });
  };

  const removeTask = (key) => {
    // console.log(key)
    const newTaskList = myTaskList.filter((curTask) => {
      return curTask.key != key;
    });
    setMyTaskList(newTaskList);
  };

  return (
    <View style={styles.container}>
      {/* Data property should have array 
          Render Function  (renderItem) 
          keyExtractor   
      */}
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
      {/* ScrollView is Inefficient due to infinite Data */}
      {/* <ScrollView>
      {
        myTaskList.map((curTask)=>
            <View key={curTask.id} style={styles.showTasks}>
              <Text style={styles.task}>{curTask.task}</Text>
              <Button color="#393E46" onPress={()=>removeTask(curTask.id)} title="x"></Button>
            </View>
        )
      }
      </ScrollView> */}
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
