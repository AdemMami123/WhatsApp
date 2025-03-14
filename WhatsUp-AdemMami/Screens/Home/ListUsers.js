import React, { useState } from "react";
import {
  Button,
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
} from "react-native";
import firebase from "../../Config";
import { FlatList, View } from "react-native";
//const database = firebase.database();
//const ref_database = database.ref();
//const ref_listcomptes = ref_database.child("ListComptes");
const data = [
  {
    pseudo: "adem",
    numero: "123456",
  },
  {
    pseudo: "mohamed",
    numero: "123456",
  },
];

export default function ListUsers() {
  const [pseudo, setPseudo] = useState("");
  const [numero, setNumero] = useState();
  return (
    <ImageBackground
      source={require("../../assets/walpaper.jpg")}
      style={styles.container}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View

            style={{
              flexDirection: "row",
              borderColor: "white",
              borderWidth: 2,
              margin: 5,
              padding: 5,
              borderRadius: 5,
            }}
          >
            <TouchableHighlight onPress={() => {props.navigation.navigate("Chat")}}>
            <Image
              source={require("../../assets/profile.jpg")}
              style={{ width: 40, height: 50 }}
            ></Image>
            </TouchableHighlight>
            <Text>{item.pseudo}</Text>
            <Text onPress={()=>{
              if(Platform.OS=="android")
              {
                Linking.openURL(`tel:${item.numero}`)
              }
              else
              {
                Linking.openURL(`telprompt:${item.numero}`)
              }
            }}>{item.numero}</Text>
          </View>
        )}
      ></FlatList>
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
