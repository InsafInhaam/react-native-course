import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  Modal,
  Image,
} from "react-native";

function GoalItem(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredtext) {
    setEnteredGoalText(enteredtext);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/logo.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Text style={styles.errormsg}>{props.errormsg}</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="TO-DO" onPress={addGoalHandler} color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="#f31282" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#aaa",
    width: "90%",
    marginRight: 8,
    padding: 10,
    borderRadius: 6,
  },
  errormsg: {
    color: "red",
    margin: 10,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
