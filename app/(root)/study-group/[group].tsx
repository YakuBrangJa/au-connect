import Group from '@/components/Group'
import {StudyGroup} from '@/types/study-group.type'
import {Route, useLocalSearchParams} from 'expo-router'
import React from 'react'
import {Text, View} from 'react-native'

function GroupModal () {
  const item = useLocalSearchParams<StudyGroup>()

  return (
    <Group group={item} />
  )
}

export default GroupModal