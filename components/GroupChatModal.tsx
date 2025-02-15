import React, {useState, useRef, useEffect} from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  Pressable,
  Keyboard,
  Alert,

} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {format} from 'date-fns';
import {randomUUID} from 'expo-crypto';
import {useUser} from '@/context/UserContext';
import {conversation_1} from '@/data/conversation_1.data';
import {Message} from '@/types/chat.type';
import MessageBubble from '@/components/MessageBubble';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import Button, {buttonTextVariants} from '@/components/ui/Button';
import {Colors} from '@/constants/Colors';
import {useUserGroup} from '@/context/UserGroupContext';

interface Props {
  id: string;
  title: string;
  participantCount: number;
  created_at: Date;
  isJoined: boolean
  handleJoinGroup: () => void
}

function GroupChatModal ({id, title, participantCount, created_at, isJoined, handleJoinGroup}: Props) {
  const user = useUser();
  const [modalVisible, setModalVisible] = useState(false);
  const [messages, setMessages] = useState<Message[]>(conversation_1);
  const [text, setText] = useState('');

  const scrollViewRef = useRef<ScrollView>(null);

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

  useEffect(() => {
    if(scrollViewRef.current) {
      // Disable the initial scroll animation.
      setTimeout(() => scrollViewRef.current?.scrollToEnd({animated: false}), 100);
    }
  }, [modalVisible]);
  // Auto-scroll to bottom when messages update
  useEffect(() => {
    if(scrollViewRef.current) {
      setTimeout(() => scrollViewRef.current?.scrollToEnd({animated: true}), 100);
    }
  }, [messages]);

  const handlePressJoin = () => {
    Alert.alert("Join Group?", "", [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Join', onPress: () => handleJoinGroup(), style: 'default'
      },
    ])
  }

  return (
    <>
      <Button
        className="gap-1 flex-1"
        variant="outline"
        size="sm"
        onPress={() => setModalVisible(true)}
      >
        <Ionicons name="chatbubbles-outline" size={17} color={Colors.primary} />
        <Text className={buttonTextVariants({variant: 'outline'})}>Chat</Text>
      </Button>

      <Modal
        animationType="slide"
        presentationStyle="pageSheet"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
          className="flex-1"
        >
          {/* Title Bar */}
          <ThemedView
            className="p-3 pl-5 pt-4 border-b border-gray-200/90 flex-row justify-between items-start"
            lightColor="#fafafa"
          >
            <View>
              <ThemedText type="defaultSemiBold" className="text-lg">
                {title}
              </ThemedText>
              <ThemedText className="!text-[14px] !text-slate-600">
                {participantCount} participants
              </ThemedText>
            </View>
            <Pressable onPress={() => setModalVisible(false)} hitSlop={15}
              className=' active:opacity-70 active:bg-slate-200 rounded-full p-0.5'
            >
              <Ionicons name="close-outline" size={26} color={'#686868'} />
            </Pressable>
          </ThemedView>

          {/* Messages Area */}
          <ScrollView
            ref={scrollViewRef}
            className="flex-1 px-3"
            contentContainerStyle={{flexGrow: 1, paddingBottom: 20}}
            keyboardShouldPersistTaps="always"
          >
            <View className="justify-center my-2 mb-4">
              <Text className="p-3 text-center text-slate-600">
                Group created at {format(created_at, 'MMM dd, yyyy')}
              </Text>
            </View>
            <View className="gap-3">
              {messages.length > 0 ? (
                messages.map((msg) => (
                  <MessageBubble
                    key={msg.id}
                    {...msg}
                    isMyMessage={user.data.id === msg.sender.id}
                    showSenderName={user.data.id !== msg.sender.id}
                  />
                ))
              ) : (
                <ThemedText className="text-center text-gray-400 mt-4">
                  No messages yet
                </ThemedText>
              )}
            </View>
          </ScrollView>

          {/* Text Input */}
          {/* <ScrollView className=' flex-grow-0 '> */}
          <ThemedView
            className="p-3 px-5  border-t border-gray-200/80"
            lightColor="#ffffff"
          >
            <SafeAreaView className="flex-row gap-2">
              {isJoined ?
                <>
                  <TextInput
                    className="flex-1 bg-gray-100 h-[42px] px-3 py-2 rounded-2xl text-[16px] leading-5"
                    placeholder="Type a message..."
                    value={text}
                    onChangeText={setText}
                    onSubmitEditing={sendMessage}
                    returnKeyType="send"
                    onFocus={() => setTimeout(() => scrollViewRef.current?.scrollToEnd({animated: true}), 100)}
                  />

                  <Pressable className="p-2 pr-0" onPress={sendMessage}>
                    <Ionicons name="send" size={26} color={Colors.primary} />
                  </Pressable>
                </>
                :
                // <Button className='flex-1'>Join Group</Button>
                <View className='flex-row justify-center flex-1 py-2'>
                  <Pressable className='active:opacity-40' hitSlop={20} onPress={handlePressJoin}>
                    <Text className='text-primary font-semibold mr-1.5'>Join Group</Text>
                  </Pressable>
                  <Text>to participate in chat</Text>
                </View>
              }
            </SafeAreaView>
          </ThemedView>
          {/* </ScrollView> */}
        </KeyboardAvoidingView>
      </Modal>
    </>
  );
}

export default GroupChatModal;
