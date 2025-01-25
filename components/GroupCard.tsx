import {ThemedText} from '@/components/ThemedText'
import Button from '@/components/ui/Button'
import React from 'react'
import {View} from 'react-native'

function GroupCard () {
  return (
    <View className='w-[240px] rounded-xl overflow-hidden'>
      <View className='h-[100px] bg-primary/10'></View>
      <View className=' bg-gray-200/30 p-3'>
        <ThemedText type='defaultSemiBold' className='!text-[14px]'>Math Discussion Group</ThemedText>
        <ThemedText className='!text-sm mb-3'>TrueLab</ThemedText>
        <Button size="sm" variant="outline">Join Group</Button>
      </View>
    </View>
  )
}

export default GroupCard