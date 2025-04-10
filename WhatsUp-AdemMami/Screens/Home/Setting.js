import React, { useState } from "react";
import { View, StyleSheet, Image, KeyboardAvoidingView } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import firebase from "../../Config";

const database = firebase.database();
const ref_database = database.ref();
const ref_listcomptes = ref_database.child("ListComptes");

export default function Setting() {
  const [pseudo, setPseudo] = useState("");
  const [numero, setNumero] = useState("");

  const handleSave = () => {
    const key = ref_listcomptes.push().key;
    const ref_uncompte = ref_listcomptes.child("compte" + key);
    ref_uncompte.set({ pseudo, numero });
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>
        Settings
      </Text>
      <Image source={require("../../assets/profile.jpg")} style={styles.profileImage} />
      <TextInput
        label="Pseudo"
        mode="outlined"
        value={pseudo}
        onChangeText={setPseudo}
        style={styles.input}
      />
      <TextInput
        label="Numéro"
        mode="outlined"
        keyboardType="phone-pad"
        value={numero}
        onChangeText={setNumero}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleSave} style={styles.button}>
        Save
      </Button>
      <Button mode="outlined" onPress={() => {}} style={styles.logoutButton}>
        Déconnecter
      </Button>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 30,
  },
  input: {
    width: "100%",
    marginBottom: 15,
  },
  button: {
    width: "70%",
    marginTop: 10,
  },
  logoutButton: {
    width: "70%",
    marginTop: 10,
  },
});
