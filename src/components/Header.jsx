import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Color} from '../theme/color';
import PopUpMenu from './PopUpMenu';
import Icon from 'react-native-vector-icons/MaterialIcons';

const headerBasedOnScreen = ({screenName = 'home', data = {}}) => {
  if (screenName === 'home') {
    const {title} = data;
    return (
      <>
        <Text style={styels.title}>{title}</Text>
        <View style={styels.imageContainer}>
          <TouchableOpacity style={styels.touchContainer} onPress={() => {}}>
            <Icon name="search" size={25} color="white" />
          </TouchableOpacity>
          <View style={styels.touchContainer}>
            <PopUpMenu />
          </View>
        </View>
      </>
    );
  } else if (screenName === 'chat') {
          
          const {onBack,popUpMenuItems}=data;
    return (
      <>
        <View style={styels.chatHeaderBackAndInfoContainer}>
          <TouchableOpacity onPress={onBack}>
            <Icon name="arrow-back" size={25} color="white" />
          </TouchableOpacity>
          <View style={styels.profileImageContainer}>
            <Icon name="person" size={35} color="white" />
          </View>
          <View style={styels.nameAndLastSeenContainer}>
            <Text style={styels.name}>Saad Ghr</Text>
            <Text style={styels.lastSeenText}>Last seen Today at 10:30</Text>
          </View>
        </View>
        <View style={styels.callAndVideoIconContainer}>
          <TouchableOpacity>
            <Icon name="videocam" size={23} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="call" size={20} color="white" />
          </TouchableOpacity>
          <PopUpMenu popUpMenuItems={popUpMenuItems}  />
        </View>
      </>
    );
  }
};
const Header = ({screenName = 'home', data = {}}) => {
  return (
    <View style={styels.headerContainer}>
      {headerBasedOnScreen({
        screenName,
        data,
      })}
    </View>
  );
};

export default Header;
const styels = StyleSheet.create({
  headerContainer: {
    backgroundColor: Color.green,
    padding: 8,
    height: '9%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {color: Color.white, fontSize: 18, fontWeight: 'bold'},
  imageContainer: {
    height: '70%',
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  touchContainer: {
    height: '70%',
    width: '30%',
  },
  imageStyle: {
    height: '100%',
    width: '100%',
  },
  //chat
  chatHeaderBackAndInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    // backgroundColor:'red'
  },
  profileImageContainer: {
    padding: 6,
    backgroundColor: 'gray',
    borderRadius: 40,
    marginLeft: 3,
    opacity: 0.8,
  },
  nameAndLastSeenContainer: {
    flexDirection: 'column',
    marginLeft: 5,
    justifyContent: 'space-evenly',
    height: '100%',
  },
  name: {color: 'white', fontWeight: '700', fontSize: 16},
  lastSeenText: {
    color: Color.white,
    fontSize: 10,
  },
  callAndVideoIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 0.8,
  },
});
