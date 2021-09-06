import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Image, Platform, StyleSheet, Switch, Text, View } from 'react-native';
import bat from "./assets/c02n43451co3o9rj1ee0.png"
import tat from "./assets/tat.png"
import Constants from 'expo-constants'
import { Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function App() {
  // const os = Platform.OS

  const [isEnabled, setIsEnabled] = useState(false);

  const [isImage, setImage] = useState(tat);

  const toggleSwitch = () => {
    if (isEnabled) {
      setImage(tat)
    } else setImage(bat)
    setIsEnabled(previousState => !previousState)

  };


  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.content}>
        <Text>Test chơi chơi</Text>

        <Image source={isImage} style={styles.image} />

        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight
  },

  content: {

  },

  image: {
    // maxHeight: { height },
    // maxWidth: '100%',
    resizeMode: 'contain',
    width: windowWidth,
    height: windowHeight - 150,
  }
});
