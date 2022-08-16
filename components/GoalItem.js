import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text} </Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#06BCEE",
    marginVertical: 10,
    marginHorizontal: 4,
    borderRadius: 6,
    backgroundColor: "#fff",
    shadowColor: "#333",
    elevation: 5,
    padding: 2,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "#000",
    padding: 10,
  },
});
