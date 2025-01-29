import {ThemedText} from '@/components/ThemedText'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import SwitchingBadge from '@/components/ui/SwitchingBadge'
import {cover_images} from '@/constants/cover_images'
import {CardShadow} from '@/constants/Shadows'
import {cn} from '@/libs/cn'
import {format} from 'date-fns'
import {router} from 'expo-router'
import React, {ComponentProps} from 'react'
import {Dimensions, Image, ImageBackground, Pressable, Text, View} from 'react-native'
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

  const numColumns = 2;
  const screenWidth = Dimensions.get("window").width;
  const cardWidth = screenWidth / numColumns - 20; // Adjust for spacing (e.g., 16px total margin)

  return (
    <View
      style={{
        ...CardShadow,
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.8,
        shadowRadius: 8,
        width: cardWidth,
        borderRadius: 20,
      }}
    >
      <View className='bg-black rounded-[15px]'>
        <Pressable className='rounded-[14px] overflow-hidden active:opacity-90' onPress={onViewGroup}>
          <View className='h-[100px] bg-primary/10 relative'>
          <ImageBackground source={group.coverURL} className='w-full h-full object-cover justify-end relative '>
              <ThemedText type='defaultSemiBold' numberOfLines={2}
                className='z-10 !text-[16px] !text-white mb-2 px-2 text-wrap'>{group.title}</ThemedText>
              <View className='absolute w-full h-full bg-black opacity-30 top-0'></View>
          </ImageBackground>
          <View className='py-[3px] px-3 rounded-2xl bg-primary/90 absolute right-3 top-3'>
              <Text className='text-white text-sm font-semibold'>{group.participantCount || 0}{group.participantLimit ? `/${group.participantLimit}` : ''}</Text>
          </View>
        </View>
          <View className=' bg-white p-3'>
            <View className='gap-1'>
              <View className='flex-row gap-1.5 items-start '>
                {/* <View className='mt-0.5'>
                <MapPinIcon color={'#7C8BA1'} size={15} />
                </View> */}
                <ThemedText lightColor='#6B7280' numberOfLines={2}
                  className='!text-sm pr-3'>{group.location}</ThemedText>
              </View>
              <View className='flex-row gap-1.5 items-center'>
                {/* <CalendarIcon color={'#7C8BA1'} size={15} /> */}
                <ThemedText lightColor='#6B7280'
                  numberOfLines={1}
                  className='!text-sm mr-2'>{format(group.time, 'EEE, dd MMM yyyy')}</ThemedText>

              </View>
            </View>
            <View className='flex-row gap-2 mt-4'>
              {/* {group.category.map(category => <Badge key={category}>{category}</Badge>)} */}
              {/* <Badge>{group.category[0]}</Badge> */}
              <SwitchingBadge categories={group.category} />
            </View>
        </View>
        </Pressable>
      </View>
    </View>
  )
}

export default GroupCard
