import { Alert, Button, SafeAreaView, View } from "react-native";

export default function ({navigation}) {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Button
        // style={{ Ba }}
        title="Press me to go bottom tab screen"
        onPress={() => navigation.navigate("Bottom Tab")}
      ></Button>
    </SafeAreaView>
  );
}
