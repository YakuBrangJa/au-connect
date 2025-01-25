import {ThemedText} from '@/components/ThemedText'
import {ThemedView} from '@/components/ThemedView'
import {router} from 'expo-router'
import React from 'react'
import {Pressable, SafeAreaView, Text} from 'react-native'

function MessagePage () {
  return (
    <ThemedView className='flex-1'>
      <SafeAreaView>

        <ThemedText>Message Page</ThemedText>
        <Pressable onPress={() => router.push('/(root)/messages/chat')}>
          <Text>Go to Chat</Text>
        </Pressable>
      </SafeAreaView>
    </ThemedView>
  )
}

export default MessagePage