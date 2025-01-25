import React from 'react'
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native'
import '../../global.css'
import {cn} from '@/libs/cn'
import {cva, VariantProps} from 'class-variance-authority';

export const buttonVariants = cva(
  "rounded-xl justify-center",
  {
    variants: {
      variant: {
        default:
          "bg-primary",
        outline:
          "border border-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      },
      size: {
        lg: "h-[52px] px-5",
        default: "h-[46px] px-5",
        sm: "h-[40px] px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const buttonTextVariants = cva("text-center font-semibold ", {
  variants: {
    variant: {
      default: "text-white",
      outline: "text-primary",
      secondary: "",
    },
    size: {
      lg: '',
      default: '',
      sm: '',
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


function Button ({children, className, size, variant, ...props}: ButtonProps) {
  return (
    <TouchableOpacity {...props} className={cn(buttonVariants({
      size,
      variant,
      className,
    }))} activeOpacity={0.6}>
      <Text className={buttonTextVariants({
        size,
        variant,
      })}>{children}</Text>
    </TouchableOpacity>
  )
}

export default Button