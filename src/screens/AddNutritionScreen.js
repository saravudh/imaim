import React, { useState, useLayoutEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const AddNutritionScreen = ({ navigation }) => {
  const [mealName, setMealName] = useState('');
  const [protein, setProtein] = useState('');
  const [oil, setOil] = useState('');
  const [vegetable, setVegetable] = useState('');
  const [water, setWater] = useState('');
  const [carbohydrate, setCarbohydrate] = useState('');
  const [fruit, setFruit] = useState('');

  const handleSubmit = () => {
    // Add your logic to save the nutrition data
    console.log({
      mealName,
      protein,
      oil,
      vegetable,
      water,
      carbohydrate,
      fruit,
    });

    // Navigate back to the summary screen
    navigation.goBack();
  };

  useLayoutEffect(() => {
    // Hide the TabBar when this screen is active
    navigation.getParent()?.setOptions({
      tabBarStyle: { display: 'none' },
    });

    // Show the TabBar again when navigating back
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: { display: 'flex' },
      });
  }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={handleSubmit} title="Add" />
      ),
      headerLeft: () => (
        <Button onPress={() => navigation.goBack()} title="Cancel" />
      ),
    });
  }, [navigation, handleSubmit]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Meal Name:</Text>
      <TextInput
        style={styles.input}
        value={mealName}
        onChangeText={setMealName}
        placeholder="Enter meal name"
      />

      <Text style={styles.label}>Protein (grams):</Text>
      <Picker
        selectedValue={protein}
        onValueChange={(itemValue) => setProtein(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select Protein" value="" />
        <Picker.Item label="Chicken" value="Chicken" />
        <Picker.Item label="Fish" value="Fish" />
        <Picker.Item label="White Egg" value="White Egg" />
      </Picker>

      <Text style={styles.label}>Oil (teaspoons):</Text>
      <TextInput
        style={styles.input}
        value={oil}
        onChangeText={setOil}
        placeholder="Enter oil in teaspoons"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Vegetables (grams):</Text>
      <Picker
        selectedValue={vegetable}
        onValueChange={(itemValue) => setVegetable(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select Vegetable" value="" />
        <Picker.Item label="บวม" value="บวม" />
        <Picker.Item label="มะระ" value="มะระ" />
        <Picker.Item label="ขิง" value="ขิง" />
        <Picker.Item label="เห็ดหูหนู" value="เห็ดหูหนู" />
        <Picker.Item label="พริกหนุ่ม" value="พริกหนุ่ม" />
        <Picker.Item label="แตงกวา" value="แตงกวา" />
      </Picker>

      <Text style={styles.label}>Water (cc):</Text>
      <TextInput
        style={styles.input}
        value={water}
        onChangeText={setWater}
        placeholder="Enter water in cc"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Carbohydrate (grams):</Text>
      <Picker
        selectedValue={carbohydrate}
        onValueChange={(itemValue) => setCarbohydrate(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select Carbohydrate" value="" />
        <Picker.Item label="ข้าวสวย" value="ข้าวสวย" />
        <Picker.Item label="หมี่ขาว" value="หมี่ขาว" />
        <Picker.Item label="เส้นบุก" value="เส้นบุก" />
      </Picker>

      <Text style={styles.label}>ผลไม้ (grams):</Text>
      <Picker
        selectedValue={fruit}
        onValueChange={(itemValue) => setFruit(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select Fruit" value="" />
        <Picker.Item label="สับปะรด" value="สับปะรด" />
        <Picker.Item label="สาลี่" value="สาลี่" />
        <Picker.Item label="ส้มโอ" value="ส้มโอ" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  picker: {
    height: 40,
    marginBottom: 16,
  },
});

export default AddNutritionScreen;