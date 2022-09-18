import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Chatting from '../screens/Chatting';
import Contacts from '../screens/Contacts';
import Home from '../screens/Home';
import LandingPage from '../screens/Landing';
import NewGroup from '../screens/NewGroup';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{
        header:()=>null
    }}> 
    <Stack.Screen name='LandingPage' component={LandingPage}  />
      <Stack.Screen  name="Home" component={Home} />
      <Stack.Screen name="Chatting" component={Chatting} />
      <Stack.Screen name='Contacts' component={Contacts}/>
      <Stack.Screen name='Newgroup' component={NewGroup}/>
    </Stack.Navigator>
  );
};
export default HomeStack;
