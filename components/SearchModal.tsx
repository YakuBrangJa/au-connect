import {ThemedView} from '@/components/ThemedView'
import SearchInput, {SearchInputProps} from '@/components/ui/SearchInput'
import ThemedTextInput from '@/components/ui/ThemedTextInput'
import React, {ReactNode, useEffect, useRef} from 'react'
import {Animated, KeyboardAvoidingView, Platform, Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import {router} from 'expo-router'

interface Props {
  searchFieldProps?: SearchInputProps
  children?: ReactNode
}

function SearchModal ({searchFieldProps, children}: Props) {

  const inputWidth = useRef(new Animated.Value(40)).current; // Start small

  useEffect(() => {
    Animated.timing(inputWidth, {
      toValue: 1, // This will be scaled dynamically
      duration: 300,
      useNativeDriver: false, // `width` animation doesn't support native driver
    }).start();
  }, []);


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <SafeAreaView>
        <ThemedView className='h-full'>
          <View className='pl-1.5 pr-5 pb-2.5 pt-4 flex-row items-center gap-2 border-b border-gray-200'>
            <Pressable onPress={() => router.back()} className='active:opacity-50'>
              <Ionicons name="chevron-back" size={28} color="#494949" />
            </Pressable>
            <SearchInput {...searchFieldProps} />
          </View>
          <ScrollView
            contentContainerClassName='pb-2'
            keyboardShouldPersistTaps="handled"
            contentInsetAdjustmentBehavior="automatic"
          >
            {children}
          </ScrollView>
        </ThemedView>
      </SafeAreaView >
    </KeyboardAvoidingView>
  )
}

export default SearchModal