import MessageBubble from '@/components/MessageBubble'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import {ThemedText} from '@/components/ThemedText'
import {ThemedView} from '@/components/ThemedView'
import {Colors} from '@/constants/Colors'
import {useUser} from '@/context/UserContext'
import {conversation_1} from '@/data/conversation_1.data'
import friendchatData, {friend_conversation_1} from '@/data/friendchat.data'
import {FriendMessage, Message} from '@/types/chat.type'
import {decodeCustomParams} from '@/utils/encodeParam'
import {Ionicons} from '@expo/vector-icons'
import {format} from 'date-fns'
import {randomUUID} from 'expo-crypto'
import {Stack, useLocalSearchParams, useNavigation} from 'expo-router'
import React, {useEffect, useRef, useState} from 'react'
import {KeyboardAvoidingView, Platform, Pressable, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native'

interface Props {
  id: string;
  title: string;
  created_at: Date;
  isJoined: boolean
  handleJoinGroup: () => void
}

function ChatScreen () {
  const user = useUser();
  const params = useLocalSearchParams()
  const friendData = decodeCustomParams(params.data)
  const navigation = useNavigation()

  const [messages, setMessages] = useState<FriendMessage[]>(friendchatData[friendData.id]);
  const [text, setText] = useState('');

  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if(scrollViewRef.current) {
      // Disable the initial scroll animation.
      setTimeout(() => scrollViewRef.current?.scrollToEnd({animated: false}), 100);
    }
  }, []);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    if(scrollViewRef.current) {
      setTimeout(() => scrollViewRef.current?.scrollToEnd({animated: true}), 100);
    }
  }, [messages]);


  useEffect(() => {
    navigation.setOptions({headerTitle: friendData.name});
  }, [navigation]);

  const sendMessage = () => {
    if(text.trim().length > 0) {
      setMessages((prev) => [
        ...prev,
        {
          id: randomUUID(),
          sender: {
            id: user.data.id,
            name: user.data.name,
          },
          message: text,
          created_at: new Date(),
        },
      ]);
      setText('');
    }
  };

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
        className="flex-1"
      >
        <ScrollView
          ref={scrollViewRef}
          className="flex-1"
          contentContainerStyle={{flexGrow: 1, paddingBottom: 0}}
          keyboardShouldPersistTaps="always"
        >
          <ThemedView className="gap-3 p-3 pb-4 flex-1" lightColor='#ffffff'>
            {messages.length > 0 ? (
              messages.map((msg) => (
                <MessageBubble
                  key={msg.id}
                  {...msg}
                  sender={{
                    id: user.data.id === msg.sender.id ? user.data.id : friendData.id,
                    name: user.data.id === msg.sender.id ? user.data.name : friendData.name,
                  }}
                  isMyMessage={user.data.id === msg.sender.id}
                  showSenderName={false}

                />
              ))
            ) : (
              <ThemedText className="text-center text-gray-400 mt-4">
                No messages yet
              </ThemedText>
            )}
          </ThemedView>
        </ScrollView>

        {/* Text Input */}
        <ThemedView
          className="p-3 px-5 border-t border-gray-200/80 flex-row"
          style={Platform.select({
            ios: {
              height: 115
            },
            android: {
              height: 65
            }
          })}
          lightColor="#ffffff"
        >
          <TextInput
            className="flex-1 bg-gray-100 h-[42px] px-3 py-2 rounded-2xl text-[16px] leading-5"
            placeholder="Type a message..."
            value={text}
            onChangeText={setText}
            returnKeyType="send"
            onFocus={() => setTimeout(() => scrollViewRef.current?.scrollToEnd({animated: true}), 100)}
          />

          <Pressable className="p-2 pr-0" onPress={sendMessage}>
            <Ionicons name="send" size={26} color={Colors.primary} />
          </Pressable>
        </ThemedView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default ChatScreen