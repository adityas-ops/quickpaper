import { Stack } from "expo-router";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
   return (
      <GestureHandlerRootView style={{ flex: 1 }}>
         <BottomSheetModalProvider>
            <Stack>
               <Stack.Screen name="(welcomeScreen)/index" options={{ headerShown: false }} />
               <Stack.Screen name="home/index" options={{ headerShown: false }} />
            </Stack>
         </BottomSheetModalProvider>
         <StatusBar style="inverted" />
      </GestureHandlerRootView>
   );
};

export default RootLayout;
