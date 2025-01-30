import GroupCard from '@/components/GroupCard'
import {ThemedText} from '@/components/ThemedText'
import {ThemedView} from '@/components/ThemedView'
import {useStudyGroup} from '@/context/StudyGroupContext'
import {encodeParams} from '@/utils/encodeParam'
import {router, Stack} from 'expo-router'
import React, {useState} from 'react'
import {ScrollView, Text, TouchableOpacity, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import Tab from '@/components/ui/Tabs'
import {TabList, TabTrigger} from '@/components/GroupPageTab'
import {cn} from '@/libs/cn'
import {useUserGroup} from '@/context/UserGroupContext'
import JoinedGroupCard from '@/components/JoinedGroupCard'
import TextButton from '@/components/ui/TextButton'
import {darkenColor} from '@/utils/darkenColor'
import {Colors} from '@/constants/Colors'

function StudyGroupScreen () {
  const {data} = useStudyGroup()
  const {joinedStudyGroups} = useUserGroup()

  const [activeTab, setActiveTab] = useState('discover')

  return (
    <ThemedView className='flex-1'>
      <SafeAreaView className='relative flex-1'>
        <View>
          <View className='p-4 pb-5 flex-row justify-between items-center' >
            <ThemedText type='title'>Study Groups</ThemedText>
            <View className='flex-row gap-[17px]'>
              <TouchableOpacity activeOpacity={0.3}
                onPress={() => router.push('/(root)/study-group/create')}
              >
                <Ionicons name="add-circle-sharp" size={27} color="#060606" />
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.3} onPress={() => router.push('/(root)/study-group/search')}>
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
          {/* <View className='flex-1 p-5 gap-4 pb-[14px]'> */}
          <Tab.TabContent value='discover' className='flex-1'>
            <ScrollView className='mb-[48px]' contentContainerClassName='flex-row flex-wrap p-4 gap-[12px] pb-[14px]' >
              {
                data.map(group => (<GroupCard key={group.id} group={group}
                  onViewGroup={() => router.push({
                    // @ts-ignore
                    pathname: `/(root)/study-group/${group.id}`,
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
            {joinedStudyGroups.length > 0 ?
              (<ScrollView className='mb-[48px]'
              // contentContainerClassName='gap-4'
              >
                {joinedStudyGroups.map(group => <JoinedGroupCard key={group.id} group={group}
                  onPress={() => router.push({
                    // @ts-ignore
                    pathname: `/(root)/study-group/${group.id}`,
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