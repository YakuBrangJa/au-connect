import React, {ComponentProps, FC} from "react"
import Tab from "@/components/ui/Tabs"
import {cn} from "@/libs/cn"
import {Ionicons} from "@expo/vector-icons"
import {Text} from "react-native"

export const TabTrigger: FC<ComponentProps<typeof Tab.TabTrigger>> = ({className, children, ...props}) => {
  return (
    <Tab.TabTrigger
      {...props}
      className={({active}) => cn('h-[33px] px-4 pl-3 rounded-3xl active:scale-[0.98] active:opacity-75 flex-row gap-1.5 items-center border', active ? 'bg-primary/10  border-primary' : 'bg-secondary/80 border-secondary/80', className)} style={{}}>
      {children}
    </Tab.TabTrigger>
  )
}

export const TabList: FC<ComponentProps<typeof Tab.TabList>> = ({className, ...props}) => {
  return <Tab.TabList {...props} className='flex-row px-4 pb-2 gap-2.5 border-b-[1px] border-slate-200' />
}


