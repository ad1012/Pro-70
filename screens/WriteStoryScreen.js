import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler'; 
import {Header} from 'react-native-elements';

export default class WriteStoryScreen extends React.Component {
  constructor(props){ 
    super(props); 
    this.state = { 
      title: '', 
      author: '', 
      storyText: '', 
    } 
  }
    render() {
      return(
        <View style={styles.container}>
        <Header
          backgroundColor={'pink'}
          centerComponent={{
            text: 'Story Hub',
            style: { color: 'white', fontSize: 20 },
          }}
        />

        <TextInput
          style={styles.titleBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
        />
        <TextInput
          style={styles.authorBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
        />
         <TextInput
          style={styles.storyBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            
          }}>
          <Text style={styles.buttonText}> Submit </Text>
        </TouchableOpacity> 
        
        </View>
     ) 
    }
  }

      

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    inputView:{
      flexDirection: 'row',
      margin: 20
    },
    titleBox:{
      width: 100,
      height: 75,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    },
    authorBox:{
      width: 100,
      height: 75,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    },
    storyBox:{
      width: 200,
      height: 200,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    },
    goButton: {
      width: '50%',
      height: 55,
      alignSelf: 'center',
      padding: 10,
      margin: 10,
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
    },
  });