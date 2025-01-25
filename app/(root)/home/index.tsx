import GroupCard from '@/components/GroupCard'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import {ThemedText} from '@/components/ThemedText'
import {ThemedView} from '@/components/ThemedView'
import TextButton from '@/components/ui/TextButton'
import {router, Stack} from 'expo-router'
import React from 'react'
import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from 'react-native'

function Index () {
  return (
    <ParallaxScrollView>
      <Stack.Screen name='home' options={{title: "Home", headerShown: false, animationTypeForReplace: 'pop', animationDuration: 300}} />
      <SafeAreaView>
        <View className='mt-8'>
          <View className='px-6 flex-row justify-between items-center'>
            <ThemedText type='defaultSemiBold'>Study groups</ThemedText>
            <TextButton onPress={() => router.push("/(root)/home/study-group")}>See more</TextButton>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerClassName=' px-4 gap-3 mt-4'
          >
            {/* <View className='w-[200px] h-[150px] bg-gray-200 rounded-xl'></View> */}
            <GroupCard />
            <GroupCard />
            <GroupCard />
            <GroupCard />
          </ScrollView>
        </View>

        <View className='mt-8'>
          <View className='px-6 flex-row justify-between items-center'>
            <ThemedText type='defaultSemiBold'>Hangout groups</ThemedText>
            <TextButton>See more</TextButton>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerClassName=' px-4 gap-3 mt-4'
          >
            <GroupCard />
            <GroupCard />
            <GroupCard />
          </ScrollView>
        </View>
      </SafeAreaView>
    </ParallaxScrollView>
  )
}

export default Index