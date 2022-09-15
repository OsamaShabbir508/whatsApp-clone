import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Message = ({text = 'Hey!', date = '17:08',own=true}) => {
  return (
    <View style={{ alignSelf:own? 'flex-end':'flex-start',marginTop:15}}>
      <View style={[styles.mainContainer,{backgroundColor:own?'#E0F9CC':'white'}]}>
        <Text style={styles.message}>{text}</Text>
        <View style={styles.dateAndCheckIconContainer}>
          <Text style={styles.dateStyle}>{date}</Text>
          <Icon name="done-all" color={'gray'} size={15} />
        </View>
      </View>
    </View>
  );
};
export default Message;
const styles = StyleSheet.create({
  mainContainer: {
    paddingLeft: 11,
    paddingTop: 5,
    borderRadius: 5,
    paddingRight: 10,
    paddingBottom: 6,
    elevation: 1.5,
    alignSelf: 'flex-start',
    maxWidth: '65%',
    backgroundColor: '#E0F9CC',
  },
  dateAndCheckIconContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dateStyle: {
    marginRight: '2%',
    marginTop: 5,
    fontSize: 10,
    fontWeight: '600',
    color: '#808080',
  },
  message: {
    color: '#808080',
    fontWeight: '400',
    fontSize: 14.5,
    textAlign: 'left',
  },
});
