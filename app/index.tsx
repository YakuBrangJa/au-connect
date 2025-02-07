import {ThemedText} from '@/components/ThemedText'
import {ThemedView} from '@/components/ThemedView'
import Button, {ButtonShadowProvider, buttonTextVariants} from '@/components/ui/Button'
import {router} from 'expo-router'
import React from 'react'
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

function WelcomeScreen () {
  return (
    <ThemedView className='flex-1'>
      <SafeAreaView className='flex-1 justify-center'>
        <View className='px-6 flex-1 justify-around'>
          <View></View>
          <View className='gap-4 mt-[20px]'>
            <View className='flex-row justify-center bg-transparent'>
              <Image source={require('../assets/images/au-connect-logo-2.png')} className='w-[190px] h-[190px]' />
            </View>
            {/* <Text className='text-center text-5xl font-bold'>AU Connect</Text> */}
          </View>
          <View className='mt-[70px]'>
            <ButtonShadowProvider>
              <Button className='w-full gap-2' size={'lg'} onPress={() => router.replace('/(root)/home')}>
                <Text className={buttonTextVariants({size: 'lg'})}>Get Started</Text>
                <Ionicons name="arrow-forward" size={19} color="#ffffff" />
              </Button>
            </ButtonShadowProvider>
          </View>
        </View>
      </SafeAreaView>
    </ThemedView>
  )
}

export default WelcomeScreen