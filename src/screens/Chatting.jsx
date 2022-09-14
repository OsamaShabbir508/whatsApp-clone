import React, {useState} from 'react';
import {
  StyleSheet,
  Keyboard,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
  View,
  Modal,
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
  const [onFocusAndBlur, setOnFocusAndBlur] = useState(false);
  const [showAattachment,setShowAttachment]=useState(false)
 const handleAttachmentModal=()=>setShowAttachment(!showAattachment)

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
          //  backgroundColor: 'blue',
        }}>
        <View style={styles.inputTextContainer}>
          <View style={styles.inputPrefixIconAndTextInputContainer}>
            <TouchableOpacity style={styles.inputPrefixIcon}>
              <Icon name="emoji-emotions" size={28} color={Color.grayCloud} />
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
              // onBlur={()=>{console.log('blured');}}
              style={[
                styles.textInputStyle,
                {height: Math.max(55, contentSize)},
              ]}
            />
            <TouchableOpacity onPress={handleAttachmentModal} activeOpacity={0.8} style={styles.suffixIcon}>
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
      </View>
      <SelectAttachment onPress={handleAttachmentModal} showAattachment={showAattachment}/>
    </View>
  );
};
const SelectAttachment = ({onPress,showAattachment}) => {
  
  return (
    <Modal transparent={true} visible={showAattachment}>
      <TouchableOpacity activeOpacity={.8} onPress={onPress} style={{height: '100%', width: '100%'}}>
        <TouchableOpacity
          activeOpacity={.9}
          style={{
            position: 'absolute',
            bottom: '9%',
            width: '95%',
            borderRadius:20,
            backgroundColor:'white',
            height: '35%',
            alignSelf:'center',
            flexDirection:'row',
            justifyContent:'space-around',
            flexWrap:'wrap',
            
            padding:20
          }}>
            <AttachmentOptions backgroundColor={'#6A0DAD'} iconName={'file-copy'} title='Document'/>
            <AttachmentOptions backgroundColor={'#F67280'} iconName={'camera-alt'} title='Document'/>
            <AttachmentOptions backgroundColor={'purple'} iconName={'image'} title='Document'/>
            <AttachmentOptions backgroundColor={'orange'} iconName={'headset'} title='Document'/>
            <AttachmentOptions backgroundColor={'#00A36C'} iconName={'location-pin'} title='Document'/>
            <AttachmentOptions backgroundColor={'#1589FF'} iconName={'person'} title='Document'/>
          </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};
const AttachmentOptions=({backgroundColor,iconName,title})=>{
  return(
    <View style={{
      justifyContent:'center',
      margin:'5%',
      //alignItems:'center'
    }}>
    <TouchableOpacity activeOpacity={.7} style={{
      padding:12,
      backgroundColor:`${backgroundColor}`,
      justifyContent:'center',
      width:50,
      borderRadius:60,

      alignItems:'center'
    }}>
      <Icon
      name={`${iconName}`}
      size={25}
      color='white'
      />
      

    </TouchableOpacity>
    <Text style={{color:'gray',marginTop:2,fontSize:13}}>{title}</Text>
    </View>
  )
}
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
    padding: 9,
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
