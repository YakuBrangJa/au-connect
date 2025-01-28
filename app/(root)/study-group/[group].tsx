import StudyGroupModal from '@/components/StudyGroupModal'
import {useUserGroup} from '@/context/UserGroupContext'
import {StudyGroup} from '@/types/study-group.type'
import {decodeCustomParams} from '@/utils/encodeParam'
import {Route, useLocalSearchParams} from 'expo-router'
import React, {useCallback, useMemo} from 'react'
import {Alert, Text, View} from 'react-native'

function GroupModal () {
  const params = useLocalSearchParams()

  return (
    <StudyGroupModal group={decodeCustomParams(params.data)} />
  )
}

export default GroupModal