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
        animation: 'shift',
        transitionSpec: {
          animation: 'timing',
          config: {
            duration: 100,
            delay: 0,
            // easing: (num) => 0.1,
            // bounciness: 10
          },
        },
        title: 'Tabs',
        tabBarActiveTintColor: Colors.primary,
        headerShown: false,
        tabBarButton: HapticTab,
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
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => <IconSymbol size={28} name="house" color={color} />,
        }}
      />
      <Tabs.Screen
        name="study-group"
        options={{
          title: 'Study',
          tabBarIcon: ({color}) => <IconSymbol size={28} name="23.square" color={color} />,
        }}
      />
      <Tabs.Screen
        name="hangout-group"
        options={{
          title: 'Hangout',
          tabBarIcon: ({color}) => <IconSymbol size={28} name="arrow.up.backward.square" color={color} />,
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: 'Messages',
          tabBarIcon: ({color}) => <IconSymbol size={28} name="message" color={color} />,
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
