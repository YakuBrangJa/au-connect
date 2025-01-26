import {ThemedText} from '@/components/ThemedText'
import {ThemedView} from '@/components/ThemedView'
import Button, {buttonTextVariants} from '@/components/ui/Button'
import {StudyGroup} from '@/types/study-group.type'
import {format} from 'date-fns'
import React from 'react'
import {Image, Text, View} from 'react-native'
import {CalendarIcon, ClockIcon, MapPinIcon, UserGroupIcon, } from 'react-native-heroicons/micro'
import {UserPlusIcon, UserGroupIcon as UserGroupIconMicro} from 'react-native-heroicons/micro'
interface Props {
  group: StudyGroup
}

function Group ({group}: Props) {
  return (
    <ThemedView className='flex-1'>
      <View className='w-full h-[170px]'>
        <Image source={group.coverURL} className='h-full w-full object-cover justify-end relative' />
      </View>
      <View className='p-4 px-5'>
        <View className=' gap-3'>
          <ThemedText type='subtitle'>{group.title}</ThemedText>
          <View className='gap-1'>
            <View className='flex-row gap-1.5 items-center -ml-0.5'>
              <MapPinIcon color={'#6B7280'} />
              <ThemedText lightColor='#6B7280' className='!text-[14px]'>{group.location}</ThemedText>
            </View>
            <View className='flex-row gap-1.5 items-center -ml-0.5'>
              <CalendarIcon color={'#6B7280'} />
              <ThemedText lightColor='#6B7280' className='!text-[14px] mr-2'>{format(group.time, 'EEE, dd MMM yyyy')}</ThemedText>
              <ClockIcon color={'#6B7280'} />
              <ThemedText lightColor='#6B7280' className='!text-[14px]'>{format(group.time, 'hh:mm a')}</ThemedText>
            </View>
            <View className='flex-row gap-1.5 items-center -ml-0.5'>
              <UserGroupIcon color={'#6B7280'} />
              <View className='flex-row'>
                <ThemedText lightColor='#030712' className='!text-[14px] font-medium'>{group.participantCount}/{group.participantLimit} </ThemedText>
                <ThemedText lightColor='#6B7280' className='!text-[14px]'>participants</ThemedText>
              </View>
            </View>
          </View>
        </View>
        <View className='flex-row gap-3 items-center justify-stretch my-4'>
          <Button size="sm" variant="secondary" className='flex-1 gap-2'>
            <UserPlusIcon size={16} color="#112131" />
            <Text className={buttonTextVariants({size: 'sm', variant: 'secondary'})}>
              Invite friend
            </Text>
          </Button>
          <Button size="sm" className='flex-1 gap-2'>
            <UserGroupIconMicro size={16} color="#ffffff" />
            <Text className={buttonTextVariants({size: 'sm'})}>
              Join
            </Text>
          </Button>
        </View>
        <View className='mt-3'>
          <ThemedText>{group.description}</ThemedText>
        </View>
      </View>
    </ThemedView>
  )
}

export default Group