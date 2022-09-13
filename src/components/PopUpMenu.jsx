import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const PopUpMenu = ({popUpMenuItems = popUpItems}) => {
  const [modal, setShowModal] = useState(false);
  const handleModal = () => setShowModal(!modal);

  return (
    <View style={styels.mainContainer}>
      <TouchableOpacity onPress={handleModal} style={styels.imageStyle}>
        <Icon name="more-vert" size={25} color="white" />
      </TouchableOpacity>
      <Modal transparent={true} visible={modal} animationType="none">
        <TouchableOpacity
          onPress={handleModal}
          style={{
            flex: 1,
          }}>
          <View style={styels.popUpMenuContainer}>
            <FlatList
              data={popUpMenuItems}
              renderItem={({item, index}) => {
                return (
                  <MenuItems
                    menuTitle={item.item}
                    onTap={item.onTap}
                    key={index}
                  />
                );
              }}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
const MenuItems = ({menuTitle, onTap}) => {
  return (
    <TouchableWithoutFeedback onPress={onTap}>
      <Text style={styels.popUpItemText}>{menuTitle}</Text>
    </TouchableWithoutFeedback>
  );
};
export default PopUpMenu;
const styels = StyleSheet.create({
  mainContainer: {
    height: 25,
  },
  imageStyle: {
    height: '100%',
    width: '100%',
  },
  popUpItemText: {
    color: 'black',
    marginBottom: '15%',
    fontSize: 14,
    fontWeight: '500',
  },
  popUpMenuContainer: {
    position: 'absolute',
    top: '3%',
    right: '3%',
    width: '48%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
});

const popUpItems = [
  {
    item: 'New group',
    onTap: () => alert('New Group'),
  },
  {
    item: 'New broadcasr',
    onTap: () => alert('New broadcasr'),
  },
  {
    item: 'Linked devices',
    onTap: () => alert('Linked devices'),
  },
  {
    item: 'Starred message',
    onTap: () => alert('Starred message'),
  },
  {
    item: 'Settings',
    onTap: () => alert('Settings'),
  },
];
