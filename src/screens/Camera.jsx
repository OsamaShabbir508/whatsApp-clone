// import { useIsFocused } from "@react-navigation/native";
// import React, { useEffect } from "react";
// import { View } from "react-native";
// import {launchCamera} from 'react-native-image-picker';


// const Camera=({navigation})=>{
//     const focused=useIsFocused();

//     useEffect(()=>{
//         console.log(focused,'focus from camera screen');
//         focused&&open()
//     },[focused])
//     // const focused=useIsFocused();
//     const open=async()=>{
//        // const result = await launchCamera({presentationStyle:'fullScreen',mediaType:'photo'});
//         const res = await launchCamera({
//             presentationStyle: 'fullScreen',
//             mediaType: 'photo',
//           });
//           console.log(res);
//           navigation.jumpTo('chats')
    
//    }
//     // useEffect(()=>{
//     //     open()
//     // },[])
//    // focused&&open()
    


//     return(
//         <View>

//         </View>
//     )
//     }
// export default Camera;
