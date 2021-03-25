import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as SCREENS from './Screens';

const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={SCREENS.HomeScreen}
      options={{
        headerTitle: 'Rick and Morty APP',
        headerTitleAlign: 'center',
      }}
    />
    <Stack.Screen
      name="CharacterInfo"
      component={SCREENS.CharacterInforScreen}
    />
    <Stack.Screen
      name="EpisodeInfo"
      component={SCREENS.EpisodeInfoScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);
const Router = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
export default Router;
