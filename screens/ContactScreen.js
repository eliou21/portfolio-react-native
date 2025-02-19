import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, Linking, Switch, ImageBackground } from "react-native";

const ContactScreen = () => {
  const openLink = (url) => Linking.openURL(url);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <ImageBackground source={require("../assets/home.jpg")} style={styles.background}>

      <View style={[styles.container, isDarkMode ? styles.dark : styles.light]}>

        {/* Dark Mode Toggle */}
        <Switch 
          value={isDarkMode} 
          onValueChange={() => setIsDarkMode(!isDarkMode)} 
          style={styles.switch} 
        />

        {/* Title */}
        <Text style={[styles.title, isDarkMode && styles.titleDark]}>- CONTACT -</Text>

        {/* Contact Information */}
        <View style={[styles.contactInfoContainer, isDarkMode && styles.contactInfoContainerDark]}>
          
          <Text style={[styles.contactText, isDarkMode && styles.textDark]}>
            📍 Lipa City, Batangas, Philippines
          </Text>

          <Text style={[styles.contactText, isDarkMode && styles.textDark]}>
            📞 +63 920 565 1158
          </Text>

        </View>

        {/* Message Me Section */}
        <View style={[styles.messageContainer, isDarkMode && styles.messageContainerDark]}>

          <Text style={[styles.contactText, isDarkMode && styles.textDark]}>
            Message Me:
          </Text>

          <TextInput
            style={[styles.messageInput, isDarkMode && styles.inputDark]}
            placeholder="Type your message..."
            placeholderTextColor={isDarkMode ? "black" : "#666"}
            value={message}
            onChangeText={setMessage}
          />

          <TouchableOpacity 
            style={styles.sendButton} 
            onPress={() => {
              alert("Message has been sent!");
              setMessage("");
            }}
          >
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>

        </View>

        {/* Social Media Links */}
        <View style={[styles.iconsContainer, isDarkMode && styles.iconsContainerDark]}>

          {/* Centered "LINKS:" text */}
          <Text style={[styles.iconHeader, isDarkMode && styles.textDark]}>LINKS:</Text>

          {/* Icons and Labels */}
          <View style={[styles.iconRow, isDarkMode && styles.iconRowDark]}>

            <View style={styles.iconWrapper}>
              <TouchableOpacity onPress={() => openLink("https://www.facebook.com/elishagrace.ilao")}>
                <Image source={require("../assets/facebook.jpg")} style={styles.icon} />
              </TouchableOpacity>
              <Text style={[styles.iconText, isDarkMode && styles.textDark]}>Facebook</Text>
            </View>

            <View style={styles.iconWrapper}>
              <TouchableOpacity onPress={() => openLink("https://www.instagram.com/elishailao/")}>
                <Image source={require("../assets/insta.jpg")} style={styles.icon} />
              </TouchableOpacity>
              <Text style={[styles.iconText, isDarkMode && styles.textDark]}>Instagram</Text>
            </View>

            <View style={styles.iconWrapper}>
              <TouchableOpacity onPress={() => openLink("mailto:elisha_grace_ilao@dlsl.edu.ph")}>
                <Image source={require("../assets/gmail.jpg")} style={styles.icon} />
              </TouchableOpacity>
              <Text style={[styles.iconText, isDarkMode && styles.textDark]}>Gmail</Text>
            </View>

            <View style={styles.iconWrapper}>
              <TouchableOpacity onPress={() => openLink("https://github.com/eliou21")}>
                <Image source={require("../assets/github.jpg")} style={styles.icon} />
              </TouchableOpacity>
              <Text style={[styles.iconText, isDarkMode && styles.textDark]}>GitHub</Text>
            </View>

          </View>

        </View>

      </View>

    </ImageBackground>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 80,
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
    marginBottom: 20,
  },

  iconsContainer: {
    alignItems: "center",
    width: "90%",
    padding: 15,
    backgroundColor: "rgba(22, 16, 0, 0.76)",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    marginTop: 20,
  },

  iconsContainerDark: {
    backgroundColor: "rgba(196, 196, 196, 0.55)",
  },

  iconHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
    textAlign: "center",
    letterSpacing: 2
  },

  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },

  iconWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
  },

  iconText: {
    fontSize: 14,
    color: "white",
    marginTop: 5,
    textAlign: "center",
  },

  icon: {
    width: 50,
    height: 50,
    borderRadius: 15,
  },

  contactInfoContainer: {
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "rgba(22, 16, 0, 0.76)",
    padding: 15,
    borderRadius: 10,
    width: "90%",
    borderWidth: 1,
    borderColor: "white",
  },

  contactInfoContainerDark: {
    backgroundColor: "rgba(196, 196, 196, 0.55)",
  },

  contactText: {
    fontSize: 18,
    color: "white",
    marginBottom: 5,
    letterSpacing: 1
  },

  messageContainer: {
    alignItems: "center",
    width: "90%",
    height: 450,
    padding: 15,
    backgroundColor: "rgba(22, 16, 0, 0.76)",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
  },

  messageContainerDark: {
    backgroundColor: "rgba(196, 196, 196, 0.55)",
  },

  messageInput: {
    width: "100%",
    height: 320,
    backgroundColor: "white",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    color: "#000",
    textAlignVertical: "top",
  },

  inputDark: {
    backgroundColor: "rgba(255, 254, 254, 0.51)",
    color: "black"
  },

  sendButton: {
    backgroundColor: "rgb(66, 133, 65)",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },

  sendButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },

  dark: { 
    backgroundColor: "rgba(44, 44, 44, 0.78)" 
  },

  light: {
    backgroundColor: "rgba(218, 215, 215, 0.44)" 
  },

  textDark: {
    color: "Black",
  },

  switch: {
    position: "absolute",
    top: 40,
    right: 20,
  },
});
