import {Colors} from '@/constants/Colors'
import {darkenColor} from '@/utils/darkenColor'
import React, {PropsWithChildren} from 'react'
import {Text, View} from 'react-native'

function Badge ({children}: PropsWithChildren<{}>) {

  return (
    <View className='py-[5px] px-3 rounded-2xl bg-primary/10 '>
      <Text className='text-primary font-medium capitalize'
        style={{
          color: darkenColor(Colors.primary, 0.1)
        }}
      >{children}</Text>
    </View>
  )
}

export default Badge