import ParallaxScrollView from '@/components/ParallaxScrollView'
import {ThemedText} from '@/components/ThemedText'
import {Stack} from 'expo-router'
import React from 'react'
import {View} from 'react-native'

function ChatScreen () {
  return (
    <ParallaxScrollView>
      <Stack.Screen options={{title: "Chat", headerShown: true}} />
      <View className='flex-1'>
        <ThemedText>Chat page</ThemedText>
      </View>
    </ParallaxScrollView>
  )
}

export default ChatScreen