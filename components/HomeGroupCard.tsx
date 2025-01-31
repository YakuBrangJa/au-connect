import {ThemedText} from '@/components/ThemedText'
import Button, {ButtonShadowProvider, buttonTextVariants} from '@/components/ui/Button'
import {Colors} from '@/constants/Colors'
import {cover_images} from '@/constants/cover_images'
import {CardShadow} from '@/constants/Shadows'
import {cn} from '@/libs/cn'
import {format} from 'date-fns'
import {router} from 'expo-router'
import React, {ComponentProps} from 'react'
import {GestureResponderEvent, Image, ImageBackground, Pressable, Text, View} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';


function HomeGroupCard ({className, group, onPressJoin, onPressLeave, onPress, isJoined}: {
  className?: string
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
  isJoined: boolean,
  onPressJoin?: ((event: GestureResponderEvent) => void) | null
  onPressLeave?: ((event: GestureResponderEvent) => void) | null
  onPress?: ((event: GestureResponderEvent) => void) | null
}) {
  return (
    <View className='bg-black rounded-[17px]'>
      <Pressable
        style={{
          ...CardShadow,
          zIndex: 10
        }}
        onPress={onPress}
        className=' active:opacity-90'
      >
        <View className={cn('w-[260px] rounded-[15px] overflow-hidden ', className)}>
          <View className='h-[100px] relative'>
            <ImageBackground source={group.coverURL} className='w-full h-full object-cover justify-end relative '>
              {/* <ThemedText type='defaultSemiBold' className='z-10 !text-[14px] !text-white mb-1 ml-3'>{group.title}</ThemedText>
            <View className=' absolute w-full h-full bg-black opacity-15 top-0'></View> */}
            </ImageBackground>
            <View className='py-[3px] px-3 pl-2.5 rounded-2xl bg-primary/90 absolute right-3 top-3 flex-row items-center gap-1.5'>
              <Ionicons name="people" size={15} color={'#ffffff'} /> 
              <Text className='text-white text-sm font-semibold'>{group.participantCount || 0}{group.participantLimit ? `/${group.participantLimit}` : ''}</Text>
            </View>
          </View>
          <View className=' bg-white p-3 pt-2'>
            <ThemedText type='defaultSemiBold' numberOfLines={1} className='!text-[14px] '>{group.title}</ThemedText>
            <ThemedText className='!text-sm !text-gray-700'>{group.location}</ThemedText>
            <ThemedText className='!text-sm !text-gray-700 mb-2'>{format(group.time, 'EEE, dd MMM yyyy, hh:mm a')}</ThemedText>
            {isJoined ?
              <Button size="sm" variant={"secondary"} onPress={onPressLeave} className='gap-1.5'>
                <Ionicons name="log-out-outline" size={16} color="#101010" className=' rotate-180' />
                <Text className={buttonTextVariants({variant: "secondary", size: 'sm'})}>Joined</Text>
              </Button>
              :
              <Button size="sm" variant={"outline"} onPress={onPressJoin} className='gap-1 !bg-white/0'>
                <Ionicons name="add" size={16} color={Colors.primary} />
                <Text className={buttonTextVariants({variant: "outline", size: 'sm'})}>Join Group</Text>
              </Button>
            }
          </View>
        </View>
      </Pressable>
    </View>
  )
}

export default HomeGroupCard