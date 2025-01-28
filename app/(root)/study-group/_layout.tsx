import {Stack} from "expo-router";

export default function StudyGroupLayout () {
  return <Stack screenOptions={{
    headerShown: false,
    headerBackTitle: 'Back',
    headerBackButtonDisplayMode: 'minimal',
  }}>
    <Stack.Screen name="index" options={{headerShown: false}} />
    <Stack.Screen name="create" options={{
      headerShown: true, title: 'Create Study Group', headerTitleStyle: {
        fontSize: 18,
        fontWeight: 700
      }
    }} />
    <Stack.Screen name="[group]" options={{
      presentation: 'modal'
    }}
    />
  </Stack>;
}