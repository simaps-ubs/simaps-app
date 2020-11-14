import React from 'react';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import {createStackNavigator} from '@react-navigation/stack';

const Auth = createStackNavigator();

function AuthRoutes() {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#0C1EBB'},
      }}
      initialRouteName="SignIn">
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  );
}

export default AuthRoutes;
