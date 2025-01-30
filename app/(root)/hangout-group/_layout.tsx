import {Colors} from "@/constants/Colors";
import {BlurView} from "expo-blur";
import {Stack} from "expo-router";

export default function HomeLayout () {
  return <Stack screenOptions={{
    headerShown: false,
    headerBackTitle: 'Back',
    headerBackButtonDisplayMode: 'minimal',
  }}>
    <Stack.Screen name="index" options={{headerShown: false}} />
    <Stack.Screen name="[group]" options={{
      presentation: 'modal'
    }}
    />
    <Stack.Screen name="create" options={{
      headerShown: true, title: 'Create Hangout Group',
      headerTransparent: true,
      headerBackground: () => (
        <BlurView
          tint="light"
          intensity={100}
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: Colors.light.background + "88",
          }}
        />
      ),
      headerTitleStyle: {
        fontSize: 18,
        fontWeight: 700
      }
    }} />
    <Stack.Screen name="search" options={{headerShown: false, animation: 'fade', animationDuration: 200}} />
  </Stack>;
}