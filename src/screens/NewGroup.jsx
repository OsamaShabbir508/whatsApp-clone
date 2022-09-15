import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Header from '../components/Header';
import {Color} from '../theme/color';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NewGroup = ({navigation}) => {
  const [participants, setParticipants] = useState(contact_List);
   const onBack=()=>navigation.goBack()
  const toogleAddParticipant = index => {
    participants[index].isSelected = !participants[index].isSelected;
    setParticipants([...participants]);
  };

  return (
    <View style={styles.mainContainer}>
      <Header
        screenName="addContact"
        data={{
          title: 'New group',
          subTitle: 'Add participants',
          onBack
        }}
      />
    
      <FlatList
         horizontal={true}
         //style={{backgroundColor:'red',alignContent:'center'}}
        data={participants.filter(member => member.isSelected == true)}
        renderItem={({item,index}) => (
          <Participants
            index={index}
            key={index}
            onPress={toogleAddParticipant}
            isSelected={item.isSelected}
            title={item.title}
            selectedParticipant={true}
          />
        )}
      />
      <FlatList
        data={participants}
        renderItem={({index, item}) => (
          <Participants
            index={index}
            key={index}
            onPress={toogleAddParticipant}
            isSelected={item.isSelected}
            title={item.title}
            selectionList={true}
          />
        )}
      />
    </View>
  );
};
export default NewGroup;
const Participants = ({
  index = 0,
  onPress,
  isSelected = false,
  iconName = 'person',
  iconBackGroundColor = Color.grayCloud,
  title = 'Test',
  subTitle = 'Hey there! I am using WhatsApp',
  selectionList,
  selectedParticipant
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => onPress(index)}
      style={[styles.participantMainContainer,{width:selectionList?'100%':70}]}>
      <View
        style={[
          styles.profileIconContainer,
          {backgroundColor: `${Color.grayCloud}`},
        ]}>
        <Icon name={iconName} size={32} color="white" />
        <View style={[styles.absoluteIconContainer,selectedParticipant&&{backgroundColor:'#616D7E',borderRadius:45,padding:.76,opacity:.8}]}>
          {selectedParticipant?<Icon name="close" size={15} color={'white'} /> :isSelected && <Icon name="check-circle" size={22} color="green" />}
        </View>
      </View>
      {selectionList&&
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{title}</Text>
        {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
      </View>}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  participantMainContainer: {
    width: '100%',
    flexDirection: 'row',
    padding:5,
    height: 80,
    alignItems: 'center',
   // backgroundColor:'blue'
  },
  profileIconContainer: {
    padding: 9,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
  absoluteIconContainer:{
    position: 'absolute',
     bottom: 4, 
     right: 0
    },
  detailContainer: {
    marginLeft: 12,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {color: 'black', fontSize: 17, fontWeight: '700'},
  subTitle: {color: 'gray', opacity: 0.6, fontSize: 12, fontWeight: '500'},
});
const contact_List = [
  {
    title: 'Saad Ahmd',
    isSelected: false,
  },
  {
    title: 'Huzaifa Coa',
    isSelected: true,
  },
  {
    title: 'Hassan ahmed',
    isSelected: false,
  },
  {
    title: 'Asif ahmed',
    isSelected: false,
  },
  {
    title: 'Ather te',
    isSelected: false,
  },
  {
    title: 'Shuja',
    isSelected: false,
  },
  {
    title: 'Ahmed',
    isSelected: false,
  },
  {
    title: 'Salman',
    isSelected: false,
  },
  {
    title: 'Osama Ahmed',
    isSelected: false,
  },
  {
    title: 'Osama Ahmed',
    isSelected: false,
  },
  {
    title: 'Osama Ahmed',
    isSelected: false,
  },
  {
    title: 'Osama Ahmed',
    isSelected: false,
  },
  {
    title: 'Osama Ahmed',
    isSelected: false,
  },
  {
    title: 'Osama Ahmed',
    isSelected: false,
  },
  {
    title: 'Osama Ahmed',
    isSelected: false,
  },
  {
    title: 'Osama Ahmed',
    isSelected: false,
  },
  {
    title: 'Osama Ahmed',
    isSelected: false,
  },
  {
    title: 'Osama Ahmed',
    isSelected: false,
  },
  {
    title: 'Osama Ahmed',
    isSelected: false,
  },
  {
    title: 'Osama Ahmed',
    isSelected: false,
  },
  {
    title: 'Osama Ahmed',
    isSelected: false,
  },
  {
    title: 'Osama Ahmed',
    isSelected: false,
  },
  {
    title: 'Osama Ahmed',
    isSelected: false,
  },
  {
    title: 'Osama Ahmed',
    isSelected: false,
  },
];
