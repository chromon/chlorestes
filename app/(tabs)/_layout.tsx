import { Tabs } from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useTheme } from "../../hooks/useTheme";

const TabLayout = () => {

    const { theme } = useTheme();

    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: theme.colors.primary,
            tabBarStyle: {
                height: 64,
                shadowColor: 'transparent',
                elevation: 0,
                shadowOpacity: 0,
                borderTopWidth: 0,
            },
            tabBarIconStyle: { marginTop: 10 },
            tabBarLabelStyle: {
                marginBottom: 10,
                fontWeight: 'bold',
            }
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: '',
                    tabBarLabel: '摘录',
                    headerShadowVisible: false,
                    tabBarIcon: ({ focused, color }) => {
                        return <MaterialCommunityIcons name="fountain-pen-tip" size={28} color={color} />
                    },
                }}
            />
            <Tabs.Screen
                name="library"
                options={{
                    headerShown: false,
                    title: '',
                    tabBarLabel: '文库',
                    headerShadowVisible: false,
                    tabBarIcon: ({ color }) => {
                        return <MaterialCommunityIcons name="bookshelf" size={28} color={color} />
                    },
                }}
            />
            <Tabs.Screen
                name="collection"
                options={{
                    title: '',
                    tabBarLabel: '收藏',
                    headerShown: false,
                    headerShadowVisible: false,
                    tabBarIcon: ({ focused, color }) => {
                        return focused
                            ? <MaterialCommunityIcons name="star" size={28} color={color} />
                            : <MaterialCommunityIcons name="star-outline" size={28} color={color} />
                    }
                }}
            />
        </Tabs>
    );
}

export default TabLayout;