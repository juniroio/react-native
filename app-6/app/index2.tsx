import { SafeAreaView, StyleSheet, View} from 'react-native';
import { Link } from 'expo-router';

export default function Index2() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.cor1]}></View>
            <View style={[styles.cor2]}></View>
            <View style={[styles.cor3]}>
                <Link
                    href="/index3"
                    style={{ color: 'white', fontSize: 20 }}
                >
                    Clique para ir para proxima página
                </Link>
            </View>
            <View style={[styles.cor4]}></View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',

    },
    cor1: {
        flex: 1,
        backgroundColor: '#00F'
    },
    cor2: {
        flex: 1,
        backgroundColor: '#05F'
    },
    cor3: {
        flex: 1,
        backgroundColor: '#0AF'
    },
    cor4: {
        flex: 1,
        backgroundColor: '#0BF'
    },

})