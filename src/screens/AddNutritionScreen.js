import React, { useState, useLayoutEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    ScrollView,
    TouchableOpacity,
    Modal,
    FlatList,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddNutritionScreen = ({ navigation }) => {
    const [mealName, setMealName] = useState('');

    const [protein, setProtein] = useState('');
    const [proteinQuantity, setProteinQuantity] = useState(0);

    const [vegetable, setVegetable] = useState('');
    const [vegetableQuantity, setVegetableQuantity] = useState(0);

    const [carbohydrate, setCarbohydrate] = useState('');
    const [carbohydrateQuantity, setCarbohydrateQuantity] = useState(0);

    const [fruit, setFruit] = useState('');
    const [fruitQuantity, setFruitQuantity] = useState(0);

    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());

    const [pickerData, setPickerData] = useState([]);
    const [currentPicker, setCurrentPicker] = useState('');
    const [pickerVisible, setPickerVisible] = useState(false);
    const [datePickerVisible, setDatePickerVisible] = useState(false);
    const [timePickerVisible, setTimePickerVisible] = useState(false);

    const handleSubmit = () => {
        console.log({
            mealName,
            protein,
            proteinQuantity,
            vegetable,
            vegetableQuantity,
            carbohydrate,
            carbohydrateQuantity,
            fruit,
            fruitQuantity,
        });

        navigation.goBack();
    };

    useLayoutEffect(() => {
        navigation.getParent()?.setOptions({
            tabBarStyle: { display: 'none' },
        });

        return () =>
            navigation.getParent()?.setOptions({
                tabBarStyle: { display: 'flex' },
            });
    }, [navigation]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <Button onPress={handleSubmit} title="Add" />,
            headerLeft: () => <Button onPress={() => navigation.goBack()} title="Cancel" />,
        });
    }, [navigation, handleSubmit]);

    const openPicker = (data, field) => {
        setPickerData(data);
        setCurrentPicker(field);
        setPickerVisible(true);
    };

    const closePicker = () => {
        setPickerVisible(false);
    };

    const openDatePicker = () => setDatePickerVisible(true);
    const closeDatePicker = () => setDatePickerVisible(false);

    const openTimePicker = () => setTimePickerVisible(true);
    const closeTimePicker = () => setTimePickerVisible(false);


    const handleItemSelect = (item) => {
        if (currentPicker === 'protein') setProtein(item);
        if (currentPicker === 'vegetable') setVegetable(item);
        if (currentPicker === 'carbohydrate') setCarbohydrate(item);
        if (currentPicker === 'fruit') setFruit(item);

        closePicker();
    };

    const InputWithPickerAndNumber = ({
        label,
        pickerOptions,
        selectedValue,
        setSelectedValue,
        quantity,
        setQuantity,
        fieldName,
    }) => {
        const increment = () => setQuantity(quantity + 1);
        const decrement = () => {
            if (quantity > 0) setQuantity(quantity - 1);
        };

        return (
            <View>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.inputRow}>
                    <TouchableOpacity
                        onPress={() => openPicker(pickerOptions, fieldName)}
                        style={styles.pickerButton}
                    >
                        <Text style={styles.pickerText}>{selectedValue || `Select ${label}`}</Text>
                    </TouchableOpacity>
                    <View style={styles.numberInputContainer}>
                        <TouchableOpacity onPress={decrement} style={styles.button}>
                            <Text style={styles.buttonText}>-</Text>
                        </TouchableOpacity>
                        <TextInput
                            style={styles.numberInput}
                            value={String(quantity)}
                            onChangeText={(text) => setQuantity(Number(text))}
                            keyboardType="numeric"
                        />
                        <TouchableOpacity onPress={increment} style={styles.button}>
                            <Text style={styles.buttonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.label}>Meal Name:</Text>
            <TextInput
                style={styles.input}
                value={mealName}
                onChangeText={setMealName}
                placeholder="Enter meal name"
            />

            {/* Date Picker */}
            <Text style={styles.label}>Date:</Text>
            <TouchableOpacity onPress={openDatePicker} style={styles.pickerButton}>
                <Text style={styles.pickerText}>{date.toLocaleDateString()}</Text>
            </TouchableOpacity>

            {/* Time Picker */}
            <Text style={styles.label}>Time:</Text>
            <TouchableOpacity onPress={openTimePicker} style={styles.pickerButton}>
                <Text style={styles.pickerText}>{time.toLocaleTimeString()}</Text>
            </TouchableOpacity>


            <InputWithPickerAndNumber
                label="Protein (grams)"
                pickerOptions={['Chicken', 'Fish', 'White Egg']}
                selectedValue={protein}
                setSelectedValue={setProtein}
                quantity={proteinQuantity}
                setQuantity={setProteinQuantity}
                fieldName="protein"
            />

            <InputWithPickerAndNumber
                label="Vegetables (grams)"
                pickerOptions={['บวม', 'มะระ', 'ขิง', 'เห็ดหูหนู', 'พริกหนุ่ม', 'แตงกวา']}
                selectedValue={vegetable}
                setSelectedValue={setVegetable}
                quantity={vegetableQuantity}
                setQuantity={setVegetableQuantity}
                fieldName="vegetable"
            />

            <InputWithPickerAndNumber
                label="Carbohydrate (grams)"
                pickerOptions={['ข้าวสวย', 'หมี่ขาว', 'เส้นบุก']}
                selectedValue={carbohydrate}
                setSelectedValue={setCarbohydrate}
                quantity={carbohydrateQuantity}
                setQuantity={setCarbohydrateQuantity}
                fieldName="carbohydrate"
            />

            <InputWithPickerAndNumber
                label="ผลไม้ (grams)"
                pickerOptions={['สับปะรด', 'สาลี่', 'ส้มโอ']}
                selectedValue={fruit}
                setSelectedValue={setFruit}
                quantity={fruitQuantity}
                setQuantity={setFruitQuantity}
                fieldName="fruit"
            />

            {/* Date Picker Modal */}
            <Modal visible={datePickerVisible} transparent={true} animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        {/* Modal Header */}
                        <View style={styles.modalHeader}>
                            <TouchableOpacity onPress={closeDatePicker} style={styles.cancelButton}>
                                <Text style={styles.cancelButtonText}>Cancel</Text>
                            </TouchableOpacity>
                            <Text style={styles.modalTitle}>Select Date</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    closeDatePicker();
                                }}
                                style={styles.setButton}
                            >
                                <Text style={styles.setButtonText}>Set</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Date Picker Component */}
                        <DateTimePicker
                            value={date}
                            mode="date"
                            display="spinner"
                            onChange={(event, selectedDate) => {
                                if (selectedDate) setDate(selectedDate);
                            }}
                        />
                    </View>
                </View>
            </Modal>

            {/* Time Picker Modal */}
            <Modal visible={timePickerVisible} transparent={true} animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        {/* Modal Header */}
                        <View style={styles.modalHeader}>
                            <TouchableOpacity onPress={closeTimePicker} style={styles.cancelButton}>
                                <Text style={styles.cancelButtonText}>Cancel</Text>
                            </TouchableOpacity>
                            <Text style={styles.modalTitle}>Select Time</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    closeTimePicker();
                                }}
                                style={styles.setButton}
                            >
                                <Text style={styles.setButtonText}>Set</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Time Picker Component */}
                        <DateTimePicker
                            value={time}
                            mode="time"
                            display="spinner"
                            onChange={(event, selectedTime) => {
                                if (selectedTime) setTime(selectedTime);
                            }}
                        />
                    </View>
                </View>
            </Modal>

            {/* Picker Modal */}
            <Modal visible={pickerVisible} transparent={true} animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        {/* Modal Header with Title and Close Button */}
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>Select an Option</Text>
                            <TouchableOpacity onPress={closePicker} style={styles.closeButton}>
                                <Text style={styles.closeButtonText}>✕</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={pickerData}
                            keyExtractor={(item) => item}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.modalItem}
                                    onPress={() => handleItemSelect(item)}
                                >
                                    <Text style={styles.modalItemText}>{item}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
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
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    pickerButton: {
        flex: 1,
        padding: 12,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        justifyContent: 'center',
    },
    pickerText: {
        fontSize: 16,
        color: '#555',
    },
    numberInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
    },
    numberInput: {
        width: 50,
        textAlign: 'center',
        fontSize: 16,
        paddingVertical: 8,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#ccc',
    },
    button: {
        padding: 10,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 16,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        height: '50%',
    },
    modalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        flex: 1,
        textAlign: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#eee',
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    modalItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    modalItemText: {
        fontSize: 16,
    },
});

export default AddNutritionScreen;