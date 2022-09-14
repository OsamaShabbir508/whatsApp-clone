import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Color } from '../theme/color';

const Contact = ({iconName='person', iconBackGroundColor = Color.grayCloud,title='Test',subTitle='Hey there! I am using WhatsApp'}) => {
  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          backgroundColor: `${iconBackGroundColor}`,
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 40,
        }}>
        <Icon name={iconName} size={25} color="white" />
      </View>
       <View style={{
        marginLeft:12,
        flexDirection:'column',
        justifyContent:'center',
       }}>
        <Text style={{color:'black',fontSize:17,fontWeight:'700'}}>{title}</Text>
     {subTitle &&<Text style={{color:'gray',opacity:.6,fontSize:12,fontWeight:'500'}}>{subTitle}</Text>}
       </View>
    </View>
  );
};
export default Contact;
const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    height: 80,
    alignItems: 'center',
    //backgroundColor:'red'
  },
});
