import {ThemedText} from '@/components/ThemedText'
import {ThemedView} from '@/components/ThemedView'
import Button, {ButtonShadowProvider, buttonTextVariants} from '@/components/ui/Button'
import ThemedTextInput from '@/components/ui/ThemedTextInput'
import {hangout_group_categories} from '@/constants/enum.consts'
import {useHangoutGroup} from '@/context/HangoutGroupContext'
import {useUser} from '@/context/UserContext'
import {useUserGroup} from '@/context/UserGroupContext'
import useScrollIntoView from '@/hooks/useScrollIntoView'
import {cn} from '@/libs/cn'
import {HangoutGroupCategory} from '@/types/hangout-group.type'
import DateTimePicker from '@react-native-community/datetimepicker'
import {randomUUID} from 'expo-crypto'
import React, {useCallback, useRef, useState} from 'react'
import {Image, ImageBackground, KeyboardAvoidingView, NativeSyntheticEvent, Platform, Pressable, SafeAreaView, ScrollView, Switch, Text, TextInput, TextInputFocusEventData, TextInputProps, TouchableHighlight, TouchableOpacity, View} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import {Colors} from '@/constants/Colors'

type FormState = {
  title: string,
  location: string,
  description: string,
  time: Date,
  category: HangoutGroupCategory[]
  participantLimit?: number,
}

function CreateScreen () {
  const [isLimiting, setIsLimiting] = useState(false)
  const [formState, setFormState] = useState<FormState>({
    title: '',
    location: '',
    description: '',
    time: new Date(),
    category: [],
    participantLimit: undefined,
  })

  const {scrollViewRef, scrollToInput} = useScrollIntoView()

  const handleOnFocus = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    scrollToInput(event.target as unknown as TextInput)
  }

  const handleFormChange = useCallback((name: string, value: any) => {
    setFormState(prev => {
      let updatedValue = prev;

      if(name === 'category') {
        let tempTags = updatedValue.category;

        if(value.checked) tempTags.push(value.tag)
        if(value.checked === false) tempTags = tempTags.filter(item => item !== value.tag)

        updatedValue = {
          ...updatedValue,
          category: tempTags
        }
      } else if(name === 'participantLimit') {
        updatedValue = {
          ...updatedValue,
          participantLimit: parseInt(value)
        }
      }
      else {
        updatedValue = {
          ...updatedValue,
          [name]: value
        }
      }

      return updatedValue;
    })
  }, [setFormState])

  const {data} = useUser()
  const {addGroup} = useHangoutGroup()
  const {createHangoutGroup} = useUserGroup()

  const handleSubmit = useCallback(() => {
    const payload = {
      ...formState,
      createdAt: new Date(),
      id: randomUUID(),
      organiser: data,
      coverURL: require('@/assets/images/cover/cover_1.jpg'),
    }

    addGroup(payload)
    createHangoutGroup(payload)

  }, [formState])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className=''>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 42,
          backgroundColor: '#ffffff',
        }}
        ref={scrollViewRef}
        keyboardShouldPersistTaps="handled"
        contentInsetAdjustmentBehavior="automatic"
      >
        <SafeAreaView>
          <ThemedView className='flex-1' lightColor='#ffffff'>
            <ImageBackground source={require('@/assets/images/cover/cover_4.jpg')} className='w-full h-[190px] object-cover relative'>
              <View className='absolute top-[20px] right-[10px]'>
                <Button size='sm' className='!bg-black/40 gap-2'>
                  {/* <PencilSquareIcon color={'#ffffff'} size={16} /> */}
                  <Text className={buttonTextVariants({size: 'sm', className: ''})}>Edit Cover</Text>
                </Button>
              </View>
            </ImageBackground>
            <View className='p-6 gap-6'>
              <View className='gap-2'>
                <ThemedText type='defaultSemiBold' className='!text-[15px]' >Group title</ThemedText>
                <ThemedTextInput
                  placeholder='Enter a title for your group'
                  onFocus={handleOnFocus}
                  value={formState.title}
                  onChangeText={value => handleFormChange('title', value)}
                />
              </View>
              <View className='gap-2'>
                <ThemedText type='defaultSemiBold' className='!text-[15px]' >Venue/Location</ThemedText>
                <ThemedTextInput
                  placeholder='Specify where the group will meet'
                  value={formState.location}
                  onChangeText={value => handleFormChange('location', value)}
                  onFocus={handleOnFocus}
                />
              </View>
              <View className='gap-2'>
                <ThemedText type='defaultSemiBold' className='!text-[15px]' >Description</ThemedText>
                <ThemedTextInput
                  multiline numberOfLines={10}
                  onFocus={handleOnFocus}
                  value={formState.description}
                  onChangeText={value => handleFormChange('description', value)}
                  className='h-[130px]'
                  placeholder='Provide details about your activity'
                />
              </View>
              <View className='gap-4'>
                <ThemedText type='defaultSemiBold' className='!text-[15px]' >Select relevent tags</ThemedText>
                <View className='flex-row flex-wrap gap-3'>
                  {hangout_group_categories.map(item => <Tags
                    key={item} label={item}
                    checked={formState.category?.includes(item)}
                    onCheckedChange={checked => handleFormChange('category', {
                      checked,
                      tag: item
                    })}
                  />)}
                </View>
              </View>
              <View className='gap-2 mt-2'>
                <ThemedText type='defaultSemiBold' className='!text-[15px]' >Select date & time</ThemedText>
                <DateTimePicker
                  value={formState.time}
                  mode='datetime'
                  onChange={event => handleFormChange('time', new Date(event.nativeEvent.timestamp))}
                  style={{
                    marginLeft: -9,
                  }}
                />
              </View>
              <View className='gap-2 mt-2'>
                <ThemedText type='defaultSemiBold' className='!text-[15px]' >Limit participant</ThemedText>
                <View className='flex-row items-center gap-5'>
                  <Switch value={isLimiting} onChange={e => setIsLimiting(prev => !prev)} />
                  <ThemedTextInput
                    keyboardType='numeric'
                    value={formState.participantLimit?.toString()}
                    onChangeText={value => handleFormChange('participantLimit', value)}
                    className={cn('w-[100px]', isLimiting ? 'visible' : 'invisible')}
                    onFocus={handleOnFocus}
                  />
                </View>
              </View>
              <View className='mt-3'>
                <ButtonShadowProvider>
                  <Button onPress={() => handleSubmit()}>Create</Button>
                </ButtonShadowProvider>
              </View>
            </View>
          </ThemedView>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default CreateScreen

function Tags ({label, checked, onCheckedChange}:
  {
    label: string
    checked?: boolean
    onCheckedChange?: (checked: boolean) => void
  }) {
  return (
    <View className='bg-black rounded-[50px]'>
      <Pressable
        className={cn('rounded-[17px] bg-gray-200 h-[32px] items-center px-3 overflow-hidden active:opacity-80 flex-row gap-1.5', checked && 'bg-blue-500 pl-2.5')}
        onPress={() => {
          if(typeof onCheckedChange === 'function') onCheckedChange(!checked)
        }}
      >
        {checked && <Ionicons name="checkmark-sharp" size={17} color="#ffffff" />}
        <Text className={cn('font-medium capitalize', checked && 'text-white')}>{label}</Text>
      </Pressable>
    </View>
  )
}