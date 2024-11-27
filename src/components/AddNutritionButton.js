import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const AddNutritionButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Add Nutrition</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  text: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default AddNutritionButton;