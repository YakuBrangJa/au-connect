import ParallaxScrollView from '@/components/ParallaxScrollView'
import {ThemedText} from '@/components/ThemedText'
import {ThemedView} from '@/components/ThemedView'
import TextButton from '@/components/ui/TextButton'
import {router} from 'expo-router'
import React from 'react'
import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from 'react-native'

function Index () {
  return (
    <ParallaxScrollView>
      <SafeAreaView>
        <View className='mt-6'>
          <View className='px-6 flex-row justify-between items-center'>
            <ThemedText type='defaultSemiBold'>Study groups</ThemedText>
            <TextButton onPress={() => router.navigate("/index")}>See more</TextButton>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerClassName=' px-4 gap-3 mt-4'
          >
            <View className='w-[200px] h-[150px] bg-gray-200 rounded-xl'></View>
            <View className='w-[200px] h-[150px] bg-gray-200 rounded-xl'></View>
            <View className='w-[200px] h-[150px] bg-gray-200 rounded-xl'></View>
            <View className='w-[200px] h-[150px] bg-gray-200 rounded-xl'></View>
            <View className='w-[200px] h-[150px] bg-gray-200 rounded-xl'></View>
          </ScrollView>
        </View>

        <View className='mt-6'>
          <View className='px-6 flex-row justify-between items-center'>
            <ThemedText type='defaultSemiBold'>Hangout groups</ThemedText>
            <TextButton>See more</TextButton>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerClassName=' px-4 gap-3 mt-4'
          >
            <View className='w-[200px] h-[150px] bg-gray-200 rounded-xl'></View>
            <View className='w-[200px] h-[150px] bg-gray-200 rounded-xl'></View>
            <View className='w-[200px] h-[150px] bg-gray-200 rounded-xl'></View>
            <View className='w-[200px] h-[150px] bg-gray-200 rounded-xl'></View>
            <View className='w-[200px] h-[150px] bg-gray-200 rounded-xl'></View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </ParallaxScrollView>
  )
}

export default Index