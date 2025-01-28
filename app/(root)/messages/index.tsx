import React from "react";
import { View, Text, TextInput, Pressable, FlatList, ScrollView } from "react-native";
import { chat_data } from "@/data/chat.data";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import TextButton from "@/components/ui/TextButton";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileIcon from "@/components/ui/ProfileIcon";
import { PencilSquareIcon } from "react-native-heroicons/micro";

interface ChatItem {
  id: string;
  name: string;
  lastMessage: string;
  unreadCount?: number;
  avatar?: any;
}

const ChatListItem: React.FC<ChatItem> = ({ name, lastMessage, unreadCount }) => {
  return (
    <Pressable className="flex-row items-center py-3 px-2   rounded-xl my-1 border-gray-200">
      {/* Avatar */}
      <View className="mr-3">
        <View className="w-13 h-13 rounded-full bg-red-200 flex items-center justify-center">
        <ProfileIcon size={58}/>

        </View>
      </View>

      {/* Chat Details */}
      <View className="flex-1">
        <Text className="text-base font-semibold">{name}</Text>
        <Text className="text-sm text-gray-500" numberOfLines={1}>
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
    <ThemedView className="flex-1">
      <SafeAreaView className="flex-1">
        {/* Header */}
        <View className="p-4 flex-row justify-between align-middle items-center">  
          < Text className=" text-primary">Edit</ Text>
          <ThemedText type="subtitle2">Chats</ThemedText>
          <Pressable onPress={() => console.log("Open settings")}>
            <Text><PencilSquareIcon size={20} color="red"/></Text>
          </Pressable>
        </View>

        <ScrollView className="flex-1">
          {/* Search Bar */}
          <View className="bg-gray-200 px-3 py-1 rounded-2xl mx-4">
            <TextInput placeholder="Search" className="text-base" />
          </View>

          {/* Chat List */}
          <FlatList
            data={chat_data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ChatListItem {...item} />}
            contentContainerClassName="px-4 py-3"
          />
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
};

export default ChatScreen;
