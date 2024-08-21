import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Homepage, Splitform } from '../screens';
import { SCREEN_NAMES } from '../constants';
import SplitDetail from '../screens/SplitDetail';
import ExerciseForm from '../screens/Forms/ExerciseForm';

export type RootStackParamList = {
  Home: undefined;
  SplitForm: undefined;
  SplitDetail: {
    splitId: number;
  };
  ExerciseForm: {
    splitId: number;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <Stack.Group>
          <Stack.Screen name={'Home'} component={Homepage} />
          <Stack.Screen name="SplitDetail" component={SplitDetail} />
          <Stack.Group>
            <Stack.Screen name={'SplitForm'} component={Splitform} />
            <Stack.Screen name="ExerciseForm" component={ExerciseForm} />
          </Stack.Group>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
