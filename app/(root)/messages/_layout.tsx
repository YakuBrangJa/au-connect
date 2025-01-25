import {Stack} from "expo-router";

export default function MessagesLayout () {
  return <Stack screenOptions={{headerShown: false, headerBackTitle: 'Back', headerBackButtonDisplayMode: 'minimal'}} />;
}