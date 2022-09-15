import React, {useState} from 'react';
import {
  StyleSheet,
  Keyboard,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
  Text,
  View,
  Modal,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';
import {Color} from '../theme/color';
import {Icons} from '../assets';
import Message from '../components/Message';

const textInputDetail = {
  contentSize: 0,
  onFocus: false,
};
const Chatting = ({navigation, route}) => {
  const {name} = route.params;
  const [contentSize, setContentSize] = useState(0);
  const [onFocusAndBlur, setOnFocusAndBlur] = useState(false);
  const [showAattachment, setShowAttachment] = useState(false);
  const handleAttachmentModal = () => setShowAttachment(!showAattachment);

  const goBack = () => {
    navigation.goBack();
  };
  const onFocusandBlur = event => {
    setTextInputdetails(prevValues => ({...prevValues, onFocus: ''}));
  };
  const onContentSizeChanges = event => {
    120 > contentSize &&
      contentSize < 120 &&
      setContentSize(event.nativeEvent.contentSize.height);
    event.nativeEvent.contentSize.height < 120 &&
      setContentSize(event.nativeEvent.contentSize.height);
  };
  return (
    <View style={{flex: 1}}>
      <Header
        screenName="chat"
        data={{
          onBack: goBack,
          name,
          popUpMenuItems: popUpItems,
        }}
      />
      <View
        style={{
          flex: 1,
        }}>
        <ImageBackground
          style={{flex: 1, padding: 10}}
          resizeMode="cover"
          source={Icons.ChatBackground}>
          <FlatList
            data={messages}
            style={{
              marginBottom:9
            }}
            renderItem={({item}) => <Message own={item.own} text={item.mes} />}
          />

          <View
            style={[
              styles.inputTextContainer,messages.length===0&&
              {position: 'absolute'},
            ]}>
            <View style={styles.inputPrefixIconAndTextInputContainer}>
              <TouchableOpacity style={styles.inputPrefixIcon}>
                <Icon name="emoji-emotions" size={25} color={Color.grayCloud} />
              </TouchableOpacity>
              <TextInput
                numberOfLines={3}
                onContentSizeChange={onContentSizeChanges}
                multiline={true}
                placeholder="Message"
                placeholderTextColor={'black'}
                onFocus={e => {
                  console.log('focused');
                }}
                on={() => console.log('unfocused')}
                style={[
                  styles.textInputStyle,
                  {height: Math.max(55, contentSize)},
                ]}
              />
              <TouchableOpacity
                onPress={handleAttachmentModal}
                activeOpacity={0.8}
                style={styles.suffixIcon}>
                <Icon name="attach-file" size={25} color={Color.grayCloud} />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} style={styles.suffixIcon}>
                <Icon name="camera-alt" size={25} color={Color.grayCloud} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.micContainer}>
              <Icon name="mic" size={25} color="white" />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      <SelectAttachment
        onPress={handleAttachmentModal}
        showAattachment={showAattachment}
      />
    </View>
  );
};
const SelectAttachment = ({onPress, showAattachment}) => {
  return (
    <Modal transparent={true} visible={showAattachment}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.selectAttachmentModalContainer}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.selectModalBottomViewContainer}>
          <AttachmentOptions
            backgroundColor={'#6A0DAD'}
            iconName={'file-copy'}
            title="Document"
          />
          <AttachmentOptions
            backgroundColor={'#F67280'}
            iconName={'camera-alt'}
            title="Document"
          />
          <AttachmentOptions
            backgroundColor={'purple'}
            iconName={'image'}
            title="Document"
          />
          <AttachmentOptions
            backgroundColor={'orange'}
            iconName={'headset'}
            title="Document"
          />
          <AttachmentOptions
            backgroundColor={'#00A36C'}
            iconName={'location-pin'}
            title="Document"
          />
          <AttachmentOptions
            backgroundColor={'#1589FF'}
            iconName={'person'}
            title="Document"
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};
const AttachmentOptions = ({backgroundColor, iconName, title}) => {
  return (
    <View style={styles.attachmentOptionsContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[
          styles.attachmentIcon,
          {backgroundColor: `${backgroundColor}`},
        ]}>
        <Icon name={`${iconName}`} size={25} color="white" />
      </TouchableOpacity>
      <Text style={styles.attachmentText}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  inputTextContainer: {
    // position: 'absolute',
    bottom: 5,
    width: '95%',
    alignSelf: 'center',
    // backgroundColor:'green',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },
  inputPrefixIconAndTextInputContainer: {
    backgroundColor: 'white',

    flex: 0.95,
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderRadius: 40,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  inputPrefixIcon: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0.5,
    // backgroundColor: 'green',
    height: 50,
  },
  textInputStyle: {
    fontSize: 17.5,
    fontWeight: '400',
    color: 'black',
    // backgroundColor: 'black',
    flex: 1,
  },
  suffixIcon: {
    flex: 0.15,
    // backgroundColor: 'gray',
    paddingRight: 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  micContainer: {
    backgroundColor: Color.green,
    borderRadius: 40,
    padding: 9,
    marginBottom: 5,
    // height:30,
    // width:30,
    //flex:.16
  },
  attachmentOptionsContainer: {
    justifyContent: 'center',
    margin: '5%',
    //alignItems:'center'
  },
  attachmentIcon: {
    padding: 12,
    justifyContent: 'center',
    width: 50,
    borderRadius: 60,

    alignItems: 'center',
  },
  attachmentText: {
    color: 'gray',
    marginTop: 2,
    fontSize: 13,
  },
  selectAttachmentModalContainer: {
    height: '100%',
    width: '100%',
  },
  selectModalBottomViewContainer: {
    position: 'absolute',
    bottom: '9%',
    width: '95%',
    borderRadius: 20,
    backgroundColor: 'white',
    height: '35%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',

    padding: 20,
  },
});
const popUpItems = [
  {
    item: 'View contacts',
    onTap: () => alert('View contacts'),
  },
  {
    item: 'Search',
    onTap: () => alert('Search'),
  },
  {
    item: 'Disappearng message',
    onTap: () => alert('Disappearng message'),
  },
  {
    item: 'Wallpaper',
    onTap: () => alert('Wallpaper'),
  },
];
const messages = [
  {
    own: true,
    mes: 'Hey whats app dong?',
  },
  {
    own: false,
    mes: 'Nothind have youd done that?',
  },
  {
    own: true,
    mes: 'Yeterday I was busu in house chores and was doing notng just having a normal day.',
  },
  {
    own: false,
    mes: ' Yeterday I was busu in house chores and was doing . Yeterday I was busu in house chores and was doing notng just having a normal day.',
  },
  {
    own: true,
    mes: 'Hey whats app dong?',
  },
  {
    own: true,
    mes: 'Hey whats app dong?',
  },
  {
    own: true,
    mes: 'Hey whats app dong?',
  },
  {
    own: true,
    mes: 'Hey whats app dong?',
  },
  {
    own: true,
    mes: 'Hey whats app dong?',
  },
  {
    own: true,
    mes: 'Hey whats app dong?',
  },
  {
    own: true,
    mes: 'Hey whats app dong?',
  },
  {
    own: true,
    mes: 'Hey whats app dong?',
  },
  {
    own: true,
    mes: 'Hey whats app dong?',
  },
  {
    own: true,
    mes: 'Hey whats app dong?',
  },
  {
    own: true,
    mes: 'Hey whats app dong?',
  },
  {
    own: true,
    mes: 'Hey whats app dong?',
  },
];
export default Chatting;
