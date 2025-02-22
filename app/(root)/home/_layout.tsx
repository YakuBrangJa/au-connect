import {Stack} from "expo-router";

export default function HomeLayout () {
  return <Stack screenOptions={{
    headerShown: false,
    headerBackTitle: 'Back',
    headerBackButtonDisplayMode: 'minimal',
  }}>
    <Stack.Screen name="index" options={{headerShown: false}} />
    <Stack.Screen name="[group]" options={{
      // presentation: 'modal',
      contentStyle: {
        // overflow: 'hidden',
        // borderRadius: '100px'
      }
    }} />
    {/* <Stack.Screen name="[hangout]" options={{
      presentation: 'modal'
    }} /> */}
  </Stack>;
}