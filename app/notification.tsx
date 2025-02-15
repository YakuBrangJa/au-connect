import React, { useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { notifications as data } from "@/data/notification.data";
import {ThemedView} from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileIcon from "@/components/ui/ProfileIcon";

const categories = {
  all: "All",
  friend_request: "Friend Requests",
  event: "Events",
  hangout: "Hangout Groups",
  message: "Messages",
  call: "Calls",
};

const groupedNotifications = (notifications: any[]) => {
  const categorized: Record<string, any[]> = Object.keys(categories).reduce((acc, key) => {
    acc[key] = [];
    return acc;
  }, {} as Record<string, any[]>);

  notifications.forEach((notif) => {
    if (categorized[notif.type]) {
      categorized[notif.type].push(notif);
    }
    categorized.all.push(notif); // "All" tab includes everything
  });

  return categorized;
};

const NotificationItem = ({ item, markAsRead }: { item: any; markAsRead: any }) => (
  <Pressable
    className={`flex-row items-center py-3 px-2 rounded-xl my-1 border-gray-200 ${
      !item.read ? "bg-red-50" : "bg-white"
    }`}
    onPress={() => markAsRead(item.id)}
  >
    {/* Avatar */}
    <View className="mr-3">
      <View className="w-13 h-13 rounded-full bg-red-200 flex items-center justify-center">
        <ProfileIcon size={58} />
      </View>
    </View>

    {/* Notification Details */}
    <View className="flex-1">
      <Text className="text-base font-semibold">{item.sender}</Text>
      <Text className="text-sm text-gray-500" numberOfLines={1}>
        {item.content}
      </Text>
    </View>

    {/* Unread Indicator */}
    {!item.read && (
      <View className="bg-red-600 rounded-full w-6 h-6 flex items-center justify-center">
        <Text className="text-xs text-white font-bold">!</Text>
      </View>
    )}
  </Pressable>
);

const NotificationsScreen = () => {
  const [notifications, setNotifications] = useState(data);
  const categorized = groupedNotifications(notifications);
  const [activeTab, setActiveTab] = useState("all");

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
  };

  return (
    <ThemedView className="min-h-screen">
      <SafeAreaView className=" min-h-screen">
        

        {/* Tabs */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="  px-4">
          {Object.entries(categories).map(([key, label]) => (
            <Pressable
              key={key}
              onPress={() => setActiveTab(key)}
              className={`px-4 py-2 rounded-full mx-1 ${
                activeTab === key ? "bg-red-500" : "bg-gray-200"
              }`}
            >
              <Text className={`text-sm font-semibold ${activeTab === key ? "text-white" : "text-gray-800"}`}>
                {label}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        <ScrollView className="  px-4 py-3">
          {/* Mark All as Read */}
          <Pressable
            className="bg-red-500 mx-4 py-2 rounded-lg flex items-center"
            onPress={() => setNotifications(notifications.map(n => ({ ...n, read: true })))}
          >
            <Text className="text-white text-sm font-bold">Mark all as read</Text>
          </Pressable>

          {/* Notification List */}
          {categorized[activeTab].length > 0 ? (
            categorized[activeTab].map((notif) => (
              <NotificationItem key={notif.id} item={notif} markAsRead={markAsRead} />
            ))
          ) : (
            <Text className="text-gray-500 text-center mt-4">No notifications in this category</Text>
          )}
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
};

export default NotificationsScreen;
