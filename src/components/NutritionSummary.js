import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NutritionSummary = ({ title, data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {data.map((item, index) => (
        <Text key={index} style={styles.item}>{item}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  item: {
    fontSize: 16,
    marginBottom: 2,
  },
});

export default NutritionSummary;