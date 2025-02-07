import Avatar from '@/components/Avatar'
import {ThemedText} from '@/components/ThemedText'
import {ThemedView} from '@/components/ThemedView'
import {cn} from '@/libs/cn'
import {Message} from '@/types/chat.type'
import React from 'react'
import {Text, View} from 'react-native'

type Props = Message & {
  isMyMessage: boolean
  showSenderName: boolean
}

function MessageBubble ({id, message, sender, isMyMessage, showSenderName}: Props) {

  return (
    <View className='flex-row gap-2'>
      {!isMyMessage && <Avatar name={sender.name} size={38} />}
      <ThemedView className={cn("p-3 py-2 rounded-lgself-start rounded-2xl max-w-[75%]", isMyMessage ? 'ml-auto !bg-primary/20' : '!bg-gray-100')}>
        {showSenderName && <ThemedText className='!text-[14.5px] !font-medium'>{sender.name}</ThemedText>}
        <ThemedText className='!text-[14.75px] mt-0.5' lightColor='#484848'>{message}</ThemedText>
      </ThemedView>
    </View>
  )
}

export default MessageBubble