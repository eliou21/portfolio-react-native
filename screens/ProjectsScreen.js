import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, ImageBackground, Image, ScrollView } from "react-native";

const ProjectsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ImageBackground source={require("../assets/home.jpg")} style={styles.background}>

      <View style={[styles.container, isDarkMode ? styles.dark : styles.light]}>

        {/* Dark Mode Toggle */}
        <Switch value={isDarkMode} onValueChange={() => setIsDarkMode(!isDarkMode)} style={styles.switch} />

        {/* Scrollable Content */}
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          <Text style={[styles.title, isDarkMode && styles.titleDark]}>- PROJECTS -</Text>

          {/* Immediaid Project */}
          <View style={[styles.projectContainer, isDarkMode && styles.projectContainerDark]}>

            <Image source={require("../assets/immediaid.png")} style={styles.projectImage} />
            <Text style={[styles.projectTitle, isDarkMode && styles.textDark]}>Immediaid</Text>
            <Text style={[styles.projectDescription, isDarkMode && styles.textDark]}>
              A disaster preparedness app providing real-time alerts, S.O.S. system, and communication with local authorities.
            </Text>

          </View>

          {/* SavorEat Project */}
          <View style={[styles.projectContainer, isDarkMode && styles.projectContainerDark]}>

            <Image source={require("../assets/savoreat.png")} style={styles.projectImage} />
            <Text style={[styles.projectTitle, isDarkMode && styles.textDark]}>SavorEat</Text>
            <Text style={[styles.projectDescription, isDarkMode && styles.textDark]}>
              A restaurant reservation system that allows users to book tables, manage reservations, and receive notifications.
            </Text>

          </View>

          {/* Inventory Management Website */}
          <View style={[styles.projectContainer, isDarkMode && styles.projectContainerDark]}>

            <Image source={require("../assets/inventory.png")} style={styles.projectImage} />
            <Text style={[styles.projectTitle, isDarkMode && styles.textDark]}>Inventory Management</Text>
            <Text style={[styles.projectDescription, isDarkMode && styles.textDark]}>
              A web-based system for tracking inventory, managing stock levels, and categorizing products efficiently.
            </Text>

          </View>

        </ScrollView>

      </View>
      
    </ImageBackground>
  );
};

export default ProjectsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: "center",
    paddingTop: 100,
  },

  scrollContainer: {
    alignItems: "center",
    paddingBottom: 80,
  },

  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  title: { 
    fontSize: 40, 
    fontWeight: "bold",
    letterSpacing: 2,
    color: "white", 
    marginBottom: 30,
    letterSpacing: 2
  },

  textDark: {
    color: "black",
  },

  projectContainer: {
    width: "95%",
    backgroundColor: "rgba(22, 16, 0, 0.76)",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    borderWidth: 3,
    borderColor: "white"
  },  

  projectContainerDark: {
    backgroundColor: "rgba(196, 196, 196, 0.84)"
  },

  projectImage: {
    width: 280,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },

  projectTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
    letterSpacing: 2,
    alignSelf: "center"
  },

  projectDescription: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
    lineHeight: 25,
    letterSpacing: 1
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
    right: 20,
  },
});
