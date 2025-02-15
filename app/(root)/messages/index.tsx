import React from "react";
import { View, Text, TextInput, Pressable, FlatList, ScrollView } from "react-native";
import { chat_data } from "@/data/chat.data";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import TextButton from "@/components/ui/TextButton";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileIcon from "@/components/ui/ProfileIcon";
import { PencilSquareIcon } from "react-native-heroicons/micro";
import Avatar from "@/components/Avatar";
import {router} from "expo-router";
import SearchInput from "@/components/ui/SearchInput";
import {encodeParams} from "@/utils/encodeParam";
import {FontAwesome6} from "@expo/vector-icons";
import {Colors} from "@/constants/Colors";

interface ChatItem {
  id: string;
  name: string;
  lastMessage: string;
  unreadCount?: number;
  avatar?: any;
  onPress: () => void
}

const ChatListItem: React.FC<ChatItem> = ({name, lastMessage, unreadCount, onPress}) => {
  return (
    <Pressable className="flex-row items-center py-3 px-5 pr-7 border-gray-200  active:bg-slate-200/75" onPress={onPress}>
      {/* Avatar */}
      <View className="mr-4">
        <View className="w-13 h-13 rounded-full bg-red-200 flex items-center justify-center">
          <Avatar name={name} size={58} />
        </View>
      </View>

      {/* Chat Details */}
      <View className="flex-1 gap-1.5">
        <Text className="font-semibold text-[15.5px]">{name}</Text>
        <Text className="text-[14px] text-gray-500" numberOfLines={1}>
          {lastMessage}
        </Text>
      </View>

      {/* Unread Badge */}
      {unreadCount !== undefined && unreadCount > 0 && (
        <View className="bg-red-600 rounded-full w-6 h-6 flex items-center justify-center">
          <Text className="text-xs text-white font-bold">{unreadCount}</Text>
        </View>
      )}
    </Pressable>
  );
};

const ChatScreen = () => {
  return (
    <ThemedView className="flex-1" lightColor="#ffffff">
      <SafeAreaView className="flex-1">
        {/* Header */}
        <View className="p-4 flex-row justify-between align-middle items-center">  
          < Text className=" text-primary font-semibold">Edit</ Text>
          <ThemedText type="subtitle2">Chats</ThemedText>
          <Pressable onPress={() => console.log("Open settings")}>
            <FontAwesome6 name="edit" size={18} color={Colors.primary} />
          </Pressable>
        </View>

        {/* <ScrollView className="flex-1"> */}
          {/* Search Bar */}
        {/* <View className="bg-gray-200 px-3 py-1 rounded-2xl mx-4">
          <TextInput placeholder="Search" className="text-base h-[30px] py-1 items-center" />
          </View> */}
        <View className='pl-1.5 pr-5 pb-2.5 pt-2 flex-row items-center gap-2 border-b border-gray-200'>
          <Pressable onPress={() => router.back()} className='active:opacity-50'>
          </Pressable>
          <SearchInput placeholder="Search..." />
        </View>

          {/* Chat List */}
          <FlatList
            data={chat_data}
            keyExtractor={(item) => item.id}
          renderItem={({item}) => <ChatListItem {...item} onPress={() => router.push({
            pathname: '/(root)/messages/chat',
            params: {
              id: item.id,
              data: encodeParams(item)
            }
          })} />}
          contentContainerClassName="py-3 pt-1"
          />
        {/* </ScrollView> */}
      </SafeAreaView>
    </ThemedView>
  );
};

export default ChatScreen;
