import HangoutGroupModal from '@/components/HangoutGroupModal'
import StudyGroupModal from '@/components/StudyGroupModal'
import {HangoutGroup} from '@/types/hangout-group.type'
import {StudyGroup} from '@/types/study-group.type'
import {decodeCustomParams} from '@/utils/encodeParam'
import {Route, useLocalSearchParams} from 'expo-router'
import React from 'react'
import {Text, View} from 'react-native'

type ParamProps = {
  data: StudyGroup
}

function GroupModal () {
  const params = useLocalSearchParams()

  const {groupType, group} = decodeCustomParams(params.data) as {
    group: StudyGroup
    groupType: 'study'
  } | {
    group: HangoutGroup
    groupType: 'hangout'
  }

  return (
    <>
      {groupType === 'study' ?
        <StudyGroupModal group={group} />
        :
        <HangoutGroupModal group={group} />
      }
    </>
  )
}

export default GroupModal