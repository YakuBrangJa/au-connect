import {ThemedText} from '@/components/ThemedText'
import React from 'react'
import {GestureResponderEvent, Image, Pressable, Text, View} from 'react-native'

interface Props {
  group: {
    id: string,
    title: string,
    time: Date,
    location: string,
    description: string,
    participantLimit?: number,
    participantCount?: number,
    category: string[]
    coverURL: any
  }
  onPress?: ((event: GestureResponderEvent) => void) | null
}

function JoinedGroupCard ({group, onPress}: Props) {
  return (
    <Pressable className='flex-row gap-3 py-1.5 px-3 items-center active:bg-gray-200' onPress={onPress} >
      <View>
        <Image source={group.coverURL} className='w-[60px] h-[60px] rounded-xl border border-gray-200' />
      </View>
      <View className=''>
        <ThemedText type='defaultSemiBold'>{group.title}</ThemedText>
        <ThemedText className='!text-[14px] !text-gray-500'>{group.participantCount} participants</ThemedText>
      </View>
    </Pressable>
  )
}

export default JoinedGroupCard