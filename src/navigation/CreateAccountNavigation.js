import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import CreateScreen from '../screens/CreateAccount/Create';
import ImportScreen from '../screens/CreateAccount/Import';
import CustomImageBackground from '../components/CustomImageBackground';

const Tab = createMaterialTopTabNavigator();

export default function CreateAccountNavigation({ navigation }) {
  const {
    state: {
      params: { route },
    },
  } = navigation;
  const { goBack } = navigation;
  return (
    <CustomImageBackground>
      <NavigationContainer>
        <Tab.Navigator initialRouteName={route}>
          <Tab.Screen name="Create">
            {() => <CreateScreen cancel={goBack} />}
          </Tab.Screen>
          <Tab.Screen name="Import">
            {() => <ImportScreen cancel={goBack} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </CustomImageBackground>
  );
}
