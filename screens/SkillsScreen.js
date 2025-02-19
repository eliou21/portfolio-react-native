import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, ImageBackground } from "react-native";

const SkillsScreen = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ImageBackground source={require("../assets/home.jpg")} style={styles.background}>

      <View style={[styles.container, isDarkMode ? styles.dark : styles.light]}>

          <Switch value={isDarkMode} onValueChange={() => setIsDarkMode(!isDarkMode)} style={styles.switch} />

          <Text style={[styles.title, isDarkMode && styles.titleDark]}>- SKILLS -</Text>

          <Text style={[styles.text, isDarkMode && styles.textDark]}>C++</Text>
          <Text style={[styles.text, isDarkMode && styles.textDark]}>React Native</Text>
          <Text style={[styles.text, isDarkMode && styles.textDark]}>React</Text>
          <Text style={[styles.text, isDarkMode && styles.textDark]}>Node.js</Text>
          <Text style={[styles.text, isDarkMode && styles.textDark]}>JavaScript</Text>          

      </View>

    </ImageBackground>
  );
};

export default SkillsScreen;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center" 
  },

  background: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%"
  },

  title: { 
    fontSize: 40, 
    fontWeight: "bold",
    letterSpacing: 2,
    color: "black", 
    marginBottom: 30
  },

  titleDark: {
    color: "white"
  },

  text: { 
    fontSize: 20, 
    marginTop: 10, 
    color: "black",
    letterSpacing: 1 
  },

  textDark: {
    color: "white"
  },

  dark: { 
    backgroundColor: "rgba(44, 44, 44, 0.78)" 
  },

  light: {
    backgroundColor: "rgba(218, 215, 215, 0.44)" 
  },

  switch: { 
    position: "absolute", 
    top: 40, 
    right: 20 
  },

});
