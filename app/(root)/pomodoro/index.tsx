import PomodoroCard from '@/components/PomodoroCard'
import PomodoroCreateModal from '@/components/PomodoroCreateModal'
import {ThemedText} from '@/components/ThemedText'
import {ThemedView} from '@/components/ThemedView'
import TextButton from '@/components/ui/TextButton'
import {Colors} from '@/constants/Colors'
import {CardShadow} from '@/constants/Shadows'
import pomodoroSessions from '@/data/pomodoro.data'
import {AntDesign} from '@expo/vector-icons'
import {router} from 'expo-router'
import React from 'react'
import {Platform, Pressable, ScrollView, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

function PomodoroPage () {

  return (
    <ThemedView className='flex-1'>
      <SafeAreaView className='flex-1'>
        <View className='p-4 flex-row justify-between items-center'>
          <ThemedText type='title'>Pomodoro</ThemedText>
        </View>
        <ScrollView
          style={Platform.select({
            ios: {
              marginBottom: 50
            },
            android: {
              paddingBottom: 10
            }
          })}
          contentContainerClassName='flex-wrap p-4 px-6 gap-[12px] pb-[14px]'
        >
          <View className='w-full'>
            <View className=' flex-row justify-between items-center'>
              <ThemedText type='defaultSemiBold'>My Session</ThemedText>
            </View>
            <View style={{
              ...CardShadow,
            }}>
              <PomodoroCreateModal />
            </View>
          </View>
          <View className='mt-5'>
            <View className=' flex-row justify-between items-center'>
              <ThemedText type='defaultSemiBold'>Live Sessions</ThemedText>
            </View>
            <View
              className='py-4 gap-3'
            >
              {pomodoroSessions.map(session => (
                <PomodoroCard key={session.title} pomodoro={session} />
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  )
}

export default PomodoroPage