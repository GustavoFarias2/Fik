import React from 'react';

import { StatusBar } from 'react-native';
import theme from './assets/theme';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

class App extends React.Component {

  render() {
    return (
      <>
        <StatusBar barStyle='light-content' animated={true} />

        <NavigationContainer theme={theme}>
          <Routes />
        </NavigationContainer>
      </>
    )
  }
}

export default App;
