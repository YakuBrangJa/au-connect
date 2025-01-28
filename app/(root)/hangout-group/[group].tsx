import HangoutGroupModal from '@/components/HangoutGroupModal'
import {HangoutGroup} from '@/types/hangout-group.type'
import {StudyGroup} from '@/types/study-group.type'
import {decodeCustomParams} from '@/utils/encodeParam'
import {Route, useLocalSearchParams} from 'expo-router'
import React from 'react'
import {Text, View} from 'react-native'

function GroupModal () {
  const item = useLocalSearchParams()

  return (
    <HangoutGroupModal group={decodeCustomParams(item.data)} />
  )
}

export default GroupModal