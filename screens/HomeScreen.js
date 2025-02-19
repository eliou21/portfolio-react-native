import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity, Image, ImageBackground } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ImageBackground source={require("../assets/home.jpg")} style={styles.background}>

      <View style={[styles.container, isDarkMode ? styles.dark : styles.light]}>

        <Switch value={isDarkMode} onValueChange={() => setIsDarkMode(!isDarkMode)} style={styles.switch} />

        {/* Profile */}
        <View style={styles.profileContainer}>
          <Image source={require("../assets/profile.jpg")} style={[styles.image, isDarkMode && styles.imageDark]} />
          <Text style={[styles.name, isDarkMode && styles.textDark]}>- ELISHA ILAO -</Text>
          <Text style={[styles.bio, isDarkMode && styles.textDark]}>Computer Science Major || Developer</Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Skills")} style={[styles.button, isDarkMode && styles.buttonDark]}>
            <Text style={[styles.buttonText, isDarkMode && styles.buttonTextDark]}>Skills</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Projects")} style={[styles.button, isDarkMode && styles.buttonDark]}>
            <Text style={[styles.buttonText, isDarkMode && styles.buttonTextDark]}>Projects</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Contact")} style={[styles.button, isDarkMode && styles.buttonDark]}>
            <Text style={[styles.buttonText, isDarkMode && styles.buttonTextDark]}>Contact</Text>
          </TouchableOpacity>
        </View>

      </View>
      
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    padding: 20,
    width: "100%"
  },

  background: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%"
  },

  profileContainer: {
    alignItems: "center",
    marginBottom: 50
  },

  image: { 
    width: 150, 
    height: 150, 
    borderRadius: 75, 
    marginBottom: 15,
    borderColor: "black", 
    borderWidth: 3
  },

  imageDark: {
    borderColor: "white",
  },

  name: { 
    fontSize: 30, 
    fontWeight: "bold",
    color: "black",
    marginBottom: 8,
    letterSpacing: 2
  },

  bio: { 
    fontSize: 16, 
    textAlign: "center",
    color: "black",
    letterSpacing: 1
  },
  
  dark: { 
    backgroundColor: "rgba(44, 44, 44, 0.78)" 
  },

  light: {
    backgroundColor: "rgba(218, 215, 215, 0.44)" 
  },

  textDark: {
    color: "#fff"
  },

  switch: { 
    position: "absolute", 
    top: 40,
    right: 20 
  },

  buttonsContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 10
  },

  button: { 
    backgroundColor: "rgb(4, 93, 2)", 
    padding: 15, 
    marginVertical: 8, 
    borderRadius: 8, 
    width: "80%", 
    alignItems: "center",
    borderWidth: 3,
    borderColor: "black" 
  },

  buttonDark: {
    backgroundColor: "rgb(66, 133, 65)",
    borderColor: "white"
  },

  buttonText: { 
    color: "black", 
    fontSize: 20, 
    fontWeight: "bold", 
    letterSpacing: 2
  },

  buttonTextDark: {
    color: "white",
  },
});
