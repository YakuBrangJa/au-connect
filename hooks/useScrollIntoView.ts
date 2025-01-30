import React, {useRef} from 'react'
import {ScrollView, TextInput} from 'react-native';

function useScrollIntoView () {
  const scrollViewRef = useRef<ScrollView>(null);


  const scrollToInput = (input: TextInput | null) => {
    if(!input || !scrollViewRef.current) return;

    input.measureLayout(
      scrollViewRef.current,
      (x: number, y: number) => {
        scrollViewRef.current?.scrollTo({
          x: 0,
          y: y - 300, // Adjust offset as needed
          animated: true,
        });
      },
      (error) => console.warn('Failed to measure layout:', error)
    );
  };

  return {
    scrollViewRef,
    scrollToInput,
  }
}

export default useScrollIntoView