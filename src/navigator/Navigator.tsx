import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screen/home/Home.tsx';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
const Stack = createNativeStackNavigator<any>();

export const Navigator = () => {

    const navigationRef = useNavigationContainerRef()

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
