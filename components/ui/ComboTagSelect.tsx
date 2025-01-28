import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';

const ComboBoxWithTags = () => {
  const [query, setQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const options = ['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple'];

  const handleSelect = (item: string) => {
    if(!selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleRemove = (item: string) => {
    setSelectedItems(selectedItems.filter((selected) => selected !== item));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Fruits:</Text>
      <TextInput
        style={styles.input}
        value={query}
        onChangeText={setQuery}
        placeholder="Type to search..."
      />

      <ScrollView style={styles.optionsContainer}>
        {options.filter((option) => option.toLowerCase().includes(query.toLowerCase())).map((option, index) => (
          <TouchableOpacity key={index} onPress={() => handleSelect(option)} style={styles.option}>
            <Text>{option}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.tagsContainer}>
        {selectedItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.tag} onPress={() => handleRemove(item)}>
            <Text style={styles.tagText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    marginBottom: 10,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  optionsContainer: {
    maxHeight: 150,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  tag: {
    backgroundColor: '#3b82f6',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    margin: 5,
  },
  tagText: {
    color: '#fff',
  },
});

export default ComboBoxWithTags;
