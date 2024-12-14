import { StyleSheet, TouchableOpacity, View } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { lightTheme } from "../themes/theme";
import { useTheme } from "../hooks/useTheme";
import { useRouter } from "expo-router";

const ToolsBar = () => {

    const { theme, toggleTheme } = useTheme();
    const styles = createStyles(theme);
    const router = useRouter();

    const handleSearch = () => {
        router.push(`/search`);
    }

    return (
        <View style={styles.toolsBarWrap}>
            <View style={styles.toolsBarItems}>
                <TouchableOpacity onPress={() => { }}>
                    <MaterialIcons name="share" size={22} color={theme.colors.quaternary} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSearch }>
                    <MaterialIcons name="search" size={24}
                        color={theme.colors.quaternary} style={styles.itemMargin} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}>
                    <MaterialIcons name="star-border" size={24}
                        color={theme.colors.quaternary} style={styles.itemMargin} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const createStyles = (theme: typeof lightTheme) =>
    StyleSheet.create({
        toolsBarWrap: {
            flex: 1,
            flexDirection: 'row',
            paddingHorizontal: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        toolsBarItems: {
            flex: 1,
            flexDirection: 'row-reverse',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        itemMargin: {
            marginRight: 20,
        },
    });

export default ToolsBar;