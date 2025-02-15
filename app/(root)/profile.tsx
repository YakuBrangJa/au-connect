import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {Feather, Ionicons} from '@expo/vector-icons';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { profileSettings } from '@/data/profile-settings.data';
import { PencilIcon, UserCircleIcon } from 'react-native-heroicons/micro';
import { useNavigation } from "@react-navigation/native";
import { router } from 'expo-router';
import Avatar from '@/components/Avatar';
import {useUser} from '@/context/UserContext';
const SettingsScreen = () => {
  const {data} = useUser()
  return (
    <><ThemedView className='flex-1' lightColor='#ffffff'>
      <SafeAreaView className='flex-1'>
      <View className="flex-1 bg-white">
      {/* Header */}
      <View className="py-4  items-center">
        
        <Text className="text-lg font-semibold">User Profile</Text>
      </View>

      {/* Profile Section */}
     
      <View className="items-center my-6  "> 
      <View className='relative'>
              <Avatar name={data.name} size={100} />
              {/* <TouchableOpacity className="absolute bottom-1 left-20 bg-gray-200 p-1.5 rounded-full border border-white">
                <Feather name="edit-2" size={14} color="black" />
        </TouchableOpacity> */}
      </View>
      
            <Text className="text-lg font-bold mt-2">{data.name}</Text>
            <Text className="text-gray-500">json@gmail.com</Text>
      </View>

      {/* Settings Options */}
      {profileSettings.map((item, index) => (
         <TouchableOpacity
         key={index}
         className="p-5 border-b border-gray-200 flex-row justify-between items-center"
         onPress={() => {
           if (item === "Notifications") {
             router.navigate("/notification")
           }
         }}
       >
         <Text className="text-base">{item}</Text>
         <Ionicons name="chevron-forward" size={20} color="gray" />
       </TouchableOpacity>
      ))}


    </View>
    </SafeAreaView>
    </ThemedView>
    </>
    );
};

export default SettingsScreen;
