/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState} from 'react';
import {
  Alert,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import CustomChat from './src/CustomChat';

function App(): JSX.Element {
//Replace Chat Title with your chat tile
const [chatTitle, setChatTitle] = useState("Chat Title");
//Replace #134074  with your color
const [headerColor, setHeaderColor] = useState("#134074");

const handleCloseBtn = () => {
    // Handle closing the chat window
    Alert.alert("Close Pressed");
    // write your close logic here.....
  };
  return (
     <View style={{ flex: 1 }}>
      {/* Custom chat component  */}
      <CustomChat headerTitle={chatTitle} onClose={handleCloseBtn} headerColor={headerColor} />
    </View>
  );
}
export default App;
