import { ActivityIndicator, SafeAreaView, StyleSheet, View } from "react-native"
import { useTheme } from "../../hooks/useTheme";
import { lightTheme } from "../../themes/theme";
import VerticalText from "../../components/verticalText";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import ToolsBar from "../../components/toolsBar";

interface DataItem {
    id: string
    author: string;
    dynasty: number;
    excerpt: string[];
}

const Excerpt: React.FC = () => {

    const { theme } = useTheme();
    const styles = createStyles(theme);
    const navigation = useNavigation();

    const [data, setData] = useState<DataItem | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerRight: () => (
                <ToolsBar />
            ),
        });
        loadExcerptData();
    }, [navigation]);

    const loadExcerptData = async () => {
        try {
            const excerptData = require('../../assets/data/excerpt.json') as DataItem[];
            const index = Math.floor(Math.random() * excerptData.length);
            // console.log(excerptData);
            // console.log(excerptData[index].excerpt);
            setData(excerptData[index]);
        } catch (error) {
            console.error('read excerpt json data error:', error);
        } finally {
            setLoading(false);
        }
    };

    const renderExcerpt = () => {
        return (
            <>
                <View style={styles.excerpt}>
                    {[...data!.excerpt].reverse().map((poem, index) => (
                        <VerticalText
                            key={index}
                            text={poem}
                            textStyle={{
                                fontSize: 28,
                            }}
                            charHeight={40}
                            charWidth={40}
                            containerStyle={{
                                margin: 15
                            }}
                        />
                    ))}
                </View>
                <View style={styles.author}>
                    <VerticalText
                        text={`|${data!.author}`}
                        textStyle={{
                            fontSize: 24,
                        }}
                        charHeight={30}
                        charWidth={30}
                        containerStyle={{}}
                    />
                    <View style={styles.authorSpace}></View>
                </View>
            </>
        );
    }

    if (loading) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.card}>
                    <ActivityIndicator size="large" />
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                {renderExcerpt()}
            </View>
        </SafeAreaView>
    );
}

const createStyles = (theme: typeof lightTheme) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.tertiary,
        },
        card: {
            flex: 1,
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            margin: 30,
            backgroundColor: theme.colors.secondary,
            borderRadius: 10,
        },
        excerpt: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            marginTop: 50,
            marginRight: 30,
        },
        authorSpace: {
            flex: 0.4,
        },
        author: {
            flex: 0.4,
            flexDirection: 'column-reverse',
            alignItems: 'flex-end',
            justifyContent: 'center',
        }
    });

export default Excerpt;