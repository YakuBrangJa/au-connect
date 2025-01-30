import {Platform, SafeAreaView} from "react-native";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";

export const OsSafeAreaView = Platform.OS === 'ios' ? SafeAreaView : RNSafeAreaView
