import {Stack, Tabs} from 'expo-router';
import React from 'react';
import {Platform} from 'react-native';

import {HapticTab} from '@/components/HapticTab';
import {IconSymbol} from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import {Colors} from '@/constants/Colors';
import {useColorScheme} from '@/hooks/useColorScheme';


export default function TabLayout () {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        title: 'Tabs',
        tabBarActiveTintColor: Colors.primary,
        headerShown: false,
        // tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {

          },
        }),
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          href: '/home',
          tabBarIcon: ({color}) => <IconSymbol size={28} name="house" color={color} />,
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: 'Messages',
          href: '/messages',
          tabBarIcon: ({color}) => <IconSymbol size={28} name="message" color={color} />,
        }}
      />
      <Tabs.Screen
        name="pomodoro"
        options={{
          title: 'Pomodoro',
          tabBarIcon: ({color}) => <IconSymbol size={28} name="clock" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({color}) => <IconSymbol size={28} name="person" color={color} />,
        }}
      />
    </Tabs>
  );
}
