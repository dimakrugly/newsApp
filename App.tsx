/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {User, onAuthStateChanged} from 'firebase/auth';
import {Login} from './src/screens/Login/Login.tsx';
import {FIREBASE_AUTH} from './firebaseConfig.ts';
import {HomeScreen} from './src/screens/HomeScreen/HomeScreen.tsx';

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, usr => {
      setUser(usr);
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {user ? (
          <Stack.Screen name='HomeScreen' component={HomeScreen} />
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
