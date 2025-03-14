import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ImageBackground,
  BackHandler,
} from "react-native";
import firebase from "../Config";
const auth = firebase.auth();

export default function NewAccount(props) {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [confirmpassword, setconfirmpassword] = useState();
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
          Create new Account
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
        <TextInput
          onChangeText={(ch) => {
            setconfirmpassword(ch);
          }}
          style={styles.input}
          placeholder="Confirm your Password"
        ></TextInput>
        <View style={{ flexDirection: "row", gap: 15 }}>
          <Button
            onPress={() => {
              props.navigation.goBack();
            }}
            title="Back"
            color="#FF7F7F"
          ></Button>
          <Button
            onPress={() => {
              if (password == confirmpassword) {
                auth
                  .createUserWithEmailAndPassword(email, password)
                  .then(() => {
                    props.navigation.replace;
                  })
                  .catch((err)=>{alert(err)});
              } else {
                alert("verify your password");
              }
            }}
            title="Create"
            color="#417cf3"
          ></Button>
        </View>
        <Text
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
