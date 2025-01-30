import JoinedGroupCard from '@/components/JoinedGroupCard'
import SearchModal from '@/components/SearchModal'
import {ThemedText} from '@/components/ThemedText'
import {ThemedView} from '@/components/ThemedView'
import {useStudyGroup} from '@/context/StudyGroupContext'
import useGroupSearch from '@/hooks/useGroupSearch'
import {encodeParams} from '@/utils/encodeParam'
import {router} from 'expo-router'
import {View} from 'react-native'

function Search () {
  const {data} = useStudyGroup()

  const {filteredGroups, triggerSearch, status} = useGroupSearch(data)

  return (
    <ThemedView>
      <SearchModal searchFieldProps={{
        onChangeText: triggerSearch,
        placeholder: 'Search study groups',
        autoFocus: true,
      }}>
        {status === 'idle' && (
          <View className='h-[50px] items-center justify-center'>
            <ThemedText className='!text-gray-500'>Search group by name or category</ThemedText>
          </View>
        )}
        {status === 'no-matched' && (
          <View className='h-[50px] items-center justify-center'>
            <ThemedText className='!text-gray-500'>Your search doesn't match any group</ThemedText>
          </View>
        )}
        {status === 'matched' && filteredGroups?.map(group => (
          <JoinedGroupCard
            key={group.id}
            group={group}
            onPress={() => router.push({
              // @ts-ignore
              pathname: `/(root)/study-group/${group.id}`,
              params: {
                id: group.id,
                data: encodeParams(group)
              }
            })}
          />
        ))}
      </SearchModal>
    </ThemedView>
  )
}

export default Search