import React from 'react'
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native'
import '../../global.css'
import {cn} from '@/libs/cn'

export interface ButtonProps extends TouchableOpacityProps {

}



function Button ({children, className, ...props}: ButtonProps) {
  return (
    <TouchableOpacity {...props} className={cn(" p-5 bg-primary rounded-xl", className)} activeOpacity={0.8}>
      <Text className=' text-center font-semibold text-white'>{children}</Text>
    </TouchableOpacity>
  )
}

export default Button