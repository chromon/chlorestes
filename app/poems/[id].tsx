import { useLocalSearchParams, useRouter } from "expo-router";
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { lightTheme } from "../../themes/theme";
import { useTheme } from "../../hooks/useTheme";
import PoemList from "../../components/poemList";
// // import { poemsData } from "../../poetry/poems";
// import { Poem } from "../../poetry/poem";
// import { Poems } from "../../poetry/poems";

const PoemsPage = () => {

    const { theme } = useTheme();
    const styles = createStyles(theme);

    const params  = useLocalSearchParams();
    const parsedItem = typeof params.item === 'string' 
        ? JSON.parse(params.item) : null;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.poemsWrap}>
                <Text style={styles.title}>{parsedItem.title}:{parsedItem.id}</Text>
                <Text style={styles.description}>{parsedItem.description}</Text>
            </View>
            <PoemList />
        </SafeAreaView>
    );
}
const createStyles = (theme: typeof lightTheme) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.secondary,
        },
        poemsWrap: {
            flexDirection: 'column',
            marginHorizontal: 20,
            marginBottom: 20,
        },
        title: {
            fontSize: 18,
            marginBottom: 10,
        },
        description: {
            fontSize: 14,
            color: theme.colors.quinary,
        },
        poemWrap: {
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            marginVertical: 20,
        },
        poemHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
        },
        poemTitle: {
            borderTopWidth: 2,
            borderTopColor: theme.colors.primary,
            fontSize: 18,
        },
        author: {
            fontSize: 16,
            color: theme.colors.quinary,
        },
        poemContent: {
            fontSize: 14,
            color: theme.colors.quinary,
        }
    });

export default PoemsPage;