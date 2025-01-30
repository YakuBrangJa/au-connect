import {HangoutGroup} from '@/types/hangout-group.type'
import {StudyGroup} from '@/types/study-group.type'
import {matchSubString} from '@/utils/matchSubString'
import React, {useCallback, useState} from 'react'

function useGroupSearch (data: HangoutGroup[] | StudyGroup[]) {
  const [filteredGroups, setFilteredGroups] = useState<(HangoutGroup | StudyGroup)[] | undefined>(undefined)
  const [status, setStatus] = useState<'idle' | 'no-matched' | 'matched'>('idle')

  const triggerSearch = useCallback((value: string) => {
    if(!value) {
      setFilteredGroups(undefined)
      setStatus('idle')
    }
    else {
      const filtered = data.filter(group => {
        const queryList = value.split(' ')

        let matched = false
        queryList.forEach(query => {
          const titleMatch = matchSubString(group.title, query)
          const matchedCategories = group.category.filter(cata => matchSubString(cata, query))

          if(titleMatch || (matchedCategories.length > 0)) matched = true
        })

        if(matched) return group;
      })

      setFilteredGroups(filtered)
      setStatus(filtered.length > 0 ? 'matched' : 'no-matched')
    }
  }, [data])

  return {
    filteredGroups,
    triggerSearch,
    status,
  }
}

export default useGroupSearch