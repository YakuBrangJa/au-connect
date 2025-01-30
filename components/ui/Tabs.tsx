import {cn} from "@/libs/cn"
import {createContext, FC, PropsWithChildren, ReactNode, useContext, useEffect, useState} from "react"
import {Pressable, PressableProps, StyleProp, View, ViewProps, ViewStyle} from "react-native"

type TabContext = {
  activeTab?: string
  handleTabChange: (value: string) => void
}

const TabContext = createContext<TabContext>(null)

interface TabProps extends PropsWithChildren {
  defaultValue?: string
  value?: string
  onTabChange?: (value: string) => void
}

export const Tab = ({defaultValue, children, value, onTabChange}: TabProps) => {
  const [activeTab, setActiveTab] = useState(value ?? defaultValue)

  useEffect(() => {
    setActiveTab(value)
  }, [value])

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    if(onTabChange) onTabChange(value)
  }

  return (
    <TabContext.Provider value={{
      activeTab,
      handleTabChange
    }}>
      {children}
    </TabContext.Provider>
  )
}

export const TabList: FC<ViewProps> = ({className, ...props}) => {
  return <View {...props} className={cn('flex-row items-center', className)} />
}

interface TabTriggerProps extends Omit<PressableProps, 'style' | 'className' | 'children'> {
  style?: StyleProp<ViewStyle> | (({active}: {
    active: boolean
  }) => StyleProp<ViewStyle>)
  className?: string | (({active}: {
    active: boolean
  }) => string)
  value: string
  children?: ReactNode | (({active}: {active: boolean}) => ReactNode)
}

export const TabTrigger = ({children, value, style, className, ...props}: TabTriggerProps) => {
  const {activeTab, handleTabChange} = useContext(TabContext)

  const active = activeTab === value
  return (
    <Pressable {...props}
      style={typeof style === 'function' ? style({active}) : style}
      className={typeof className === 'function' ? className({active}) : className}
      onPress={() => handleTabChange(value)}
    >{typeof children === 'function' ? children({active}) : children}</Pressable>
  )
}

interface TabContentProps extends ViewProps {
  value: string
}

export const TabContent: FC<TabContentProps> = ({children, value, ...props}) => {
  const {activeTab} = useContext(TabContext)

  if(activeTab === value) return <View {...props}>{children}</View>
}

export default {
  Tab,
  TabList,
  TabTrigger,
  TabContent,
}