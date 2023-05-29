import { Alert, Button, SafeAreaView, View } from "react-native";

export default function ({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View>
        <Button
          // style={{ Ba }}
          title="Press me to go bottom tab screen"
          onPress={() => navigation.navigate("Bottom Tab")}
        ></Button>
      </View>

      <View style={{ paddingTop: "10px" }}>
        <Button
          // style={{ Ba }}
          title="Data fetching"
          onPress={() => navigation.navigate("Product")}
        ></Button>
      </View>
    </SafeAreaView>
  );
}
