import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context'
import MyHeader from '../MyHeader'
import {Video} from 'expo-av'

export default class TipScreen extends Component{ 
    render(){
        return(
            <SafeAreaProvider>
            <View>
                <MyHeader title='Tip Screen'/>
                <View>
                    <Text>We have some tips here</Text>
                </View>
                <View>
                  <Text>1. At the top left side there is an icon which will lead to stright to the home screen</Text>
                  <Text>2. At home screen there will be different buttons which will lead you to different screen </Text>
                  <Text>3. At the calender screen will show you the date</Text>
                  <Text>4. There is a button</Text>
                  <Text>5. At the top left side there is an icon which will lead to stright to the home screen</Text>
                  <Text>6. At the top left side there is an icon which will lead to stright to the home screen</Text>
                  <Video
                  source={(require('../assets/hd1612.mov'))}
                  rate={1.0}
                  volume={1.0}
                  muted={false}
                  resizeMode="cover"
                  style={{ width: 500, height: 300, justifyContent:'center' }}
                  shouldPlay
                  isLooping
                  />
                </View>
            </View>
            </SafeAreaProvider>
        )
    }
}