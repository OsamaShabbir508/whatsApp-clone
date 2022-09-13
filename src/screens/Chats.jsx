import React from 'react';
import {Text, View} from 'react-native';
import Chat from '../components/Chat';
const ChatScreen = () => {
  console.log('chat screen rendered');
  return (
    <View style={{
      flex:1
    }}>
     <Chat/>
     <Chat/>
     <Chat/>
      
    </View>
  );

};
export default ChatScreen;
