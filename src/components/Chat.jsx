import React from 'react';
import {View, Text,TouchableOpacity,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Chat = ({type='person',name,date,message,onPress}) => {
  return (
    <TouchableOpacity activeOpacity={.5} style={styles.container} onPress={onPress}>
      <View style={styles.chatIconAndNameContainer}>
        <View style={styles.imageStyle}>
          <Icon name={type} size={35} color='white'/>
        </View>
        <View style={styles.chatNameContainer}>
          <Text style={styles.chatName}>{name}</Text>
          <View style={styles.messageAndTickIconContainer}>
            <Icon name="done-all" size={15} color="black" />
            <Text style={styles.messageText}>{message}</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.chatTimeInfo}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Chat;
const styles = StyleSheet.create({
  container: {
    padding: '2.5%',
    height: 84,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chatIconAndNameContainer: {
    flexDirection: 'row',
    width: '70%',
    height: '100%',
    alignItems: 'center',
  },
  imageStyle: {
    width: '20%',
    height: '73%',
    borderRadius: 60,
    backgroundColor: 'gray',
    justifyContent:'center',
    alignItems:'center',
    opacity:.9 ,
    flexDirection: 'row',
  },
  chatNameContainer: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  chatName: {
    color: 'black',
    fontWeight: '600',
    fontSize: 15,
  },
  messageAndTickIconContainer: {flexDirection: 'row', alignItems: 'center'},
  messageText: {
    color: 'gray',
    fontWeight: '500',
    marginLeft: 5,
  },
  chatTimeInfo: {
    color: 'gray',
    fontWeight: '500',
  },
});
