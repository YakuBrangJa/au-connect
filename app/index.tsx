import {ThemedText} from '@/components/ThemedText'
import {ThemedView} from '@/components/ThemedView'
import Button from '@/components/ui/Button'
import {router} from 'expo-router'
import React from 'react'
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native'

function WelcomeScreen () {
  return (
    <ThemedView className='flex-1'>
      <SafeAreaView className='flex-1 justify-center'>
        <View className='px-6 flex-1 justify-around'>
          <Text className='text-center text-5xl font-bold'>AU Connect</Text>
          <View className='flex-row justify-center bg-transparent'>
            <Image source={require('../assets/images/welcome.png')} className='w-[250px] h-[190px]' />
          </View>
          <Button className='w-full' onPress={() => router.replace('/(root)')}>Get Started</Button>
        </View>
      </SafeAreaView>
    </ThemedView>
  )
}

export default WelcomeScreen