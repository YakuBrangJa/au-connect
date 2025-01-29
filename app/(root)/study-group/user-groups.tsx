import {ThemedText} from '@/components/ThemedText'
import {ThemedView} from '@/components/ThemedView'
import React from 'react'
import {View} from 'react-native'

function UserGroup () {
  return (
    <ThemedView className='flex-1'>
      <View className='p-4 py-3 flex-row justify-between items-center' >
        {/* <ThemedText type='title'>My Groups</ThemedText> */}
      </View>
    </ThemedView>
  )
}

export default UserGroup