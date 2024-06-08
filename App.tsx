import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import {Navigator} from './src/navigator/Navigator.tsx';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {setupStore} from './src/store/store.ts';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const store = setupStore();

  return (
    <GestureHandlerRootView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Provider store={store}>
        <Navigator />
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
