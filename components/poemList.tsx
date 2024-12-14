import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Poem } from '../poetry/poem';
import { lightTheme } from '../themes/theme';
import { useTheme } from '../hooks/useTheme';
import { useRouter } from 'expo-router';

const PoemList: React.FC = () => {

    const { theme } = useTheme();
    const styles = createStyles(theme);
    const router = useRouter();

    const [works, setWorks] = useState<Poem[]>([]);
    const [page, setPage] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    // 从 JSON 文件读取作品的方法
    const loadMoreWorks = useCallback(async () => {
        if (loading) return;

        setLoading(true);
        try {
            // 使用 require 导入 JSON 文件
            const allWorks = require('../assets/data/works/works_tang.json');

            // 计算开始和结束索引
            const startIndex = page * 10;
            const endIndex = startIndex + 10;
            const newWorks = allWorks.slice(startIndex, endIndex);

            // 更新状态
            setWorks(prevWorks => [...prevWorks, ...newWorks]);
            setPage(prevPage => prevPage + 1);
        } catch (error) {
            console.error('Failed to load works:', error);
        } finally {
            setLoading(false);
        }
    }, [page, loading]);

    // 初始加载
    useEffect(() => {
        loadMoreWorks();
    }, []);

    const handlePoems = (id: string) => {
        router.push(`/poem/${id}`);
    }

    const renderPoemItem = ({ item }: { item: Poem }) => {
        return (
            <TouchableOpacity style={styles.poemWrap} onPress={() => { handlePoems(item.Id) }} activeOpacity={0.6}>
                <View style={styles.poemHeader}>
                    <Text style={styles.poemTitle}>{item.Title}</Text>
                    <Text style={styles.author}>[{item.Dynasty}] {item.Author}</Text>
                </View>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.poemContent}>{item.Content}</Text>
            </TouchableOpacity>
        );
    }

    // 底部加载更多组件
    const renderFooter = () => (
        loading ? (
            <View style={styles.footer}>
                <Text>Loading...</Text>
            </View>
        ) : null
    );

    return (
        <FlatList<Poem>
            data={works}
            renderItem={renderPoemItem}
            keyExtractor={(item, index) => item.Id || index.toString()}
            numColumns={1}
            contentContainerStyle={{ marginHorizontal: 20, }}
            onEndReached={loadMoreWorks}
            onEndReachedThreshold={0.5}
            ListFooterComponent={renderFooter}
            
            removeClippedSubviews={true}
            maxToRenderPerBatch={10}
            windowSize={21}
            initialNumToRender={10}
            getItemLayout={(data, index) => ({
              length: 60, // 假设每个列表项的高度
              offset: 60 * index,
              index,
            })}
        />
    );
};

const createStyles = (theme: typeof lightTheme) =>
    StyleSheet.create({
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
        },
        footer: {
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });

export default PoemList;