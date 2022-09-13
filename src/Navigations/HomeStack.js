import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Chatting from '../screens/Chatting';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{
        header:()=>null
    }}> 
      <Stack.Screen  name="Home" component={Home} />
      <Stack.Screen name="Chatting" component={Chatting} />
    </Stack.Navigator>
  );
};
export default HomeStack;
