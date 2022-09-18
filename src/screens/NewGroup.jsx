import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Header from '../components/Header';
import {Color} from '../theme/color';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NewGroup = ({navigation}) => {
  const [participants, setParticipants] = useState(contact_List);
  const onBack = () => navigation.goBack();
  const toogleAddParticipant = id => {
    const index = participants.findIndex(part => part.id == id);
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
          onBack,
        }}
      />

      <FlatList
        horizontal={true}
        data={participants.filter(member => member.isSelected == true)}
        renderItem={({item, index}) => (
          <Participants
            index={index}
            key={index}
            onPress={toogleAddParticipant}
            isSelected={item.isSelected}
            title={item.title}
            selectedParticipant={true}
            id={item.id}
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
            id={item.id}
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
  selectedParticipant,
  id,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => onPress(id)}
      style={[
        styles.participantMainContainer,
        {width: selectionList ? '100%' : 70},
      ]}>
      <View
        style={[
          styles.profileIconContainer,
          {backgroundColor: `${Color.grayCloud}`},
        ]}>
        <Icon name={iconName} size={32} color="white" />
        <View
          style={[
            styles.absoluteIconContainer,
            selectedParticipant && {
              backgroundColor: '#616D7E',
              borderRadius: 45,
              padding: 0.76,
              opacity: 0.8,
            },
          ]}>
          {selectedParticipant ? (
            <Icon name="close" size={15} color={'white'} />
          ) : (
            isSelected && <Icon name="check-circle" size={22} color="green" />
          )}
        </View>
      </View>
      {selectionList && (
        <View style={styles.detailContainer}>
          <Text style={styles.title}>{title}</Text>
          {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
        </View>
      )}
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
    padding: 5,
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
  absoluteIconContainer: {
    position: 'absolute',
    bottom: 4,
    right: 0,
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
    id: '1',
    title: 'Saad Ahmd',
    isSelected: false,
  },
  {id: '2', title: 'Huzaifa Coa', isSelected: true},
  {id: '3', title: 'Hassan ahmed', isSelected: false},
  {id: '4', title: 'Asif ahmed', isSelected: false},
  {id: '5', title: 'Ather te', isSelected: false},
  {id: '6', title: 'Shuja', isSelected: false},
  {id: '7', title: 'Ahmed', isSelected: false},
  {id: '8', title: 'Salman', isSelected: false},
  {id: '9', title: 'Osama Ahmed', isSelected: false},
  {id: '10', title: 'Osama Ahmed', isSelected: false},
  {id: '11', title: 'Osama Ahmed', isSelected: false},
  {id: '12', title: 'Osama Ahmed', isSelected: false},
  {id: '13', title: 'Osama Ahmed', isSelected: false},
  {id: '14', title: 'Osama Ahmed', isSelected: false},
  {id: '15', title: 'Osama Ahmed', isSelected: false},
  {id: '16', title: 'Osama Ahmed', isSelected: false},
  {id: '17', title: 'Osama Ahmed', isSelected: false},
  {id: '18', title: 'Osama Ahmed', isSelected: false},
  {id: '19', title: 'Osama Ahmed', isSelected: false},
  {id: '20', title: 'Osama Ahmed', isSelected: false},
  {id: '21', title: 'Osama Ahmed', isSelected: false},
  {id: '22', title: 'Osama Ahmed', isSelected: false},
  {id: '23', title: 'Osama Ahmed', isSelected: false},
  {id: '24', title: 'Osama Ahmed', isSelected: false},
];
