import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { lightTheme } from "../themes/theme";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useTheme } from "../hooks/useTheme";
import { Poem, poemMock } from "../poetry/poem";

const Search: React.FC = () => {

    const { theme } = useTheme();
    const styles = createStyles(theme);

    const renderPoemItem = ({ item }: { item: Poem }) => {
        return (
            <TouchableOpacity style={styles.poemWrap}  activeOpacity={0.6}>
                <View style={styles.poemHeader}>
                    <Text style={styles.poemTitle}>{item.title}</Text>
                    <Text style={styles.author}>[{item.dynasty}] {item.author}</Text>
                </View>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.poemContent}>{item.content}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchBar}>
                <MaterialIcons name="search" size={24} color={theme.colors.tertiary} style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="无力挣扎的一生"
                    selectionColor={theme.colors.primary}
                />
            </View>
            <View>
                <Text style={styles.title}>作品</Text>
                <FlatList<Poem>
                    data={poemMock}
                    renderItem={renderPoemItem}
                    keyExtractor={item => item.id}
                    numColumns={1}
                    contentContainerStyle={{ marginHorizontal: 20, }}
                />
            </View>
        </SafeAreaView>
    );
}

const createStyles = (theme: typeof lightTheme) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.secondary,
        },
        searchBar: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 2,
            margin: 20,
            borderColor: theme.colors.tertiary,
            borderWidth: 1,
            borderRadius: 20,
        },
        searchIcon: {
            marginHorizontal: 5,
        },
        searchInput: {
            flex: 1,
            marginLeft: 5,
        },
        title: {
            fontSize: 18,
            marginHorizontal: 20,
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

export default Search;