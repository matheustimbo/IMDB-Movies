import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';
import Movie from './Movie';

import {NavigationContainer} from '@react-navigation/native';
import {AppProvider} from '../providers/AppProvider';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Movie" component={Movie} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
