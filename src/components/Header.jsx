import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Icons} from '../assets';
import {Color} from '../theme/color';
import PopUpMenu from './PopUpMenu';

const Header = ({title = 'sds'}) => {
  return (
    <View style={styels.headerContainer}>
      <Text style={styels.title}>{title}</Text>
      <View style={styels.imageContainer}>
        <TouchableOpacity style={styels.touchContainer} onPress={()=>{}}>
          <Image style={styels.imageStyle} source={Icons.Search} />
        </TouchableOpacity>
        <View style={styels.touchContainer}>
          <PopUpMenu/>
        </View>
        {/* <TouchableOpacity style={styels.touchContainer}>
          <Image style={styels.imageStyle} source={Icons.More} />
          </TouchableOpacity> */}
        
      </View>
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
  touchContainer:{
    height: '70%',
    width: '30%'
  },
  imageStyle: {
    height: '100%',
    width: '100%',
  },
});
