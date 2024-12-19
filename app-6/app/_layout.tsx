import { Stack } from "expo-router";

export default function RootLayout() {
    return(
        <Stack>
            <Stack.Screen name="index" />
            <Stack.Screen name="index2" />
            <Stack.Screen name="index3" />
            <Stack.Screen name="index4" />
            <Stack.Screen name="index5" />
        </Stack>
    )
}