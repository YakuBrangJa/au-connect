import GroupCard from '@/components/GroupCard'
import {ThemedText} from '@/components/ThemedText'
import {ThemedView} from '@/components/ThemedView'
import {useStudyGroup} from '@/context/StudyGroupContext'
import {encodeParams} from '@/utils/encodeParam'
import {router, Stack} from 'expo-router'
import React from 'react'
import {ScrollView, TouchableOpacity, View} from 'react-native'
import {UserGroupIcon} from 'react-native-heroicons/micro'
import {PlusCircleIcon, MagnifyingGlassIcon} from 'react-native-heroicons/mini'
import {SafeAreaView} from 'react-native-safe-area-context'

function StudyGroupScreen () {
  const {data} = useStudyGroup()

  return (
    <ThemedView className='flex-1'>
      <SafeAreaView className='relative flex-1'>
        <View className='p-4 py-3 flex-row justify-between items-center' >
          <ThemedText type='title'>Study Groups</ThemedText>
          <View className='flex-row gap-[17px]'>
            <TouchableOpacity activeOpacity={0.3}
            // onPress={() => router.push('/(root)/study-group/create')}
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
                pathname: `/(root)/study-group/${item.id}`,
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


{/* Floating button */}
{/* <View style={{
        ...CardShadow,
        shadowOffset: {width: 0, height: 3},
        shadowColor: '#442128',
        shadowOpacity: 0.7,
        shadowRadius: 4,
      }}>
        <Button className='absolute z-10 right-[20px] bottom-[70px] gap-1.5 rounded-[40px] h-[44px]'
          onPress={() => router.push('/(root)/study-group/create')}
        >
          <PlusIcon color={'#ffffff'} size={19} />
          <Text className={buttonTextVariants()}>Create</Text>
        </Button>
      </View> */}