import {Stack, Tabs} from 'expo-router';
import React from 'react';
import {Platform} from 'react-native';

import {HapticTab} from '@/components/HapticTab';
import {IconSymbol} from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import {Colors} from '@/constants/Colors';
import {useColorScheme} from '@/hooks/useColorScheme';
import {opacity} from 'react-native-reanimated/lib/typescript/Colors';


export default function TabLayout () {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        animation: 'shift',
        // transitionSpec: {
        //   animation: 'timing',
        //   config: {
        //     duration: 100,
        //     delay: 0,
        //     // easing: (num) => 0.1,
        //     // bounciness: 10
        //   },
        // },
        title: 'Root',
        // tabBarInactiveBackgroundColor: '#F3F7FA',
        // tabBarActiveBackgroundColor: '#F3F7FA',
        tabBarShowLabel: true,
        tabBarInactiveTintColor: '#383838',
        tabBarActiveTintColor: Colors.primary,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            paddingTop: 3,
            backgroundColor: '#F3F7FA77',
            height: 85,
            // backgrounTransparent: '',
            // backdropFilter: 'blur(10px)',
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
          // href: "/home",
          tabBarIcon: ({color}) => <IconSymbol size={28} name="house" color={color} />,
        }}
      />
      <Tabs.Screen
        name="study-group"
        options={{
          title: 'Study',
          // href: '/(root)/study-group',
          tabBarIcon: ({color}) => <IconSymbol size={28} name="23.square" color={color} />,
        }}
      />
      <Tabs.Screen
        name="hangout-group"
        options={{
          title: 'Hangout',
          // href: '/(root)/hangout-group',
          tabBarIcon: ({color}) => <IconSymbol size={28} name="arrow.up.backward.square" color={color} />,
        }}
      />
      <Tabs.Screen
        name="pomodoro"
        options={{
          title: 'Pomodoro',
          href: null,
          // href: '/pomodoro',
          tabBarIcon: ({color}) => <IconSymbol size={28} name="clock.badge" color={color} />,
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{

          title: 'Messages',
          // href: '/messages',
          tabBarIcon: ({color}) => <IconSymbol size={28} name="message" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          // href: '/profile',
          tabBarIcon: ({color}) => <IconSymbol size={28} name="person" color={color} />,
        }}
      />
    </Tabs>
  );
}
