import React, { useLayoutEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { useSelector } from 'react-redux';
import NutritionSummary from '../components/NutritionSummary';

const SummaryScreen = ({ navigation }) => {
  const nutritionData = useSelector((state) => state.nutrition.nutritionData);

  const groupedData = {
    day: nutritionData.slice(-1),
    week: nutritionData.slice(-7),
    month: nutritionData.slice(-30),
  };

  // Set up the navigation bar with the Add Nutrition button
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate('AddNutrition')}
          title="Add"
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <NutritionSummary title="Today" data={groupedData.day} />
      <NutritionSummary title="This Week" data={groupedData.week} />
      <NutritionSummary title="This Month" data={groupedData.month} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default SummaryScreen;