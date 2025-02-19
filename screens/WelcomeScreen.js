import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require("../assets/welcome.jpg")} style={styles.background}>

      <View style={styles.container}>

        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.title}>To</Text>
        <Text style={styles.title}>My Portfolio!</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.replace("Home")}>
          <Text style={styles.buttonText}>ENTER</Text>
        </TouchableOpacity>

      </View>

    </ImageBackground> 
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({

  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center",     
  },

  background: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(174, 174, 174, 0.9)",
  },

  title: { 
    fontSize: 50, 
    textAlign: "center",
    fontWeight: "bold", 
    color: "white", 
    letterSpacing: 3 
  },

  button: { 
    backgroundColor: "#050404", 
    paddingVertical: 12, 
    paddingHorizontal: 20, 
    borderRadius: 15, 
    marginTop: 50
  },

  buttonText: { 
    color: "white", 
    fontSize: 25, 
    fontWeight: "bold",
    letterSpacing: 2 
  },

});
