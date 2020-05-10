import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#7159c1'},
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{title: 'Signin'}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{title: 'Signup'}}
      />
    </Stack.Navigator>
  );
}
