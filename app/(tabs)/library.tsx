import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { lightTheme } from "../../themes/theme";
import { useTheme } from "../../hooks/useTheme";
import VerticalText from "../../components/verticalText";
import { useRouter } from "expo-router";
import { Poems } from "../../poetry/poems";
import { useEffect, useState } from "react";

const Library: React.FC = () => {

    const { theme } = useTheme();
    const styles = createStyles(theme);
    const router = useRouter();

    const [data, setData] = useState<Poems[] | null>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadLibraryData();
    }, []);

    const loadLibraryData = async () => {
        try {
            const libraryData = require('../../assets/data/library.json') as Poems[];
            // console.log(libraryData);
            setData(libraryData);
        } catch (error) {
            console.error('read excerpt json data error:', error);
        } finally {
            setLoading(false);
        }
    };

    const renderPoemsItem = ({ item }: { item: Poems }) => {
        return (
            <TouchableOpacity style={styles.poemsWrap} activeOpacity={0.6}
                onPress={() => handlePoems(item)}>
                <View style={styles.poems}>
                    <VerticalText
                        text={item.title}
                        textStyle={{
                            fontSize: 24,
                        }}
                        charHeight={30}
                        charWidth={30}
                        containerStyle={{}}
                    />
                    <VerticalText
                        text={item.subTitle}
                        textStyle={{
                            fontSize: 18,
                            color: theme.colors.quinary,
                        }}
                        charHeight={25}
                        charWidth={25}
                        containerStyle={{
                            marginTop: 5
                        }}
                    />
                </View>
            </TouchableOpacity>
        );
    }

    const handlePoems = (item: Poems) => {
        // router.push(`/poems/${item.id}`);
        router.push({
            pathname: `/poems/${item.id}`,
            params: {item: JSON.stringify(item) as string},
        });
    }

    if (loading) {
        return (
            <ActivityIndicator size="large" />
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>选集</Text>
            <FlatList<Poems>
                data={data}
                renderItem={renderPoemsItem}
                keyExtractor={item => item.id}
                numColumns={4}
                contentContainerStyle={{ marginHorizontal: 20 }}
            />
        </SafeAreaView>
    );
}

const createStyles = (theme: typeof lightTheme) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.secondary,
        },
        title: {
            fontSize: 20,
            marginHorizontal: 40,
            marginVertical: 20,
        },
        poemsWrap: {
            width: '25%',
        },
        poems: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderTopWidth: 2,
            borderColor: theme.colors.primary,
            margin: 20,
            paddingTop: 15
        }
    });

export default Library;