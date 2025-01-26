import GroupCard from '@/components/GroupCard'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import {ThemedText} from '@/components/ThemedText'
import {ThemedView} from '@/components/ThemedView'
import Button from '@/components/ui/Button'
import {hangout_group_data} from '@/data/hangout-group.data'
import {study_group_data} from '@/data/study-group.data'
import {Stack} from 'expo-router'
import React from 'react'
import {FlatList, Image, ImageBackground, Pressable, SafeAreaView, Text, TextInput, View} from 'react-native'

function StudyGroupScreen () {
  return (
    <ThemedView>
      {/* <Stack.Screen options={{title: "Study Groups", headerShown: false}} /> */}
      <SafeAreaView>
        <View className='p-4 flex-row justify-between items-center'>
          <ThemedText type='title'>Hangout groups</ThemedText>
          {/* <Button size="sm" className='h-[37px]'>+ Create Group</Button> */}
        </View>
        {/* <View className='p-4'>
          <TextInput className='border border-gray-200 rounded-xl px-4 h-[46px]' />
        </View> */}
        <View className=''>
          <FlatList
            data={hangout_group_data}
            keyExtractor={item => item.id}
            className='mb-[250px]'
            contentContainerClassName='gap-5 p-5'
            renderItem={({item}) => (
              <View
                key={item.id}
                style={{
                  backgroundColor: '#0000',
                  shadowColor: '#afafaf',
                  elevation: 2,
                  shadowOffset: {width: 0, height: 2},
                  shadowRadius: 1,
                  shadowOpacity: 0.2,
                }}
              >
                <Pressable className='rounded-2xl overflow-hidden bg-white' onPress={() => alert('Hello')}>
                  <View className='h-[100px] bg-primary/10 relative'>
                    <ImageBackground source={item.coverURL} className='w-full h-full object-cover'>

                    </ImageBackground>
                    <View className='py-[3px] px-3 rounded-2xl bg-primary/90 absolute right-3 top-3'>
                      <Text className='text-white text-sm font-semibold'>3/40</Text>
                    </View>
                  </View>
                  <View className=' bg-gray-200/30 p-3'>
                    <ThemedText type='defaultSemiBold' className='!text-[14px]'>{item.title}</ThemedText>
                    <ThemedText className='!text-sm mb-3 !text-gray-700'>TrueLab</ThemedText>
                    <View className='flex-row gap-2'>
                      {item.category.map(category => (
                        <View key={category} className='py-[4px] px-3 rounded-2xl bg-primary/10 '>
                          <Text className='text-primary font-medium'>{category}</Text>
                        </View>
                      ))}
                    </View>
                    {/* <Button size="sm" variant="outline">View Group</Button> */}
                  </View>
                </Pressable>
              </View>
            )
            } />
        </View>
      </SafeAreaView>
    </ThemedView>
  )
}

export default StudyGroupScreen