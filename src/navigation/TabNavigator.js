import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SummaryScreen from '../screens/SummaryScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Summary" component={SummaryScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;