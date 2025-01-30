import HomeGroupCard from '@/components/HomeGroupCard'
import {ThemedText} from '@/components/ThemedText'
import {ThemedView} from '@/components/ThemedView'
import TextButton from '@/components/ui/TextButton'
import {Colors} from '@/constants/Colors'
import {useUserGroup} from '@/context/UserGroupContext'
import {hangout_group_data} from '@/data/hangout-group.data'
import {study_group_data} from '@/data/study-group.data'
import {encodeParams} from '@/utils/encodeParam'
import {router} from 'expo-router'
import React, {useCallback, useMemo} from 'react'
import {Alert, Image, Pressable, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';

function Index () {
  const {joinStudyGroup, joinedStudyGroups, joinedHangoutGroups, joinHangoutGroup, leaveStudyGroup, leaveHangoutGroup} = useUserGroup()

  const isJoinedStudy = (id: string) => {
    if(joinedStudyGroups.find(group => group.id === id)) return true;
    return false;
  }
  const isJoinedHangout = (id: string) => {
    if(joinedHangoutGroups.find(group => group.id === id)) return true;
    return false;
  }

  const handleLeaveStudyGroup = useCallback((id: string) => {
    Alert.alert("Exit group", "Are you sure?", [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Leave', onPress: () => {
          leaveStudyGroup(id)
        }, style: 'destructive'
      },
    ])
  }, [])

  const handleLeaveHangoutGroup = useCallback((id: string) => {
    Alert.alert("Exit group", "Are you sure?", [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Leave', onPress: () => leaveHangoutGroup(id), style: 'destructive'
      },
    ])
  }, [])

  return (
    <ThemedView className='flex-1'>
      <SafeAreaView className='flex-1'>
        <View className='p-4 flex-row justify-between items-center'>
          <ThemedText type='title'>AU Connect</ThemedText>
          <TouchableOpacity onPress={() => router.navigate('/notification')} activeOpacity={0.5} className='mr-1'>
            {/* <BellIcon color={'#101010'} size={24} /> */}
            <Ionicons name="notifications-sharp" size={24} color="#202020" />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View className='mt-5'>
            <View className='px-6 pr-4 flex-row justify-between items-center'>
              <ThemedText type='subtitle2'>Study Groups</ThemedText>
              <TextButton onPress={() => router.replace("/(root)/study-group")}>See more</TextButton>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerClassName=' px-6 py-4 gap-4'
            >
              {study_group_data.slice(0, 5).map(group => <HomeGroupCard
                key={group.id}
                group={group}
                isJoined={isJoinedStudy(group.id)}
                onPress={() => router.push({
                  pathname: `/(root)/home/${group.id}`,
                  params: {
                    id: group.id,
                    data: encodeParams({
                      group,
                      groupType: 'study'
                    })
                  }
                })}
                onPressJoin={() => joinStudyGroup(group)}
                onPressLeave={() => handleLeaveStudyGroup(group.id)}
              />)}
            </ScrollView>
          </View>
          <View className='mt-4'>
            <View className='px-6 pr-4 flex-row justify-between items-center'>
              <ThemedText type='subtitle2'>Hangout Groups</ThemedText>
              <TextButton onPress={() => router.replace("/(root)/hangout-group")}>See more</TextButton>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerClassName=' px-6 gap-4 py-4'
            >
              {hangout_group_data.slice(0, 5).map(group => <HomeGroupCard
                isJoined={isJoinedHangout(group.id)}
                key={group.id}
                group={group}
                onPress={() => router.push({
                  pathname: `/(root)/home/${group.id}`,
                  params: {
                    id: group.id,
                    data: encodeParams({
                      group,
                      groupType: 'hangout'
                    })
                  }
                })}
                onPressJoin={() => joinHangoutGroup(group)}
                onPressLeave={() => handleLeaveHangoutGroup(group.id)}
              />)}
            </ScrollView>
          </View>
          <View className='mt-4'>
            <View className='px-6 pr-4 flex-row justify-between items-center'>
              <ThemedText type='subtitle2'>Live Pomodoros</ThemedText>
              <TextButton>See more</TextButton>
            </View>
            <View className='h-[300px] px-6'>

            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  )
}

export default Index