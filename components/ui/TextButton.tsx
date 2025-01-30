import React from 'react'
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native'
import '../../global.css'
import {cn} from '@/libs/cn'

export interface TextButtonProps extends TouchableOpacityProps {

}

function TextButton ({children, className, ...props}: TextButtonProps) {
  return (
    <TouchableOpacity {...props} activeOpacity={0.4} className={cn('p-1', className)}>
      <Text className='text-primary font-semibold text-[15px]'>{children}</Text>
    </TouchableOpacity>
  )
}

export default TextButton