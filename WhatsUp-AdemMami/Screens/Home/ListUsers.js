import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const data = [
  { pseudo: "Adem", numero: "123456", isOnline: true },
  { pseudo: "Mohamed", numero: "123456", isOnline: false },
  { pseudo: "Ali", numero: "123456", isOnline: true },
 
];

export default function ListUsers({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/walpaper.jpg")}
      style={styles.container}
    >
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.avatarContainer}>
              <TouchableOpacity onPress={() => navigation.navigate("Chat", { user: item })}>  
                <Image source={require("../../assets/profile.jpg")} style={styles.avatar} />
              </TouchableOpacity>
              <View style={[styles.statusIndicator, { backgroundColor: item.isOnline ? '#4CAF50' : '#9E9E9E' }]} />
            </View>
            
            <View style={styles.textContainer}>
              <Text style={styles.pseudo}>{item.pseudo}</Text>
              <TouchableOpacity
                onPress={() => {
                  if (Platform.OS === "android") {
                    Linking.openURL(`tel:${item.numero}`);
                  } else {
                    Linking.openURL(`telprompt:${item.numero}`);
                  }
                }}
              >
                <Text style={styles.numero}>{item.numero}</Text>
              </TouchableOpacity>
              <Text style={styles.statusText}>
                {item.isOnline ? 'Online' : 'Offline'}
              </Text>
            </View>
            
            <TouchableOpacity 
              style={styles.messageButton}
              onPress={() => navigation.navigate("Chat", { user: item })}
            >
              <MaterialIcons name="chevron-right" size={30} color="#6974d6" />
            </TouchableOpacity>
          </View>
        )}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  listContainer: {
    marginTop: 50,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: "center",
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  statusIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'white',
  },
  textContainer: {
    flex: 1,
  },
  pseudo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  numero: {
    fontSize: 16,
    color: "#007bff",
    marginTop: 4,
  },
  statusText: {
    fontSize: 12,
    color: '#616161',
    marginTop: 2,
  },
  messageButton: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
