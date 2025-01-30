import {cn} from '@/libs/cn';
import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons'

export interface SearchInputProps extends TextInputProps {
  // autoFocus?: boolean
}

const SearchInput: React.FC<SearchInputProps> = ({className, ...props}) => {
  return (
    <View className={cn('flex-1 flex-row items-center bg-secondary/40 px-3   rounded-3xl  gap-2 relative')}>
      <Ionicons name='search-outline' size={22} color={'#818181'} />
      <TextInput {...props} className={cn('h-[40px] flex-1 placeholder:text-gray-600 text-[16px]', className)}>
      </TextInput>
    </View>
  );
};

export default SearchInput;