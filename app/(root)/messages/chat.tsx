import ParallaxScrollView from '@/components/ParallaxScrollView'
import {ThemedText} from '@/components/ThemedText'
import {Stack} from 'expo-router'
import React from 'react'
import {ScrollView, View} from 'react-native'

function ChatScreen () {
  return (
    <ScrollView>
      <Stack.Screen options={{title: "Chat", headerShown: true}} />
      <View className='flex-1'>
        <ThemedText>Chat page</ThemedText>
      </View>
    </ScrollView>
  )
}

export default ChatScreen