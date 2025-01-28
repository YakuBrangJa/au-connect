import {Stack} from "expo-router";

export default function MessagesLayout () {
  return <Stack screenOptions={{
    headerShown: false,
    headerBackTitle: 'Back',
    headerBackButtonDisplayMode: 'minimal',
  }}>
    <Stack.Screen name="index" options={{headerShown: false}} />
    <Stack.Screen name="[group]" options={{
      presentation: 'modal',
      sheetCornerRadius: 100
    }}
    />
  </Stack>;}