import React, {useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {View, Text, StyleSheet} from 'react-native';

const SelectDropdown = () => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <View>
      <Text style={styles.label}>Select a Fruit:</Text>
      <RNPickerSelect
        onValueChange={(value) => setSelectedValue(value)}
        items={[
          {label: 'Apple', value: 'apple'},
          {label: 'Banana', value: 'banana'},
          {label: 'Orange', value: 'orange'},
        ]}
      />
      <Text>Selected: {selectedValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default SelectDropdown;
