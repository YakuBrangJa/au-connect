import GroupCard from '@/components/GroupCard'
import {ThemedText} from '@/components/ThemedText'
import {ThemedView} from '@/components/ThemedView'
import {useStudyGroup} from '@/context/StudyGroupContext'
import {encodeParams} from '@/utils/encodeParam'
import {router, Stack} from 'expo-router'
import React from 'react'
import {FlatList, Pressable, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import {UserGroupIcon} from 'react-native-heroicons/micro'
import {PlusCircleIcon, MagnifyingGlassIcon} from 'react-native-heroicons/mini'
import {SafeAreaView} from 'react-native-safe-area-context'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Badge from '@/components/ui/Badge'
import {cn} from '@/libs/cn'

function StudyGroupScreen () {
  const {data} = useStudyGroup()

  return (
    <ThemedView className='flex-1'>
      <SafeAreaView className='relative flex-1'>
        <View>
          <View className='p-4 pb-5 flex-row justify-between items-center' >
            <ThemedText type='title'>Study Groups</ThemedText>
            <View className='flex-row gap-[17px]'>
              {/* <TouchableOpacity activeOpacity={0.3}
                onPress={() => router.push('/(root)/study-group/user-groups')}
              >
                <MaterialIcons name="groups" size={27} color="#060606" />
              </TouchableOpacity> */}
              <TouchableOpacity activeOpacity={0.3}
                onPress={() => router.push('/(root)/study-group/create')}
              >
                <Ionicons name="add-circle-sharp" size={27} color="#060606" />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.3}>
                <Ionicons name="search" size={27} color="#060606" />
              </TouchableOpacity>
            </View>
          </View>
          <View className='flex-row px-4 pb-2 gap-2.5 border-b-[1px] border-slate-200'>
            <Pressable className={cn('py-2 px-4 pl-3 bg-primary rounded-3xl active:scale-[0.985] active:opacity-75 flex-row gap-1.5 items-center')}>
              <Ionicons name="compass-sharp" size={18} color="white" />
              <Text className='font-semibold text-[15px] text-white'>Discover</Text>
            </Pressable>
            <Pressable className='py-2 px-4 pl-3 bg-secondary rounded-3xl active:scale-[0.985] active:opacity-75 flex-row gap-1.5 items-center'>
              <Ionicons name="people-circle-sharp" size={20} color="black" />
              <Text className='font-semibold text-[15px]'>Joined Groups</Text>
            </Pressable>
          </View>
        </View>

        <ScrollView className='mb-[48px]'>
          {/* <View className='flex-1 p-5 gap-4 pb-[14px]'> */}
          <View className='flex-1 flex-row flex-wrap p-4 gap-[12px] pb-[14px]'>
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