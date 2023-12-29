import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function LoginScreen() {
  const { top } = useSafeAreaInsets();
  return (
    <SafeAreaView style={{ top: top }}>
      <Text>LoginScreen</Text>
    </SafeAreaView>
  );
}
