import React, { useState } from "react";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import firebase from "../../Config";
const database = firebase.database();
const ref_database = database.ref();
const ref_listcomptes=ref_database.child("ListComptes");

export default function Setting() {
  const [pseudo, setPseudo] = useState("");
  const [numero, setNumero] = useState();
  return (
    <ImageBackground
      source={require("../../assets/settings.png")}
      style={styles.container}
    >
      <Text
        style={{
          fontSize: 32,
          color: "#11A",
          fontWeight: "bold",
        }}
      >
        Settings
      </Text>
      <Image
        source={require("../../assets/profile.jpg")}
        style={{
          width: 250,
          height: 250,
          backgroundColor: "#0052",
          borderRadius: 40,
          marginBottom: 50,
        }}
      ></Image>
      <TextInput
        onChangeText={(ch) => {
          setPseudo(ch);
        }}
        style={styles.input}
        placeholderTextColor={"white"}
        placeholder="le pseudo"
      ></TextInput>
      <TextInput
        onChangeText={(ch) => {
          setNumero(ch);
        }}
        style={styles.input}
        placeholderTextColor={"white"}
        placeholder="le numero"
      ></TextInput>
      <Button onPress={()=>{
        const key=ref_listcomptes.push().key;
        const ref_uncompte=ref_listcomptes.child("compte"+key);
        ref_uncompte.set({
          pseudo,
          numero
        })
      }} title="save"></Button>
      <Button title="Deconnect"></Button>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  input: {
    color: "white",
    borderWidth: 2,
    borderColor: "white",
    height: 50,
    width: "90%",
    backgroundColor: "#0007",
    marginBottom: 15,
    borderRadius: 4,
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center", // align horiz
    justifyContent: "center", // align verti
  },
});
