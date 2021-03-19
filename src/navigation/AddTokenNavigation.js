import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SearchTokenScreen from '../screens/AddTokens/SearchToken';
import CustomTokenScreen from '../screens/AddTokens/CustomToken';
import CustomImageBackground from '../components/CustomImageBackground';

const Tab = createMaterialTopTabNavigator();

export default function AddTokenNavigation({ toggle }) {
  return (
    <CustomImageBackground>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Search Token">
            {() => <SearchTokenScreen toggle={toggle} />}
          </Tab.Screen>
          <Tab.Screen name="Custom Token">
            {() => <CustomTokenScreen toggle={toggle} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </CustomImageBackground>
  );
}
