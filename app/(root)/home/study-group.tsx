import ParallaxScrollView from '@/components/ParallaxScrollView'
import {ThemedText} from '@/components/ThemedText'
import {ThemedView} from '@/components/ThemedView'
import {Stack} from 'expo-router'
import React from 'react'
import {View} from 'react-native'

function StudyGroupScreen () {
  return (
    <ParallaxScrollView>
      <Stack.Screen options={{title: "Study Groups", headerShown: true}} />
      <View className='flex-1'>
        <ThemedText>Study Group Screen</ThemedText>
      </View>
    </ParallaxScrollView>
  )
}

export default StudyGroupScreen