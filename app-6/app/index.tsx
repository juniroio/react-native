import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';

export default function Index1() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container2}>
                <View style={[styles.box, styles.cor1]}></View>
                <View style={[styles.box, styles.cor1]}></View>
                <View style={[styles.box, styles.cor1]}></View>
                <View style={[styles.box, styles.cor2]}></View>
                <View style={[styles.box, styles.cor4]}></View>
                <View style={[styles.box, styles.cor4]}></View>
            </View>

            <View style={styles.container2}>
                <View style={[styles.box, styles.cor1]}></View>
                <View style={[styles.box, styles.cor1]}></View>
                <View style={[styles.box, styles.cor4]}></View>
                <View style={[styles.box, styles.cor3]}></View>
                <View style={[styles.box, styles.cor4]}></View>
                <View style={[styles.box, styles.cor4]}></View>
            </View>

            <View style={styles.container2}>
                <View style={[styles.box, styles.cor1]}></View>
                <View style={[styles.box, styles.cor2]}></View>
                <View style={[styles.box, styles.cor3]}></View>
                <View style={[styles.box, styles.cor3]}></View>
                <View style={[styles.box, styles.cor1]}>
                    <Link
                        href="/index2"
                        style={{ color: 'white', fontSize: 20 }}
                    >
                        Clique para ir para proxima página
                    </Link>
                </View>
                <View style={[styles.box, styles.cor4]}></View>
            </View>

            <View style={styles.container2}>
                <View style={[styles.box, styles.cor4]}></View>
                <View style={[styles.box, styles.cor3]}></View>
                <View style={[styles.box, styles.cor3]}></View>
                <View style={[styles.box, styles.cor3]}></View>
                <View style={[styles.box, styles.cor3]}></View>
                <View style={[styles.box, styles.cor2]}></View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
    },
    container2: {
        flex: 1,
        flexDirection: 'column',
    },
    box: {
        flex: 1
    },
    cor1: {
        backgroundColor: '#00F'
    },
    cor2: {
        backgroundColor: '#05F'
    },
    cor3: {
        backgroundColor: '#0AF'
    },
    cor4: {
        backgroundColor: '#0BF'
    },

})