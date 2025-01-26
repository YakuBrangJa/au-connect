import {ThemedText} from '@/components/ThemedText'
import Button from '@/components/ui/Button'
import {cover_images} from '@/constants/cover_images'
import {cn} from '@/libs/cn'
import React, {ComponentProps} from 'react'
import {Image, ImageBackground, Text, View} from 'react-native'

function GroupCard ({className, group}: {
  className?: string
  group: {
    title: string,
    time: Date,
    location: string,
    description: string,
    participantLimit?: number,
    category: string[]
    coverURL: any
  }
}) {
  return (
    <View
    // style={{
    //   backgroundColor: '#0000',
    //   shadowColor: '#afafaf',
    //   elevation: 2,
    //   shadowOffset: {width: 0, height: 0},
    //   shadowRadius: 10,
    //   shadowOpacity: 0.1,
    // }}
    >
      <View className={cn('w-[240px] rounded-2xl overflow-hidden bg-white', className)}
      >
        <View className='h-[100px] bg-primary/10 relative'>
          <ImageBackground source={group.coverURL} className='w-full h-full object-cover justify-end relative '>
            {/* <ThemedText type='defaultSemiBold' className='z-10 !text-[14px] !text-white mb-1 ml-3'>{group.title}</ThemedText>
            <View className=' absolute w-full h-full bg-black opacity-15 top-0'></View> */}
          </ImageBackground>
          <View className='py-[3px] px-3 rounded-2xl bg-primary/90 absolute right-3 top-3'>
            <Text className='text-white text-sm font-semibold'>3/40</Text>
          </View>
        </View>
        <View className=' bg-gray-200/40 p-3'>
          <ThemedText type='defaultSemiBold' className='!text-[14px] '>{group.title}</ThemedText>
          <ThemedText className='!text-sm mb-3 !text-gray-700'>{group.location}</ThemedText>
          <Button size="sm" variant="outline">View Group</Button>
        </View>
      </View>
    </View>
  )
}

export default GroupCard