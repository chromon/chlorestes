import { useLocalSearchParams, useNavigation } from "expo-router";
import { useTheme } from "../../hooks/useTheme";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { lightTheme } from "../../themes/theme";
import { useEffect } from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Poem = () => {

    const { theme } = useTheme();
    const styles = createStyles(theme);
    const { id } = useLocalSearchParams();
    const navigation = useNavigation();

    const content = '木末芙蓉花，山中发红萼。\r\n涧户寂无人，纷纷开且落。\r\n木末芙蓉花，山中发红萼。\r\n涧户寂无人，纷纷开且落。';

    useEffect(() => {
        navigation.setOptions({
            headerShown: true, headerRight: () => (
                <TouchableOpacity onPress={() => { }}  activeOpacity={0.6}>
                    <MaterialIcons name="star-border" size={24} color={theme.colors.quaternary}/>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <SafeAreaView style={styles.container}>
            {/* <Text>poem id: {id}</Text> */}
            <ScrollView>
                <View style={styles.poemWrap}>
                    <Text style={styles.title}>春思</Text>
                    <Text style={styles.author}>[唐] 李白</Text>
                    <Text style={styles.content}>{content}</Text>
                </View>
                <View style={styles.detailsWrap}>
                    <Text style={styles.detailsTitle}>简介</Text>
                    <Text style={styles.detailsContent}>{'《代赠》的作者是唐代诗人李商隐。这首诗写思妇之离愁，是作者以女子的口吻写与情人离别的愁思，这首诗写离愁，写得风华流美，情致宛转。不但写女主人公无心凭栏远眺，而且连眼前的芭蕉和丁香都含愁不解，愈添感伤。'}</Text>
                </View>
                <View style={styles.detailsWrap}>
                    <Text style={styles.detailsTitle}>译文</Text>
                    <Text style={styles.detailsContent}>{'《代赠》的作者是唐代诗人李商隐。这首诗写思妇之离愁，是作者以女子的口吻写与情人离别的愁思，这首诗写离愁，写得风华流美，情致宛转。不但写女主人公无心凭栏远眺，而且连眼前的芭蕉和丁香都含愁不解，愈添感伤。'}</Text>
                </View>
                <View style={styles.detailsWrap}>
                    <Text style={styles.detailsTitle}>注释</Text>
                    <Text style={styles.detailsContent}>{'《代赠》的作者是唐代诗人李商隐。这首诗写思妇之离愁，是作者以女子的口吻写与情人离别的愁思，这首诗写离愁，写得风华流美，情致宛转。不但写女主人公无心凭栏远眺，而且连眼前的芭蕉和丁香都含愁不解，愈添感伤。'}</Text>
                </View>
                <View style={styles.detailsWrap}>
                    <Text style={styles.detailsTitle}>选评</Text>
                    <Text style={styles.detailsContent}>{'《代赠》的作者是唐代诗人李商隐。这首诗写思妇之离愁，是作者以女子的口吻写与情人离别的愁思，这首诗写离愁，写得风华流美，情致宛转。不但写女主人公无心凭栏远眺，而且连眼前的芭蕉和丁香都含愁不解，愈添感伤。'}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const createStyles = (theme: typeof lightTheme) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.secondary,
        },
        poemWrap: {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginBottom: 20,
        },
        title: {
            fontSize: 24,
            marginVertical: 20
        },
        author: {
            fontSize: 18,
            marginBottom: 20,
        },
        content: {
            fontSize: 18,
            lineHeight: 36
        },
        detailsWrap: {
            marginHorizontal: 20,
            marginBottom: 20,
        },
        detailsTitle: {
            fontSize: 18,
            color: theme.colors.primary,
            marginVertical: 20,
        },
        detailsContent: {
            fontSize: 16,
            lineHeight: 28,
            textAlign: 'justify',
        }
    });

export default Poem;