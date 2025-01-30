import GroupCard from '@/components/GroupCard'
import {ThemedText} from '@/components/ThemedText'
import {ThemedView} from '@/components/ThemedView'
import {useHangoutGroup} from '@/context/HangoutGroupContext'
import {encodeParams} from '@/utils/encodeParam'
import {router} from 'expo-router'
import React, {useState} from 'react'
import {Pressable, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import {cn} from '@/libs/cn'
import Tab from '@/components/ui/Tabs'
import {TabList, TabTrigger} from '@/components/GroupPageTab'
import JoinedGroupCard from '@/components/JoinedGroupCard'
import {useUserGroup} from '@/context/UserGroupContext'
import TextButton from '@/components/ui/TextButton'
import {darkenColor} from '@/utils/darkenColor'
import {Colors} from '@/constants/Colors'

function HangoutGroupScreen () {
  const {data} = useHangoutGroup()
  const {joinedHangoutGroups} = useUserGroup()
  const [activeTab, setActiveTab] = useState('discover')

  return (
    <ThemedView className='flex-1'>
      <SafeAreaView className='relative flex-1'>
        <View>
          <View className='p-4 pb-5 flex-row justify-between items-center' >
            <ThemedText type='title'>Hangout Groups</ThemedText>
            <View className='flex-row gap-[17px]'>
              <TouchableOpacity activeOpacity={0.3}
                onPress={() => router.push('/(root)/hangout-group/create')}
              >
                <Ionicons name="add-circle-sharp" size={27} color="#060606" />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.3}
                onPress={() => router.push('/(root)/hangout-group/search')}
              >
                <Ionicons name="search" size={27} color="#060606" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Tab.Tab value={activeTab} onTabChange={value => setActiveTab(value)}>
          <TabList>
            <TabTrigger value='discover'>
              {({active}) => (
                <>
                  <Ionicons name="compass-sharp" size={18} color={active ? darkenColor(Colors.primary, 0.05) : '#080808'} />
                  <Text className={cn('font-semibold text-[15px]')}
                    style={{
                      color: active ? darkenColor(Colors.primary, 0.05) : '#101010'
                    }}
                  >Discover</Text>
                </>
              )}
            </TabTrigger>
            <TabTrigger value="joined_groups">
              {({active}) => (
                <>
                  <Ionicons name="people-circle-sharp" size={18} color={active ? darkenColor(Colors.primary, 0.05) : '#080808'} />
                  <Text className={cn('font-semibold text-[15px]')}
                    style={{
                      color: active ? darkenColor(Colors.primary, 0.05) : '#101010'
                    }}
                  >Joined Groups</Text>
                </>
              )}
            </TabTrigger>
          </TabList>
          <Tab.TabContent value='discover' className='flex-1'>
            <ScrollView className='mb-[48px]' contentContainerClassName='flex-row flex-wrap p-4 gap-[12px] pb-[14px]' >
              {
                data.map(group => (<GroupCard key={group.id} group={group} onViewGroup={() => router.push({
                  // @ts-ignore
                  pathname: `/(root)/hangout-group/${group.id}`,
                  params: {
                    id: group.id,
                    data: encodeParams(group)
                  }
                })} />))
              }
            </ScrollView >
          </Tab.TabContent>
          <Tab.TabContent value='joined_groups'
            className='flex-1 py-4 gap-4 pb-[14px]'
          >
            {joinedHangoutGroups.length > 0 ?
              (<ScrollView className='mb-[48px]'
              >
                {joinedHangoutGroups.map(group => <JoinedGroupCard
                  key={group.id} group={group}
                  onPress={() => router.push({
                    // @ts-ignore
                    pathname: `/(root)/hangout-group/${group.id}`,
                    params: {
                      id: group.id,
                      data: encodeParams(group)
                    }
                  })}
                />)}
              </ScrollView>)
              :
              <View className='items-center justify-center flex-1 w-full gap-5'>
                <ThemedText type='defaultSemiBold' className='!text-gray-500'>You haven't joined any group</ThemedText>
                {/* <TextButton onPress={() => setActiveTab('discover')}>Browse groups</TextButton> */}
              </View>
            }
          </Tab.TabContent>
        </Tab.Tab>
      </SafeAreaView>
    </ThemedView>
  )
}

export default HangoutGroupScreen