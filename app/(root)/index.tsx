import GroupCard from '@/components/GroupCard'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import {ThemedText} from '@/components/ThemedText'
import {ThemedView} from '@/components/ThemedView'
import TextButton from '@/components/ui/TextButton'
import {Colors} from '@/constants/Colors'
import {hangout_group_data} from '@/data/hangout-group.data'
import {study_group_data} from '@/data/study-group.data'
import {router, Stack} from 'expo-router'
import React from 'react'
import {Image, Pressable, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from 'react-native'

function Index () {
  return (
    <ThemedView className='flex-1'>
      <SafeAreaView className='flex-1'>
        {/* <Stack.Screen options={{title: "Study Groups", headerShown: false, animationTypeForReplace: 'pop'}} /> */}
        <View className='p-4 flex-row justify-between items-center'>
          <ThemedText type='title'>AU Connect</ThemedText>
          <Pressable onPress={() => router.navigate('/notification')}>
            <Text>noticfication</Text>
          </Pressable>
        </View>
        <ParallaxScrollView>
          <Stack.Screen name='home' options={{title: "Home", headerShown: false, animationTypeForReplace: 'pop', animationDuration: 300}} />
          <View className='mt-5'>
            <View className='px-6 pr-4 flex-row justify-between items-center'>
              <ThemedText type='defaultSemiBold'>Study groups</ThemedText>
              <TextButton onPress={() => router.push("/(root)/study-group")}>See more</TextButton>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerClassName=' px-5 py-4 gap-4'
            >
              {study_group_data.map(group => <GroupCard key={group.id} group={group} />)}
            </ScrollView>
          </View>
          <View className='mt-5'>
            <View className='px-6 pr-4 flex-row justify-between items-center'>
              <ThemedText type='defaultSemiBold'>Hangout groups</ThemedText>
              <TextButton>See more</TextButton>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerClassName=' px-5 gap-4 mt-4'
            >
              {hangout_group_data.map(group => <GroupCard key={group.id} group={group} />)}
            </ScrollView>
          </View>
          <View className='mt-5'>
            <View className='px-6 pr-4 flex-row justify-between items-center'>
              <ThemedText type='defaultSemiBold'>Pomodoro sessions</ThemedText>
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