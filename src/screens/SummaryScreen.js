import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import NutritionSummary from '../components/NutritionSummary';
import AddNutritionButton from '../components/AddNutritionButton';

const SummaryScreen = ({ navigation }) => {
  const nutritionData = useSelector((state) => state.nutrition.nutritionData);

  const groupedData = {
    day: nutritionData.slice(-1),
    week: nutritionData.slice(-7),
    month: nutritionData.slice(-30),
  };

  return (
    <View style={styles.container}>
      <AddNutritionButton onPress={() => navigation.navigate('AddNutrition')} />
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