import {ThemedText} from '@/components/ThemedText'
import Button from '@/components/ui/Button'
import {cover_images} from '@/constants/cover_images'
import {CardShadow} from '@/constants/Shadows'
import {cn} from '@/libs/cn'
import {format} from 'date-fns'
import {router} from 'expo-router'
import React, {ComponentProps} from 'react'
import {Image, ImageBackground, Pressable, Text, View} from 'react-native'
import {CalendarIcon, ClockIcon, MapPinIcon, UserGroupIcon} from 'react-native-heroicons/micro'

function GroupCard ({group, onViewGroup}: {
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
  onViewGroup?: () => void
}) {
  return (
    <View
      style={{
        ...CardShadow,
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.8,
        shadowRadius: 8,
      }}
      className='rounded-2xl'
    >
      <View className='bg-black rounded-2xl'>
        <Pressable className='rounded-2xl overflow-hidden active:opacity-90' onPress={onViewGroup}>
          <View className='h-[100px] bg-primary/10 relative'>
          <ImageBackground source={group.coverURL} className='w-full h-full object-cover justify-end relative '>
              <ThemedText type='defaultSemiBold' className='z-10 !text-[16px] !text-white mb-2 ml-4'>{group.title}</ThemedText>
              <View className='absolute w-full h-full bg-black opacity-25 top-0'></View>
          </ImageBackground>
          <View className='py-[3px] px-3 rounded-2xl bg-primary/90 absolute right-3 top-3'>
              <Text className='text-white text-sm font-semibold'>{group.participantCount || 0}{group.participantLimit ? `/${group.participantLimit}` : ''}</Text>
          </View>
        </View>
        <View className=' bg-white p-3'>
            <View className='gap-1'>
              <View className='flex-row gap-1.5 items-center '>
                <MapPinIcon color={'#7C8BA1'} size={15} />
                <ThemedText lightColor='#6B7280' className='!text-sm'>{group.location}</ThemedText>
              </View>
              <View className='flex-row gap-1.5 items-center ml-[1px]'>
                <CalendarIcon color={'#7C8BA1'} size={15} />
                <ThemedText lightColor='#6B7280' className='!text-sm mr-2'>{format(group.time, 'EEE, dd MMM yyyy, hh:mm a')}</ThemedText>

              </View>
            </View>
            <View className='flex-row gap-2 mt-4'>
              {group.category.map(category => (
                <View key={category} className='py-[4px] px-3 rounded-2xl bg-primary/10 '>
                  <Text className='text-primary font-medium capitalize'>{category}</Text>
                </View>
              ))}
            </View>
        </View>
        </Pressable>
      </View>
    </View>
  )
}

export default GroupCard
