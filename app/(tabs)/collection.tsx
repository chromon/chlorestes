import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { lightTheme } from "../../themes/theme";
import { useTheme } from "../../hooks/useTheme";
import { Poem } from "../../poetry/poem";

const Collection: React.FC = () => {
    
    const { theme } = useTheme();
    const styles = createStyles(theme);

    const renderPoemItem = ({ item }: { item: Poem }) => {
        return (
            <TouchableOpacity style={styles.poemWrap} onLongPress={handleLongPress} activeOpacity={0.6}>
                <View style={styles.poemHeader}>
                    <Text style={styles.poemTitle}>{item.Title}</Text>
                    <Text style={styles.author}>[{item.Dynasty}] {item.Author}</Text>
                </View>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.poemContent}>{item.Content}</Text>
            </TouchableOpacity>
        );
    }

    const handleLongPress = () => {
        Alert.alert(
          '删除收藏',
          '确定要删除这个收藏吗？',
          [
            {
              text: '取消',
              style: 'cancel'
            },
            {
              text: '删除', 
              style: 'destructive',
              onPress: () => {
                console.log('delete');
              }
            }
          ],
          { 
            cancelable: true,
          }
        );
      };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>收藏</Text>
            <FlatList<Poem>
                data={poemMock}
                renderItem={renderPoemItem}
                keyExtractor={item => item.Id}
                numColumns={1}
                contentContainerStyle={{ marginHorizontal: 20, }}
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
            fontSize: 18,
            marginHorizontal: 20,
            marginVertical: 20,
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

export default Collection;