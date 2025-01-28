import GroupCard from '@/components/GroupCard'
import {ThemedText} from '@/components/ThemedText'
import {ThemedView} from '@/components/ThemedView'
import {useHangoutGroup} from '@/context/HangoutGroupContext'
import {encodeParams} from '@/utils/encodeParam'
import {router} from 'expo-router'
import React from 'react'
import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native'
import {UserGroupIcon} from 'react-native-heroicons/micro'
import {MagnifyingGlassIcon, PlusCircleIcon} from 'react-native-heroicons/mini'

function StudyGroupScreen () {
  const {data} = useHangoutGroup()
  return (
    <ThemedView className='flex-1'>
      <SafeAreaView className='relative flex-1'>
        <View className='p-4 py-3 flex-row justify-between items-center' >
          <ThemedText type='title'>Hangout Groups</ThemedText>
          <View className='flex-row gap-[17px]'>
            <TouchableOpacity activeOpacity={0.3}
            // onPress={() => router.push('/(root)/hangout-group/create')}
            >
              <UserGroupIcon color={'#060606'} size={28} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.3}
              onPress={() => router.push('/(root)/study-group/create')}
            >
              <PlusCircleIcon color={'#060606'} size={27} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.3}>
              <MagnifyingGlassIcon color={'#060606'} size={27} />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView className='mb-[48px]'>
          <View className='flex-1 p-[20px] gap-4 pb-[14px]'>
            {
              data.map(item => (<GroupCard key={item.id} group={item} onViewGroup={() => router.push({
                pathname: `/(root)/hangout-group/${item.id}`,
                params: {
                  id: item.id,
                  data: encodeParams(item)
                }
              })} />))
            }
          </View>
        </ScrollView >
      </SafeAreaView>
    </ThemedView>
  )
}

export default StudyGroupScreen