import {Colors} from "@/constants/Colors";
import {CardShadow} from "@/constants/Shadows";
import {BlurView} from "expo-blur";
import {Stack} from "expo-router";

export default function StudyGroupLayout () {
  return <Stack screenOptions={{
    headerShown: false,
    headerBackTitle: 'Back',
    headerBackButtonDisplayMode: 'minimal',
  }}>
    <Stack.Screen name="index" options={{headerShown: false}} />
    <Stack.Screen name="create" options={{
      headerShown: true,
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
      // headerLargeTitle: true,
      // headerLargeTitleStyle: {
      //   fontSize: 25
      // },
      // contentStyle: {
      //   height: 20
      // },
      title: 'Create Study Group',
      headerTitleStyle: {
        fontSize: 17,
        fontWeight: 700
      }
    }} />
    <Stack.Screen name="[group]" options={{
      presentation: 'modal'
    }}
    />
    <Stack.Screen name="search" options={{headerShown: false, animation: 'fade', animationDuration: 200}} />
  </Stack>;
}