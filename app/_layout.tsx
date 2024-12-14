import { Stack } from "expo-router";
import { ThemeProvider } from "../contexts/themeContext";
import { StatusBar } from "expo-status-bar";

const AppLayout = () => {
    return (
        <ThemeProvider>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" options={{ title: 'Screen Not Found' }} />
                <Stack.Screen name="poems/[id]" options={{ title: '', headerShown: true, }} />
                <Stack.Screen name="poem/[id]" options={{ title: '', headerShown: true, }} />
                <Stack.Screen name="search" options={{ title: '', headerShown: false, }} />
            </Stack>
            <StatusBar style="auto" />
        </ThemeProvider>
    );
}

export default AppLayout;