import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Color} from '../theme/color';
import PopUpMenu from './PopUpMenu';
import Icon from 'react-native-vector-icons/MaterialIcons';

const headerBasedOnScreen = ({screenName = 'home', data = {}}) => {
  if (screenName == 'home') {
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
  } else if(screenName==='chat') {
    return(
      <>
      <Icon name='arrow-back' size={25} color='white' />
      </>
    )
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
    padding: 10,
    height: '10%',
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
});
