import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import SummaryScreen from '../screens/SummaryScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AddNutritionScreen from '../screens/AddNutritionScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Summary" component={SummaryStack}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const SummaryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Summary" component={SummaryScreen} />
      <Stack.Screen name="AddNutrition" component={AddNutritionScreen}
        options={{
          presentation: 'modal', // This makes it appear as a sheet (iOS style)
          headerShown: true, // Show a header for the modal if needed
          title: 'Add Nutrition', // Set the modal's title
        }}
      />
    </Stack.Navigator>
  );
};

export default TabNavigator;