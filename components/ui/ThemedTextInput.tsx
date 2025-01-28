import {cn} from '@/libs/cn'
import React from 'react'
import {TextInput, TextInputProps} from 'react-native'

export type ThemedTextInputProps = TextInputProps & {

}

function ThemedTextInput ({className, ...props}: ThemedTextInputProps) {
  return (
    <TextInput className={cn('border border-gray-400/70 focus:border-blue-400 focus:border-2 p-3 h-[50px] rounded-xl text-[16px] placeholder:text-gray-400', className)}
      {...props}
    />
  )
}

export default ThemedTextInput