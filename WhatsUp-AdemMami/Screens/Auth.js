import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ImageBackground,
  BackHandler,
} from "react-native";
import { useState } from "react";
import firebase from "../Config";
const auth = firebase.auth();

export default function Auth(props) {
  const [email, setemail] = useState("ademmami92@gmail.com");
  const [password, setpassword] = useState("123456");
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/walpaper.jpg")}
    >
      <View
        style={{
          width: 300,
          height: 320,

          justifyContent: "center",
          alignItems: "center",

          borderRadius: 7,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            fontStyle: "italic",
            color: "darkgray",
            marginBottom: 10,
          }}
        >
          Welcome
        </Text>
        <TextInput
          onChangeText={(ch) => {
            setemail(ch);
          }}
          style={styles.input}
          placeholder="Enter your Email"
        ></TextInput>
        <TextInput
          onChangeText={(ch) => {
            setpassword(ch);
          }}
          style={styles.input}
          placeholder="Enter your Password"
        ></TextInput>
        <View style={{ flexDirection: "row", gap: 15 }}>
          <Button
            onPress={() => {
              BackHandler.exitApp();
            }}
            title="Exit"
            color="#FF7F7F"
          ></Button>
          <Button
            onPress={() => {
              auth
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                  props.navigation.navigate("Home");
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
            title="Connect"
            color="#417cf3"
          />
        </View>
        <Text
          onPress={() => {
            props.navigation.navigate("NewAccount");
          }}
          style={{
            fontWeight: "bold",
            fontStyle: "italic",
            color: "black",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Don't have Account ?
        </Text>
      </View>

      <StatusBar style="light" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    margin: 10,
  },
});
