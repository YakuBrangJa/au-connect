import {Stack, Tabs} from 'expo-router';
import React from 'react';
import {Platform} from 'react-native';

import {HapticTab} from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import {Colors} from '@/constants/Colors';
import {useColorScheme} from '@/hooks/useColorScheme';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout () {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        animation: 'shift',
        title: 'Root',
        tabBarShowLabel: true,
        tabBarInactiveTintColor: '#262626',
        tabBarActiveTintColor: Colors.primary,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            paddingTop: 3,
            backgroundColor: '#F3F7FA77',
            height: 85,
            position: 'absolute',
          },
          default: {
            paddingTop: 4,
            height: 75,
            // backgroundColor: '#F3F7FA77',
            // position: 'absolute',
          },
        }),
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          // href: "/home",
          tabBarIcon: ({color, focused}) => focused ? <Ionicons name="home" size={25} color={color} /> : <Ionicons name="home-outline" size={25} color={color} />,
        }}
      />
      <Tabs.Screen
        name="study-group"
        options={{
          title: 'Study',
          // href: '/(root)/study-group',
          tabBarIcon: ({color, focused}) => focused ? <Ionicons name='book' size={25} color={color} /> : <Ionicons name='book-outline' size={25} color={color} />,
        }}
      />
      <Tabs.Screen
        name="hangout-group"
        options={{
          title: 'Hangout',
          // href: '/(root)/hangout-group',
          tabBarIcon: ({color, focused}) => focused ? <Ionicons name="people" size={28} color={color} /> : <Ionicons name="people-outline" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="pomodoro"
        options={{
          title: 'Pomodoro',
          // href: null,
          // href: '/pomodoro',
          tabBarIcon: ({color, focused}) => focused ? <Ionicons name="timer" size={26} color={color} /> : <Ionicons name="timer-outline" size={26} color={color} />,
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{

          title: 'Messages',
          // href: '/messages',
          tabBarIcon: ({color, focused}) => focused ? <Ionicons name="chatbox" size={26} color={color} /> : <Ionicons name="chatbox-outline" size={26} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          // href: '/profile',
          tabBarIcon: ({color, focused}) => focused ? <Ionicons name="person" size={25} color={color} /> : <Ionicons name="person-outline" size={25} color={color} />,
        }}
      />
    </Tabs>
  );
}
