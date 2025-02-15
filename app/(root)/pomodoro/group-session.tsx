import Avatar from '@/components/Avatar'
import {ThemedText} from '@/components/ThemedText'
import {ThemedView} from '@/components/ThemedView'
import {Colors} from '@/constants/Colors'
import {useActiveSession} from '@/context/PomodoroContext'
import {useUser} from '@/context/UserContext'
import {session_participants} from '@/data/pomodoro-participant.data'
import {statusColor} from '@/hooks/usePomodoroCycle'
import {cn} from '@/libs/cn'
import {formatDuration} from '@/utils/formatDuration'
import {AntDesign, FontAwesome, Ionicons} from '@expo/vector-icons'
import {router} from 'expo-router'
import React, {useEffect} from 'react'
import {Alert, Image, ImageBackground, Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native'

function GroupSession () {
  const {pomodoro, activeSession, endSession} = useActiveSession()
  const {data} = useUser()

  const userCreatedSession = pomodoro?.creator.id === data.id

  if(pomodoro)
    return (
      <ThemedView lightColor={`${statusColor[activeSession.status] + 'ea'}`} className='flex-1'>
        <SafeAreaView className='relative flex-1'>
          <Pressable onPress={() => router.back()} className='active:opacity-50 absolute top-[60px] left-[10px] z-10'>
            <Ionicons name="chevron-back" size={29} color={"#3B82F6"} />
          </Pressable>
          <View className='flex-1 flex-row items-end '>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerClassName=' h-[180px] px-4 py-4 gap-2'
            >
              {session_participants.map(participant => {
                return (
                  <View key={participant.id} className='rounded-xl overflow-hidden bg-white w-[140px] h-[140px] border border-slate-200'>
                    <ImageBackground source={participant.callImg} className='w-full h-full object-cover relative px-2 py-2 justify-between items-start'>
                      <View></View>
                      <View className='bg-slate-700/40 rounded-2xl w-fit flex-row items-center gap-1 pr-3'>
                        <Avatar name={participant.name} size={25} />
                        <Text className='capitalize text-white text-sm'>{participant.name}</Text>
                      </View>
                    </ImageBackground>
                  </View>
                )
              })}
            </ScrollView>
          </View>
          <View className='flex-[1.8] items-center'>
            <ThemedText className='!text-[90px] !leading-[95px] font-light mt-12' lightColor='#ffffff'>{formatDuration(activeSession.time)}</ThemedText>
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
            {userCreatedSession ?
              <View className='flex-row items-center justify-center gap-5 mt-[50px]'>
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
                    Alert.alert("Leave Session", "Are you sure?", [
                      {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                      },
                      {
                        text: 'Leave', onPress: () => {
                          endSession()
                          router.back()
                        }, style: 'default'
                      },
                    ])
                  }}>
                    <Text className='text-white'>End</Text>
                  </Pressable>}
              </View>
              :

              <View className='flex-row items-center justify-center gap-5 mt-[50px]'>
                <Pressable className='border border-white w-[140px] h-[50px] rounded-2xl items-center justify-center active:opacity-60'
                  onPress={() => {
                    Alert.alert("Leave Session", "Are you sure?", [
                      {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                      },
                      {
                        text: 'Leave', onPress: () => {
                          endSession()
                          router.back()
                        }, style: 'default'
                      },
                    ])
                  }}
                >
                  <Text className='text-white font-semibold text-lg'>Leave</Text>
                </Pressable>
              </View>
            }


          </View>
        </SafeAreaView>
      </ThemedView>

    )
  return <></>
}

export default GroupSession