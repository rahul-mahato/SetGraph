import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme
import {
  GluestackUIProvider,
  SafeAreaView,
  StatusBar,
} from '@gluestack-ui/themed';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Homepage } from './screens';

function App(): React.JSX.Element {
  return (
    <GluestackUIProvider colorMode="dark" config={config}>
      <Provider store={store}>
        <SafeAreaView flex={1}>
          <StatusBar backgroundColor={config.tokens.colors.darkBlue900} />
          <Homepage />
        </SafeAreaView>
      </Provider>
    </GluestackUIProvider>
  );
}

export default App;
