import {ThemedText} from '@/components/ThemedText'
import {ThemedView} from '@/components/ThemedView'
import React from 'react'
import {Pressable, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

function PomodoroPage () {

  return (
    <ThemedView className='flex-1'>
      <SafeAreaView className='flex-1'>
        <View className='p-4 flex-row justify-between items-center'>
          <ThemedText type='title'>Pomodoro</ThemedText>

        </View>
      </SafeAreaView>
    </ThemedView>
  )
}

export default PomodoroPage