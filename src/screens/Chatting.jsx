import React, {useState} from 'react';
import {
  StyleSheet,
  Keyboard,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';
import {Color} from '../theme/color';

const textInputDetail = {
  contentSize: 0,
  onFocus: false,
};
const Chatting = ({navigation, route}) => {
  const {name} = route.params;
  const [contentSize, setContentSize] = useState(0);
  const [onFocusAndBlur,setOnFocusAndBlur]=useState(false)

  const goBack = () => {
    navigation.goBack();
  };
  const onFocusandBlur=(event)=>{
    setTextInputdetails((prevValues)=>({...prevValues,onFocus:''}))

  }
  const onContentSizeChanges = event => {
    120 > contentSize &&
    contentSize < 120 &&setContentSize(event.nativeEvent.contentSize.height);
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
          backgroundColor: 'blue',
        }}>
         
        <View style={styles.inputTextContainer}>
          
          <View style={styles.inputPrefixIconAndTextInputContainer}>
            <TouchableOpacity style={styles.inputPrefixIcon}>
              <Icon name="emoji-emotions" size={28} color="gray" />
            </TouchableOpacity>
            <TextInput
              numberOfLines={3}
              onContentSizeChange={onContentSizeChanges}
              multiline={true}
              placeholder="Message"
              placeholderTextColor={'black'}
              onFocus={(e)=>{console.log('focused');}}
              on={()=>console.log('unfocused')}
              // onBlur={()=>{console.log('blured');}}
              style={[
                styles.textInputStyle,
                {height: Math.max(55,contentSize)},
              ]}
            />
            <TouchableOpacity activeOpacity={0.8} style={styles.suffixIcon}>
              <Icon name="attach-file" size={25} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.suffixIcon}>
              <Icon name="camera-alt" size={25} color="gray" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.micContainer}>
            <Icon name="mic" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputTextContainer: {
    position: 'absolute',
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
    padding: 6,
    marginBottom: 5,
    // height:30,
    // width:30,
    //flex:.16
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
export default Chatting;
