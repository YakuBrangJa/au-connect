import React, {useState} from 'react'
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native'
import '../../global.css'
import {cn} from '@/libs/cn'
import {cva, VariantProps} from 'class-variance-authority';

export const buttonVariants = cva(
  "rounded-[9px] justify-center flex-row items-center",
  {
    variants: {
      variant: {
        default: "bg-primary",
        outline: "border border-[1.15px] border-primary/80",
        secondary: "bg-secondary",
      },
      size: {
        lg: "h-[52px] px-5",
        default: "h-[46px] px-5",
        sm: "h-[37px] px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export const buttonTextVariants = cva("text-center font-semibold ", {
  variants: {
    variant: {
      default: "text-white",
      outline: "text-primary",
      secondary: "",
    },
    size: {
      lg: '',
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

export type ButtonProps = VariantProps<typeof buttonVariants> & TouchableOpacityProps & {

};


function Button ({children, className, size, variant = 'default', onPress, ...props}: ButtonProps) {
  const [pressed, setPressed] = useState(false)

  return (
    <TouchableOpacity {...props} className={cn(buttonVariants({
      size,
      variant,
      className,
    }))}
      activeOpacity={variant === "default" ? 0.8 : 0.6}
      onPress={(e) => {
        setPressed(true)
        onPress && onPress(e)
      }}
      onBlur={() => setPressed(false)}
      style={{
        scaleX: pressed ? 0.95 : 1,
        scaleY: pressed ? 0.95 : 1
      }}
    >
      {typeof children === 'string' ? 
      <Text className={buttonTextVariants({
        size,
        variant,
      })}>{children}</Text>
        : children
      }
    </TouchableOpacity>
  )
}

export default Button