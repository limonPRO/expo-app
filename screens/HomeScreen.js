import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>I am render from home </Text>
      <TouchableOpacity style={styles.button}
      onPress={ () => navigation.navigate("Profile")}
      >
        <Text style={{ color: "white", fontSize: 17 }}>go to profile</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "90%",
    height: 50,
    backgroundColor: "#008080",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    borderRadius: 5,
    marginTop: 10,
    alignSelf: "center",
    marginBottom: 40,
  },
});
