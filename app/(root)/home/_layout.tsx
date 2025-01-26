import {Stack} from "expo-router";

export default function HomeLayout () {
  return <Stack screenOptions={{
    headerShown: false,
    headerBackTitle: 'Back',
    headerBackButtonDisplayMode: 'minimal',
  }}>
    <Stack.Screen name="index" options={{headerShown: false}} />
    <Stack.Screen name="[study]" options={{
      presentation: 'modal'
    }} />
    <Stack.Screen name="[hangout]" options={{
      presentation: 'modal'
    }} />
  </Stack>;
}