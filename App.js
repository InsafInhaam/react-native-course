import React, { Component, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText === "") {
      setErrorMsg("Enter something in the input field!");
    } else {
      setCourseGoals((currentCourseGoals) => [
        ...currentCourseGoals,
        { text: enteredGoalText, id: Math.random().toString() },
      ]);
      setErrorMsg("");
      setModalIsVisible(false);
    }
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <View>
        <Text style={styles.heading}>What's up, Insaf!</Text>
      </View>
      <View style={styles.addbuttonView}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={startAddGoalHandler}
          style={styles.TouchableOpacityStyle}
        >
          <Text style={styles.FloatingButtonStyle}>+</Text>
        </TouchableOpacity>
      </View>

      <GoalInput
        onAddGoal={addGoalHandler}
        errormsg={errorMsg}
        visible={modalIsVisible}
        onCancel={endAddGoalHandler}
      />
      <Text style={styles.todo_heading}>Task's TO-DO</Text>

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  heading: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
    color: "#5e0acc",
    paddingBottom: 20,
  },
  todo_heading: {
    fontSize: 14,
    color: "#666",
    paddingBottom: 20,
  },
  goalsContainer: {
    flex: 5,
  },
  TouchableOpacityStyle: {
    position: "absolute",
    width: 70,
    height: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    bottom: -25,
    backgroundColor: "#5e0acc",
    borderRadius: 100,
  },

  FloatingButtonStyle: {
    fontSize: 30,
    color: "#fff",
  },
});
