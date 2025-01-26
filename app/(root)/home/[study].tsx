import Group from '@/components/Group'
import {StudyGroup} from '@/types/study-group.type'
import {Route, useLocalSearchParams} from 'expo-router'
import React from 'react'
import {Text, View} from 'react-native'

type ParamProps = {
  data: StudyGroup
}

function StudyGroupModal () {
  const data = useLocalSearchParams<StudyGroup>()

  return (
    <View className='flex-1 justify-center items-center'>
      <Group group={data} />
    </View>
  )
}

export default StudyGroupModal