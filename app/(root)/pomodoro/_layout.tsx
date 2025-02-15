import {PomodoroContextProvider} from "@/context/PomodoroContext";
import {Stack} from "expo-router";

export default function PomodoroLayout () {
  return (
    <Stack screenOptions={{
      headerShown: false,
      headerBackTitle: 'Back',
      headerBackButtonDisplayMode: 'minimal',
    }}>
      <Stack.Screen name="index" options={{headerShown: false}} />
      <Stack.Screen name="active-session" options={{headerShown: false}} />
      <Stack.Screen name="group-session" options={{headerShown: false}} />
    </Stack>
  );
}