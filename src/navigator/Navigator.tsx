import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screen/home/Home.tsx';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {Post} from '../screen/post/Post.tsx';
import {RootStackParamList} from '../types/Navigator.ts';
import {NewPost} from '../screen/newPost/NewPost.tsx';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  const navigationRef = useNavigationContainerRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Post"
          component={Post}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewPost"
          component={NewPost}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
