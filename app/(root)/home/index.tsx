import GroupCard from '@/components/GroupCard'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import {ThemedText} from '@/components/ThemedText'
import {ThemedView} from '@/components/ThemedView'
import TextButton from '@/components/ui/TextButton'
import {hangout_group_data} from '@/data/hangout-group.data'
import {study_group_data} from '@/data/study-group.data'
import {router} from 'expo-router'
import React from 'react'
import {Image, Pressable, ScrollView, Text, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

function Index () {
  return (
    <ThemedView className='flex-1'>
      <SafeAreaView className='flex-1'>
        <View className='p-4 flex-row justify-between items-center'>
          <ThemedText type='title'>AU Connect</ThemedText>
          <Pressable onPress={() => router.navigate('/notification')}>
            <Text>noticfication</Text>
          </Pressable>
        </View>
        <ParallaxScrollView>
          <View className='mt-5'>
            <View className='px-6 pr-4 flex-row justify-between items-center'>
              <ThemedText type='subtitle2'>Study groups</ThemedText>
              <TextButton onPress={() => router.push("/(root)/study-group")}>See more</TextButton>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerClassName=' px-5 py-4 gap-4'
            >
              {study_group_data.map(group => <GroupCard
                key={group.id}
                group={group}
                onViewGroup={() => router.push({
                  pathname: `/(root)/home/${group.id}`,
                  params: group
                })}
              />)}
            </ScrollView>
          </View>
          <View className='mt-4'>
            <View className='px-6 pr-4 flex-row justify-between items-center'>
              <ThemedText type='subtitle2'>Hangout groups</ThemedText>
              <TextButton>See more</TextButton>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerClassName=' px-5 gap-4 mt-4'
            >
              {hangout_group_data.map(group => <GroupCard
                key={group.id}
                group={group}
                onViewGroup={() => router.push({
                  pathname: `/(root)/home/${group.id}`,
                  params: group
                })}
              />)}
            </ScrollView>
          </View>
          <View className='mt-4'>
            <View className='px-6 pr-4 flex-row justify-between items-center'>
              <ThemedText type='subtitle2'>Pomodoro sessions</ThemedText>
              <TextButton>See more</TextButton>
            </View>
            <View className='h-[300px]'>

            </View>
            {/* <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerClassName=' px-5 gap-4 mt-4'
            >
              {study_group_data.map(group => <GroupCard key={group.id} group={group} />)}
            </ScrollView> */}
          </View>
        </ParallaxScrollView>
      </SafeAreaView>
    </ThemedView>
  )
}

export default Index