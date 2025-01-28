import React, {PropsWithChildren, useState} from 'react'
import {Pressable, PressableProps, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, TouchableWithoutFeedback, View} from 'react-native'
import '../../global.css'
import {cn} from '@/libs/cn'
import {cva, VariantProps} from 'class-variance-authority';
import {darkenColor} from '@/utils/darkenColor';
import {Colors} from '@/constants/Colors';
import {CardShadow} from '@/constants/Shadows';


export const buttonVariants = cva(
  "rounded-[9px] justify-center flex-row items-center ",
  {
    variants: {
      variant: {
        default: "bg-primary",
        outline: "border border-[1.15px] border-primary/80",
        secondary: "bg-secondary",
      },
      size: {
        lg: "h-[52px] px-6 rounded-[11px]",
        default: "h-[44px] px-5",
        sm: "h-[37px] px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export const buttonTextVariants = cva("text-center font-semibold", {
  variants: {
    variant: {
      default: "text-white",
      outline: "text-primary",
      secondary: "",
    },
    size: {
      lg: 'text-[15px]',
      default: '',
      sm: 'text-[13px]',
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
}
)

export type ButtonProps = VariantProps<typeof buttonVariants> & PressableProps & {

};


function Button ({children, className, size = 'default', variant = 'default', ...props}: ButtonProps) {
  const [pressed, setPressed] = useState(false)

  return (
    <Pressable {...props}
      className={cn(buttonVariants({
        size,
        variant,
        className,
      }))}
      onPressIn={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      style={{
        opacity: variant === 'outline' ? (pressed ? 0.4 : 1) : 1,
        backgroundColor: dynamicBackground(variant, pressed),
        transform: [
          {scale: pressed ? 0.985 : 1}
        ],
      }}
    >
      {typeof children === 'string' ? 
      <Text className={buttonTextVariants({
        size,
        variant,
      })}>{children}</Text>
        : children
      }
    </Pressable>
  )
}

export default Button


function dynamicBackground (variant: string, pressed: boolean) {

  if(variant === 'default') {
    return pressed ? darkenColor(Colors.primary, 0.1) : Colors.primary
  }

  if(variant === 'secondary') return pressed ? darkenColor('#dde0e4', 0.1) : '#dde0e4'

  return ''
}

export const ButtonShadowProvider = ({children}: PropsWithChildren) => {
  return (
    <View style={{
      ...CardShadow,
      shadowColor: Colors.primary,
      shadowRadius: 6,
      shadowOffset: {width: 0, height: 6},
      shadowOpacity: 0.3
    }}>{children}</View>
  )
}