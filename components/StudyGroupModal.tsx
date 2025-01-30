import ParallaxScrollView from '@/components/ParallaxScrollView'
import {ThemedText} from '@/components/ThemedText'
import {ThemedView} from '@/components/ThemedView'
import Badge from '@/components/ui/Badge'
import Button, {ButtonShadowProvider, buttonTextVariants} from '@/components/ui/Button'
import {useUserGroup} from '@/context/UserGroupContext'
import {StudyGroup} from '@/types/study-group.type'
import {format} from 'date-fns'
import React, {useCallback, useMemo} from 'react'
import {Alert, GestureResponderEvent, Image, Platform, Pressable, ScrollView, Text, View} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import {router} from 'expo-router'

interface Props {
  group: StudyGroup
}

function StudyGroupModal ({group}: Props) {
  const {joinStudyGroup, leaveStudyGroup, joinedStudyGroups} = useUserGroup()

  const isJoined = useMemo(() => {
    if(joinedStudyGroups.find(item => item.id === group.id)) return true;
    return false;
  }, [group, joinStudyGroup])

  const handlePressJoin = useCallback(() => {
    joinStudyGroup(group)
  }, [group, joinStudyGroup])

  const handlePressLeave = useCallback(() => {
    Alert.alert("Leave group", "Are you sure?", [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Leave', onPress: () => leaveStudyGroup(group.id), style: 'destructive'},
    ])
  }, [group, leaveStudyGroup])

  return (
    <ThemedView className='flex-1 relative'>
      {Platform.OS === 'android' &&
        <Pressable onPress={() => router.back()} className='active:opacity-50 absolute top-[50px] left-[10px] z-10'>
          <Ionicons name="chevron-back" size={29} color={"#3B82F6"} />
        </Pressable>
      }
      <ParallaxScrollView
        headerImage={
          <Image
            source={group.coverURL}
            className='h-full w-full'
          />}
        headerHeight={220}
      >
        <ThemedView className='p-6 pb-[60px] overflow-hidden'>
          <View className='gap-3'>
            <ThemedText type='subtitle'>{group.title}</ThemedText>
            <View className='gap-1'>
              <View className='flex-row gap-1.5 items-center -ml-0.5'>
                <Ionicons name="location-sharp" size={16} color="#7C8BA1" />
                <ThemedText lightColor='#6B7280' className='!text-[14px]'>{group.location}</ThemedText>
              </View>
              <View className='flex-row gap-1.5 items-center -ml-0.5'>
                <Ionicons name="calendar" size={16} color="#7C8BA1" />
                <ThemedText lightColor='#6B7280' className='!text-[14px] mr-2'>{format(group.time, 'EEE, dd MMM yyyy')}</ThemedText>
                <Ionicons name="time-sharp" size={16} color="#7C8BA1" />
                <ThemedText lightColor='#6B7280' className='!text-[14px]'>{format(group.time, 'hh:mm a')}</ThemedText>
              </View>
              <View className='flex-row gap-1.5 items-center -ml-0.5'>
                <Ionicons name="people" size={16} color="#7C8BA1" />
                <View className='flex-row'>
                  <ThemedText lightColor='#030712' className='!text-[14px] font-medium'>{group.participantCount}/{group.participantLimit} </ThemedText>
                  <ThemedText lightColor='#6B7280' className='!text-[14px]'>participants</ThemedText>
                </View>
              </View>
            </View>
          </View>
          <View className='flex-row gap-2 mt-5'>
            {group.category?.map(category => <Badge key={category}>{category}</Badge>)}
          </View>
          <View className='mt-6'>
            <ThemedText>{group.description}</ThemedText>
          </View>
        </ThemedView>
      </ParallaxScrollView>
      <View className='absolute w-full px-6' style={Platform.select({
        android: {
          bottom: 20
        },
        ios: {
          bottom: 48
        }
      })}>
        {isJoined ?
          <Button className='gap-2' onPress={handlePressLeave} variant="secondary">
            <Ionicons name="log-out-outline" size={20} color="#101010" className=' rotate-180' />
            <Text className={buttonTextVariants({variant: 'secondary'})}>Joined</Text>
          </Button>
          :
          <ButtonShadowProvider>
            <Button className='gap-2' onPress={handlePressJoin}>
              <Ionicons name="add" size={21} color="#ffffff" />
              <Text className={buttonTextVariants({})}>Join Group</Text>
            </Button>
          </ButtonShadowProvider>
        }
      </View>
    </ThemedView>
  )
}

export default StudyGroupModal