import Group from '@/components/Group'
import {HangoutGroup} from '@/types/hangout-group.type'
import {StudyGroup} from '@/types/study-group.type'
import {Route, useLocalSearchParams} from 'expo-router'
import React from 'react'
import {Text, View} from 'react-native'

type ParamProps = {
  data: StudyGroup
}

function HangoutGroupModal () {
  const data = useLocalSearchParams<HangoutGroup>()

  return (
    <Group group={data} />
  )
}

export default HangoutGroupModal