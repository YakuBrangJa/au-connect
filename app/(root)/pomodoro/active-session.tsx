import {ThemedText} from '@/components/ThemedText'
import {ThemedView} from '@/components/ThemedView'
import {Colors} from '@/constants/Colors'
import {useActiveSession} from '@/context/PomodoroContext'
import {statusColor} from '@/hooks/usePomodoroCycle'
import {cn} from '@/libs/cn'
import {formatDuration} from '@/utils/formatDuration'
import {AntDesign, FontAwesome, Ionicons} from '@expo/vector-icons'
import {router} from 'expo-router'
import React, {useEffect} from 'react'
import {Alert, Pressable, SafeAreaView, Text, View} from 'react-native'

function ActiveSession () {
  const {pomodoro, activeSession, endSession} = useActiveSession()

  if(pomodoro)
    return (
      <ThemedView lightColor={`${statusColor[activeSession.status] + 'ea'}`} className='flex-1'>
        <SafeAreaView className='flex-1 items-center justify-center relative'>
          <Pressable onPress={() => router.back()} className='active:opacity-50 absolute top-[60px] left-[10px] z-10'>
            <Ionicons name="chevron-back" size={29} color={"#3B82F6"} />
          </Pressable>
          <ThemedText className='!text-[90px] !leading-[95px] font-light mt-8' lightColor='#ffffff'>{formatDuration(activeSession.time)}</ThemedText>
          <View className='flex-row items-center gap-2 mt-2'>
            <AntDesign name="hourglass" size={19} color={'#ffffff'} />
            <ThemedText className='!text-[20px] font-medium capitalize' lightColor='#ffffff'>{activeSession.status}</ThemedText>
          </View>
          <View className='flex-row items-center justify-center gap-1.5 mt-5'>
            {[...Array(pomodoro?.cycleCount)].map((_, index) => {
              return (
                <View key={index + 's'} className={cn("rounded-lg h-1 w-7 m-1", (activeSession.status !== 'idle' && (activeSession.cycles > (index))) ? "bg-slate-800" : 'bg-white')}></View>
              )
            })}
          </View>
          <View className='flex-row items-center justify-center gap-5 mt-[100px]'>
            {activeSession.status !== 'idle' &&
              <Pressable className={cn('size-[60px] rounded-full items-center justify-center active:opacity-70 bg-slate-100/20',)}
                onPress={() => {
                  if(activeSession.status === 'focus') {
                    activeSession.setStatus('break')
                    activeSession.setTime(pomodoro?.shortBreakDuration)
                  }
                  if(activeSession.status === 'break') {
                    activeSession.setStatus('focus')
                    activeSession.setTime(pomodoro?.focusDuration)
                    activeSession.setCycles(prev => prev + 1)
                  }
                }}
              >
                <Text className='text-white'>Skip</Text>
              </Pressable>}
            <Pressable className='size-[100px] border border-slate-50/70 rounded-full items-center justify-center active:opacity-70 bg-slate-200/15'
              onPress={() => {
                if(activeSession.status === 'idle') {
                  activeSession.setIsPause(false)
                  activeSession.setStatus('focus')
                } else activeSession.setIsPause(prev => !prev)
              }}
            >
              {activeSession.status === 'idle' && <ThemedText lightColor='#ffffff'>Start</ThemedText>}
              {(activeSession.status != 'idle' && activeSession.isPause) &&
                <FontAwesome name="play" size={34} color="white" className='ml-2' />
              }
              {(activeSession.status != 'idle' && !activeSession.isPause) &&
                <FontAwesome name="pause" size={34} color="white" className='' />
              }
            </Pressable>
            {activeSession.status !== 'idle' &&
              <Pressable className='size-[60px] rounded-full items-center justify-center active:opacity-70 bg-slate-100/20' onPress={() => {
                Alert.alert("End Session", "Are you sure?", [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {
                    text: 'End', onPress: () => {
                      endSession()
                      router.back()
                    }, style: 'default'
                  },
                ])

              }}>
                <Text className='text-white'>End</Text>
              </Pressable>}
          </View>
        </SafeAreaView>
      </ThemedView>

    )
  return <></>
}

export default ActiveSession